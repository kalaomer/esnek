import vue from 'rollup-plugin-vue'

const FILE_NAME = "esnek";
const sourcemap = true;

export default [
  {
    input: 'src/esnek.js',
    output: [
      {
        file: `dist/${FILE_NAME}.common.js`,
        format: 'cjs',
        sourcemap
      },
      {
        file: `dist/${FILE_NAME}.es.js`,
        format: 'es',
        sourcemap
      }
    ],
    plugins: [
      vue()
    ]
  },
  {
    input: 'src/esnek.js',
    output: [
      {
        file: `dist/${FILE_NAME}.js`,
        format: 'iife',
        sourcemap
      },
    ],
    plugins: [
      vue()
    ]
  }
];
