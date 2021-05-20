const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: ['/src/javascript/index.js', '/src/styles/index.sass'],
  output: {
    path: __dirname + '/dist/',
    filename: 'app.js',
  },
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new htmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    port: 3000,
    open: 'chrome',
    // writeToDisk: true,
  },
};
