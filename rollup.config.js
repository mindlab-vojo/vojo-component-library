
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
        include: 'node_modules/**',
        namedExports: {
          'node_modules/react-is/index.js': [
            'isElement',
            'isValidElementType',
            'ForwardRef',
            'typeOf',
            'isFragment'
          ],
          'node_modules/react/index.js': [
            'cloneElement',
            'createContext',
            'Component',
            'createElement'
          ],
          'node_modules/react-dom/index.js': ['render', 'hydrate', 'findDOMNode', 'createPortal'],
          'node_modules/@material-ui/utils/node_modules/react-is/index.js': [
            'ForwardRef',
            'isValidElementType',
            'Memo',
            'isFragment'],
          'node_modules/@material-ui/core/node_modules/react-is/index.js': ['isFragment'],
          'node_modules/prop-types/index.js': ['elementType'],
        }
      })
    ],
  },
];