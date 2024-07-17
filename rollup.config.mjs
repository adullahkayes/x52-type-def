// rollup.config.js
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts', // Your entry point
  output: {
    dir: 'dist', // Output directory
    format: 'cjs', // CommonJS format
  },
  plugins: [typescript()],
};
