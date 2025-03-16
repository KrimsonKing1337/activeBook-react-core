const { execSync } = require('child_process');

try {
  execSync('npm run clean');
  execSync('node ./scripts/copyLottieWasm.js');
  execSync('npm run copy-files');
  execSync('npm run ts');
  execSync('tsc-alias');
  execSync('npm run up');
  execSync('npm run packaging');
} catch (e) {
  console.error(e.stdout.toString());
}
