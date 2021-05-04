const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(_env, argv) {
  return {
    entry: "./export/index.js",
    output: {
      path: path.resolve(__dirname, "../public/dist"),
      filename: "build.js",
      publicPath: "/"
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-react'
              ]
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            'css-loader',
            'postcss-loader'
          ]
        }
      ]
    }
  }
}