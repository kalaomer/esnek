import vue from 'rollup-plugin-vue'

export default {
    input: 'src/esnek.js',
    output: [
        {
            file: 'dist/js/esnek.js',
            format: 'cjs'
        }
    ],
    plugins: [
        vue()
    ]
};
