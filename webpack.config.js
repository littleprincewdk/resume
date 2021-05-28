const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/main.js",
  },
  output: {
    publicPath: "",
    filename: "[name].js",
  },
  resolve: {
    // 加快搜索速度
    modules: [path.resolve(__dirname, "node_modules")],
    // es tree-shaking
    mainFields: ["jsnext:main", "browser", "main"],
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        // 提取出css
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
        include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
        use: "base64-inline-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name]_[contenthash].css",
    }),
  ],
  devtool: "source-map",
};
