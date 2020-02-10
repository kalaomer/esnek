module.exports = {
    assetsDir: "example/public",
    pages: {
        index: {
            entry: "example/main.js",
            template: "example/public/index.html"
        },
    },
    devServer: {
        contentBase: 'example/public'
    }
};
