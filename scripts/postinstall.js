const { platform, arch } = process;
const isLinux = platform === 'linux';
const isX64 = arch === 'x64';

if (isLinux && isX64) {
  console.log('Installing Linux x64 Rollup dependencies...');
  require('child_process').execSync('npm install @rollup/rollup-linux-x64-gnu@4.9.5 @rollup/rollup-linux-x64-musl@4.9.5 --no-save', { stdio: 'inherit' });
} else {
  console.log('Skipping Linux-specific Rollup dependencies for non-Linux platform');
} 