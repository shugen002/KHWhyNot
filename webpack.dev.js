const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')
const webpack = require('webpack')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/',
    contentBase: path.join(__dirname, 'dist'),
    hot: true // hot reload
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // hot reload
  ]
})
