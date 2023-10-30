import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

import pluginMeta from './src/Plugin.Meta';

const watch = Boolean(process.env.ROLLUP_WATCH);
const pluginName = pluginMeta.name;

const output = watch
  ? `./../../DTCD/server/plugins/DTCD-${pluginName}_${pluginMeta.version}/${pluginName}.js`
  : `./build/${pluginName}.js`;

const plugins = [
  json(),
  commonjs(),
  resolve({ jsnext: true, preferBuiltins: true, browser: true }),
];

export default {
  input: `./src/${pluginName}.js`,
  output: {
    file: output,
    format: 'esm',
    sourcemap: false,
  },
  watch: {
    include: ['./*/**'],
  },
  plugins,
};
