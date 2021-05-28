const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const findChrome = require('chrome-finder');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EndWebpackPlugin = require('end-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const outputPath = path.resolve(__dirname, 'docs');
module.exports = {
  mode: 'production',
  output: {
    path: outputPath,
    publicPath: '',
    filename: '[name]_[chunkhash:8].js',
  },
  resolve: {
    // 加快搜索速度
    modules: [path.resolve(__dirname, 'node_modules')],
    // es tree-shaking
    mainFields: ['jsnext:main', 'browser', 'main'],
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        // 提取出css
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,
        use: 'base64-inline-loader',
      },
    ],
  },
  entry: {
    main: './src/main.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash].css',
    }),
    new OptimizeCSSAssetsPlugin(),
    new EndWebpackPlugin(async () => {
      // // 自定义域名
      // fs.writeFileSync(
      //   path.resolve(outputPath, "CNAME"),
      //   "resume.princekin.cn"
      // );

      // 调用 Chrome 渲染出 PDF 文件
      const chromePath = findChrome();
      spawnSync(chromePath, [
        '--headless',
        '--disable-gpu',
        `--print-to-pdf=${path.resolve(outputPath, 'resume.pdf')}`,
        'http://resume.princekin.cn', // 这里注意改成你的在线简历的网站
      ]);
    }),
  ],
};
