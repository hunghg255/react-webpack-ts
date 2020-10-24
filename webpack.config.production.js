const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = require('./webpack.config.js');

config.mode = 'production';

config.optimization = {
  moduleIds: 'hashed',
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
      },
    },
  },
  runtimeChunk: 'single',
  minimizer: [
    new TerserJSPlugin({}),
    new OptimizeCSSAssetsPlugin({}),
  ],
};

module.exports = config;
