const path = require("path")

module.exports = {
    entry: path.resolve(__dirname, "core/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "yann-map-bundle.js",
        library: "$",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
        ],
    },
    mode: "development",
}