const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: __dirname,
  entry: {
    index: './app/modules/main.js',
    login: './app/modules/auth.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['*', '.js'],
    alias: {
      vue: path.resolve(__dirname, 'node_modules/vue/dist/vue.esm'),
      jquery: path.resolve(__dirname, 'node_modules/jquery/dist/jquery')
    }
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          }
        }

      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }],
        include: [/modules/]
      },
      {
        test: /\.html$/,
        use: 'file-loader?name=[name].[ext]',
        include: [/modules/]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: 'app/login.html',
      chunks: ['login']
    })
  ],
  devServer: {
    open: true,
    contentBase: __dirname + '/app'
  }
};

module.exports = config;
