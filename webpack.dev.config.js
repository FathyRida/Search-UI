const VENDOR_LIBS = ["react", "react-dom"];
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

// VGLOBAL VARIABLES
const BUILD_DIR = path.resolve(__dirname, "./dist");
const webpack = require("webpack");

module.exports = {
  entry: {
    bundle: "./index.js",
    vendor: VENDOR_LIBS,
  },
  output: {
    path: BUILD_DIR,
    filename: "[name][hash:8].js",
    publicPath: "",
  },
  devtool: "source-map",
  devServer: {
    contentBase: BUILD_DIR,
    compress: true,
    port: 9000,
    disableHostCheck: false,
    headers: {
      API_KEY: "API_KEY_VALUE_HERE",
    },
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: true,
            presets: [],
            plugins: ["transform-class-properties"],
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  plugins: [
    // Developemt
    // new UglifyJsPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles[contenthash].css",
      // filename: "styles.css"
    }),
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "WebPack Project",
      template: "./public/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
