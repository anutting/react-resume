const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config = {
  mode: 'none',
  entry: {
    app: './client/src/index.js'            // Tell webpack where to find the beginning of our app's code
  },
  output: {
    filename: '[name].bundle.js',           // Combine all of our app's files into one file with this name
    path: path.resolve(__dirname, 'build')  // Output all files to the build directory
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      template: './client/index.html'
    })
  ],
  resolve: {
    extensions: ['*', '.js']
  },
  module: {                                 // Tell webpack how to handle different file types
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}

module.exports = (env, argv) => {
  // Add additional config for development mode
  if (argv.mode === 'development') {
    config.devtool = 'inline-source-map'
    config.devServer = {
      contentBase: './build',
      hot: true
    }
    config.plugins.push(new webpack.HotModuleReplacementPlugin()) // Refresh the page for us when a file changes
  }

  return config
}