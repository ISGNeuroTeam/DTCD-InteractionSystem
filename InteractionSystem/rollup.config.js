import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const watch = Boolean(process.env.ROLLUP_WATCH);

const pluginName = 'InteractionSystem';

const output = watch ? `./../../DTCD/server/plugins/${pluginName}.js` : `./dist/${pluginName}.js`;

const plugins = [commonjs(), resolve({ jsnext: true, preferBuiltins: true, browser: true })];

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
