#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync, statSync, readFileSync, rmSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');
const args = process.argv.slice(2);
const hasFilter = args.includes('--synthetic') || args.includes('--real-world');
const runSynthetic = args.includes('--synthetic') || !hasFilter;
const runRealWorld = args.includes('--real-world') || !hasFilter;
const RUNS = parseInt(args.find(a => a.startsWith('--runs='))?.split('=')[1] ?? '5');
const WARMUP = parseInt(args.find(a => a.startsWith('--warmup='))?.split('=')[1] ?? '2');

console.log('Building fallow (release)...');
const buildResult = spawnSync('cargo', ['build', '--release'], { cwd: rootDir, stdio: 'pipe', timeout: 300000 });
if (buildResult.status !== 0) { console.error('Build failed:', buildResult.stderr?.toString()); process.exit(1); }
const fallowBin = join(rootDir, 'target', 'release', 'fallow');
const jscpdBin = join(__dirname, 'node_modules', '.bin', 'jscpd');
if (!existsSync(jscpdBin)) { console.error('jscpd not found. Run: cd benchmarks && npm install'); process.exit(1); }

const fallowVersion = spawnSync(fallowBin, ['--version'], { stdio: 'pipe' }).stdout?.toString().trim();
const jscpdVersion = spawnSync(jscpdBin, ['--version'], { stdio: 'pipe' }).stdout?.toString().trim();

console.log(`\n=== Fallow Dupes vs jscpd Benchmark Suite ===\n`);
console.log(`Tools:\n  fallow dupes  ${fallowVersion}\n  jscpd         ${jscpdVersion}\nConfig: ${RUNS} runs, ${WARMUP} warmup\n`);

function countSourceFiles(dir) {
  let count = 0;
  const walk = d => {
    try {
      for (const e of readdirSync(d)) {
        if (['node_modules', '.git', 'dist', 'report'].includes(e)) continue;
        const f = join(d, e);
        try { const s = statSync(f); if (s.isDirectory()) walk(f); else if (/\.(ts|tsx|js|jsx|mjs|cjs)$/.test(e)) count++; } catch {}
      }
    } catch {}
  };
  walk(dir); return count;
}

function timeRun(cmd, cmdArgs, cwd) {
  const start = performance.now();
  const result = spawnSync(cmd, cmdArgs, {
    cwd,
    stdio: 'pipe',
    timeout: 600000,
    maxBuffer: 50 * 1024 * 1024,
    env: { ...process.env, NO_COLOR: '1', FORCE_COLOR: '0' },
  });
  return {
    elapsed: performance.now() - start,
    status: result.status,
    stdout: result.stdout?.toString() ?? '',
    stderr: result.stderr?.toString() ?? '',
  };
}

function parseFallowCloneCount(stdout) {
  try {
    const data = JSON.parse(stdout);
    return {
      groups: data.stats?.clone_groups ?? data.clone_groups?.length ?? '?',
      instances: data.stats?.clone_instances ?? '?',
      pct: data.stats?.duplication_percentage?.toFixed(1) ?? '?',
    };
  } catch { return { groups: '?', instances: '?', pct: '?' }; }
}

function parseJscpdCloneCount(reportDir) {
  try {
    const reportPath = join(reportDir, 'jscpd-report.json');
    if (!existsSync(reportPath)) return { groups: '?', instances: '?', pct: '?' };
    const data = JSON.parse(readFileSync(reportPath, 'utf8'));
    const stats = data.statistics?.total;
    return {
      groups: data.duplicates?.length ?? '?',
      instances: stats?.clones ?? '?',
      pct: stats?.percentage?.toFixed(1) ?? '?',
    };
  } catch { return { groups: '?', instances: '?', pct: '?' }; }
}

function stats(times) {
  const sorted = [...times].sort((a, b) => a - b);
  return {
    min: sorted[0],
    max: sorted.at(-1),
    mean: sorted.reduce((a, b) => a + b, 0) / sorted.length,
    median: sorted[Math.floor(sorted.length / 2)],
  };
}

function fmt(ms) { return ms < 1000 ? `${ms.toFixed(0)}ms` : `${(ms / 1000).toFixed(2)}s`; }

function benchmarkProject(name, dir) {
  const files = countSourceFiles(dir);
  console.log(`### ${name} (${files} source files)\n`);

  // fallow dupes: use JSON output, no cache
  const fArgs = ['dupes', '--format', 'json', '--no-cache'];

  // jscpd: JSON reporter, output to temp dir, scan TS/JS formats, ignore node_modules
  const jscpdReportDir = join(dir, 'report');
  const jArgs = [
    '--reporters', 'json',
    '--format', 'typescript,javascript',
    '--output', jscpdReportDir,
    '--min-tokens', '50',
    '--min-lines', '5',
    '--ignore', '**/node_modules/**,**/dist/**,**/.git/**',
    '--silent',
    '.',
  ];

  // Warmup
  for (let i = 0; i < WARMUP; i++) {
    timeRun(fallowBin, fArgs, dir);
    // Clean jscpd report dir between runs
    if (existsSync(jscpdReportDir)) rmSync(jscpdReportDir, { recursive: true });
    timeRun(jscpdBin, jArgs, dir);
    if (existsSync(jscpdReportDir)) rmSync(jscpdReportDir, { recursive: true });
  }

  const fTimes = [], jTimes = [];
  let fClones = { groups: '?', instances: '?', pct: '?' };
  let jClones = { groups: '?', instances: '?', pct: '?' };

  for (let i = 0; i < RUNS; i++) {
    const fr = timeRun(fallowBin, fArgs, dir);
    fTimes.push(fr.elapsed);
    if (i === 0) fClones = parseFallowCloneCount(fr.stdout);

    if (existsSync(jscpdReportDir)) rmSync(jscpdReportDir, { recursive: true });
    const jr = timeRun(jscpdBin, jArgs, dir);
    jTimes.push(jr.elapsed);
    if (i === 0) jClones = parseJscpdCloneCount(jscpdReportDir);
    if (existsSync(jscpdReportDir)) rmSync(jscpdReportDir, { recursive: true });
  }

  const fs = stats(fTimes), js = stats(jTimes);
  const speedup = js.median / fs.median;

  console.table([
    { Tool: 'fallow dupes', Min: fmt(fs.min), Mean: fmt(fs.mean), Median: fmt(fs.median), Max: fmt(fs.max), Speedup: `${speedup.toFixed(1)}x`, 'Clone Groups': fClones.groups, 'Dup %': `${fClones.pct}%` },
    { Tool: 'jscpd', Min: fmt(js.min), Mean: fmt(js.mean), Median: fmt(js.median), Max: fmt(js.max), Speedup: '1.0x', 'Clone Groups': jClones.groups, 'Dup %': `${jClones.pct}%` },
  ]);
  console.log(`  fallow: [${fTimes.map(t => t.toFixed(0)).join(', ')}]`);
  console.log(`  jscpd:  [${jTimes.map(t => t.toFixed(0)).join(', ')}]\n`);

  return { name, files, fallow: fs, jscpd: js, speedup, fClones, jClones };
}

const results = [];

if (runSynthetic) {
  const d = join(__dirname, 'fixtures', 'synthetic-dupes');
  if (!existsSync(d)) {
    console.log('No synthetic dupes fixtures. Run: npm run generate:dupes\n');
  } else {
    console.log('--- Synthetic Projects (Duplication) ---\n');
    const order = ['tiny', 'small', 'medium', 'large', 'xlarge'];
    for (const p of readdirSync(d).filter(x => existsSync(join(d, x, 'package.json'))).sort((a, b) => order.indexOf(a) - order.indexOf(b)))
      results.push(benchmarkProject(p, join(d, p)));
  }
}

if (runRealWorld) {
  const d = join(__dirname, 'fixtures', 'real-world');
  if (!existsSync(d)) {
    console.log('No real-world fixtures. Run: npm run download-fixtures\n');
  } else {
    console.log('--- Real-World Projects (Duplication) ---\n');
    for (const p of readdirSync(d).filter(x => existsSync(join(d, x, 'package.json'))).sort())
      results.push(benchmarkProject(p, join(d, p)));
  }
}

if (results.length > 0) {
  console.log('\n=== Summary ===\n');
  console.table(results.map(r => ({
    Project: r.name,
    Files: r.files,
    'Fallow (median)': fmt(r.fallow.median),
    'jscpd (median)': fmt(r.jscpd.median),
    Speedup: `${r.speedup.toFixed(1)}x`,
    'Fallow clones': r.fClones.groups,
    'jscpd clones': r.jClones.groups,
  })));
  console.log(`Average speedup: ${(results.reduce((s, r) => s + r.speedup, 0) / results.length).toFixed(1)}x faster\n`);
}
