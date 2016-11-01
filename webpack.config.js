var webpack = require('webpack'),
    path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
       test: /\.scss$/,
       loader: "css-loader!sass-loader!autoprefixer-loader"
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules']
  }
};
