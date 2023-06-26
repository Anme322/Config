import { babel } from '@rollup/plugin-babel';
import styles from "rollup-plugin-styles";
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import image from '@rollup/plugin-image';


export default {
	input: './index.js',
	output: {
		file: 'bundle.js',
		format: 'cjs'
	},
    plugins: [
        babel({
          babelHelpers: "bundled",
          presets: ["@babel/env"]
        }),
        styles(),
        serve({
            open: true,
            port:8000,
        }),
        livereload(),
        image({
            limit: 100000,
        }),
      ]
};