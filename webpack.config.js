const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    index: './app/modules/main.js',
    login: './app/modules/auth.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'app/modules')],
    extensions: ['*', '.js'],
    alias: {
      jquery: path.resolve(__dirname, 'node_modules/jquery/dist/jquery')
    }
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: ['babel-loader']
    }, {
      test: /\.css$/,
      use: 'css-loader'
    }, {
      test: /\.html$/,
      use: 'file-loader?name=[name].[ext]'
    }]
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: 'app/index.html',
  //     chunks: ['index']
  //   }),
  //   new HtmlWebpackPlugin({
  //     filename: 'login.html',
  //     template: 'app/login.html',
  //     chunks: ['login']
  //   })
  // ]
};

module.exports = config;
