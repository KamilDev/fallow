#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync, statSync } from 'node:fs';
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
const knipBin = join(__dirname, 'node_modules', '.bin', 'knip');
if (!existsSync(knipBin)) { console.error('knip not found. Run: cd benchmarks && npm install'); process.exit(1); }

const fallowVersion = spawnSync(fallowBin, ['--version'], { stdio: 'pipe' }).stdout?.toString().trim();
const knipVersion = spawnSync(knipBin, ['--version'], { stdio: 'pipe' }).stdout?.toString().trim();

console.log(`\n=== Fallow vs Knip Benchmark Suite ===\n`);
console.log(`Tools:\n  fallow  ${fallowVersion}\n  knip    ${knipVersion}\nConfig: ${RUNS} runs, ${WARMUP} warmup\n`);

function countSourceFiles(dir) {
  let count = 0;
  const walk = d => { try { for (const e of readdirSync(d)) { if (['node_modules','.git','dist'].includes(e)) continue; const f = join(d, e); try { const s = statSync(f); if (s.isDirectory()) walk(f); else if (/\.(ts|tsx|js|jsx|mjs|cjs)$/.test(e)) count++; } catch {} } } catch {} };
  walk(dir); return count;
}
function timeRun(cmd, cmdArgs, cwd) {
  const start = performance.now();
  const result = spawnSync(cmd, cmdArgs, { cwd, stdio: 'pipe', timeout: 300000, maxBuffer: 50*1024*1024, env: { ...process.env, NO_COLOR: '1', FORCE_COLOR: '0' } });
  return { elapsed: performance.now() - start, status: result.status, stdout: result.stdout?.toString() ?? '', stderr: result.stderr?.toString() ?? '' };
}
function parseIssueCount(stdout) {
  try { const data = JSON.parse(stdout); let count = 0; for (const v of Object.values(data)) { if (Array.isArray(v)) count += v.length; } return count; } catch { return '?'; }
}
function stats(times) {
  const sorted = [...times].sort((a,b) => a-b);
  return { min: sorted[0], max: sorted.at(-1), mean: sorted.reduce((a,b)=>a+b,0)/sorted.length, median: sorted[Math.floor(sorted.length/2)] };
}
function fmt(ms) { return ms < 1000 ? `${ms.toFixed(0)}ms` : `${(ms/1000).toFixed(2)}s`; }

function benchmarkProject(name, dir) {
  const files = countSourceFiles(dir);
  console.log(`### ${name} (${files} source files)\n`);
  const fArgs = ['check', '--quiet', '--format', 'json', '--no-cache'];
  const kArgs = ['--reporter', 'json'];
  for (let i = 0; i < WARMUP; i++) { timeRun(fallowBin, fArgs, dir); timeRun(knipBin, kArgs, dir); }
  const fTimes = [], kTimes = []; let fIssues = '?', kIssues = '?';
  for (let i = 0; i < RUNS; i++) {
    const fr = timeRun(fallowBin, fArgs, dir); fTimes.push(fr.elapsed); if (i===0) fIssues = parseIssueCount(fr.stdout);
    const kr = timeRun(knipBin, kArgs, dir); kTimes.push(kr.elapsed); if (i===0) kIssues = parseIssueCount(kr.stdout);
  }
  const fs = stats(fTimes), ks = stats(kTimes), speedup = ks.median / fs.median;
  console.table([
    { Tool:'fallow', Min:fmt(fs.min), Mean:fmt(fs.mean), Median:fmt(fs.median), Max:fmt(fs.max), Speedup:`${speedup.toFixed(1)}x`, Issues:fIssues },
    { Tool:'knip', Min:fmt(ks.min), Mean:fmt(ks.mean), Median:fmt(ks.median), Max:fmt(ks.max), Speedup:'1.0x', Issues:kIssues },
  ]);
  console.log(`  fallow: [${fTimes.map(t=>t.toFixed(0)).join(', ')}]`);
  console.log(`  knip:   [${kTimes.map(t=>t.toFixed(0)).join(', ')}]\n`);
  return { name, files, fallow: fs, knip: ks, speedup, fIssues, kIssues };
}

const results = [];
if (runSynthetic) {
  const d = join(__dirname, 'fixtures', 'synthetic');
  if (!existsSync(d)) { console.log('No synthetic fixtures. Run: npm run generate\n'); }
  else {
    console.log('--- Synthetic Projects ---\n');
    const order = ['tiny','small','medium','large','xlarge'];
    for (const p of readdirSync(d).filter(x => existsSync(join(d,x,'package.json'))).sort((a,b) => order.indexOf(a)-order.indexOf(b)))
      results.push(benchmarkProject(p, join(d, p)));
  }
}
if (runRealWorld) {
  const d = join(__dirname, 'fixtures', 'real-world');
  if (!existsSync(d)) { console.log('No real-world fixtures. Run: npm run download-fixtures\n'); }
  else {
    console.log('--- Real-World Projects ---\n');
    for (const p of readdirSync(d).filter(x => existsSync(join(d,x,'package.json'))).sort())
      results.push(benchmarkProject(p, join(d, p)));
  }
}
if (results.length > 0) {
  console.log('\n=== Summary ===\n');
  console.table(results.map(r => ({ Project: r.name, Files: r.files, 'Fallow (median)': fmt(r.fallow.median), 'Knip (median)': fmt(r.knip.median), Speedup: `${r.speedup.toFixed(1)}x` })));
  console.log(`Average speedup: ${(results.reduce((s,r) => s+r.speedup, 0)/results.length).toFixed(1)}x faster\n`);
}
