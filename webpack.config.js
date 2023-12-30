const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")

module.exports = (env) => {
  const mode = env.development || "production"
  const isDev = mode === "development"

  console.log(`Current mode - ${mode}`)

  return {
    mode: mode,
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
      filename: "index.[contenthash].js",
      path: path.resolve(__dirname, "./build"),
      clean: true,
    },
    devServer: {
      port: 6900,
      open: true,
      watchFiles: "src/**/*",
    },
    module: {
      rules: [
        {
          test: /\.sass$/,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.js$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
        {
          test: /\.pug$/i,
          type: "pug-loader",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: "body",
      }),
      new MiniCssExtractPlugin({
        filename: "style.css",
      }),
      new CopyPlugin({
        patterns: [
          { from: "./src/img", to: "./img" },
          { from: "./src/video", to: "./video" },
          { from: "./src/fonts", to: "./fonts" },
        ],
      }),
    ],
  }
}
