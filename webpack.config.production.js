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
};

module.exports = config;
