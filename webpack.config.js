const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: [path.resolve(__dirname, 'src', 'index.js'), 
	  path.resolve(__dirname, "src/assets/sass", "main.scss")],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      ]
    }
    ]
  },
  plugins: [],
  plugins: [new MiniCssExtractPlugin(), 
	new HtmlWebpackPlugin({ 
    template: path.resolve(__dirname, 'src', 'index.html'),
    favicon: "./src/favicon.png" }
  )],
  devServer: {
    historyApiFallback: true
  }
};

