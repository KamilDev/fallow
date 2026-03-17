// Verify the correct platform-specific package was installed
const PLATFORMS = {
  'darwin-arm64': '@fallow-cli/darwin-arm64',
  'darwin-x64': '@fallow-cli/darwin-x64',
  'linux-x64': '@fallow-cli/linux-x64-gnu',
  'linux-arm64': '@fallow-cli/linux-arm64-gnu',
  'win32-x64': '@fallow-cli/win32-x64-msvc',
};

const platformKey = `${process.platform}-${process.arch}`;
const pkg = PLATFORMS[platformKey];

if (!pkg) {
  console.warn(
    `fallow: No prebuilt binary for ${platformKey}. ` +
    `You can build from source: https://github.com/bartwaardenburg/fallow`
  );
  process.exit(0);
}

try {
  require.resolve(pkg);
} catch {
  console.warn(
    `fallow: Platform package ${pkg} not installed. ` +
    `This may happen if you used --no-optional. ` +
    `Run 'npm install ${pkg}' to fix.`
  );
}
