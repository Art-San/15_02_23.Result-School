import { babel } from '@rollup/plugin-babel';
import styles from "rollup-plugin-styles";

export default {
    input: './index.js',
    output: {
      file: './build/bundle.js',
      format: 'cjs'
    },
    // watch: {
    //   exclude: 'node_modules/**'
    // },
    plugins: [
      babel({ babelHelpers: 'bundled' }),
      styles(),
    ]
  };