const path = require("path")
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: {
        "yann-map.js" : path.resolve(__dirname, "src/index.js"),
        "yann-map.min.js" : path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist/dev"),
        filename: "[name]",
    },
    optimization:{
        minimize: true,     // <---- disables uglify.
        minimizer: [new TerserPlugin({
            include: /\.min\.js$/
        })]
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    mode: "development",
}