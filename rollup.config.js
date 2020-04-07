
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default [
  {
    input: 'src/index.js',
    output: [
      {
        dir: 'dist/index.js',
        format: 'cjs',
        banner: '/* eslint-disable */',
      },
    ],
    external: [
      'react', 
      'react-proptypes'
    ],
    plugins: [
      resolve(),
      babel({ 
        exclude: 'node_modules/**',
        presets: ['@babel/env', '@babel/preset-react']
      }),
      commonjs({
        namedExports: {
          'node_modules/react-is/index.js': [
            'isElement',
            'isValidElementType',
            'ForwardRef',
            'typeOf'
          ],
        }
      })
    ],
  },
];