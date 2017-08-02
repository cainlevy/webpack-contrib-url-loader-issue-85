const path = require('path');

module.exports = {
  entry: {
    cjs: './src/index-cjs.js',
    es2015: './src/index-es2015.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 15000
        }
      },
    ]
  }
};
