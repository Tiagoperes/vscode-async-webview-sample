import esbuild from 'rollup-plugin-esbuild'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

// eslint-disable-next-line import/no-default-export
export default {
  input: 'src/extension.ts',
  plugins: [json(), commonjs(), nodeResolve(), esbuild()],
  output: [
    {
      file: '../../out/packages/extension/extension.js',
      format: 'cjs',
      sourcemap: true,
      inlineDynamicImports: true,
    },
  ],
}
