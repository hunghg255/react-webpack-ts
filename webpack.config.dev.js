
const config = require('./webpack.config.js')

config.devServer = {
  historyApiFallback: true,
  contentBase: './build',
  port: 3000,
}

config.devtool = 'inline-source-map'

module.exports = config
