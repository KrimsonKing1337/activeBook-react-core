import { copyFileSync } from 'fs';

copyFileSync(
  './node_modules/@lottiefiles/dotlottie-web/dist/dotlottie-player.wasm',
  './src/vendors/dotlottie-player.wasm',
);
