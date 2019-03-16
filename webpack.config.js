
const path = require('path');

module.exports = {
  mode: 'development',
  entry: 'https://raw.githubusercontent.com/umeshsati54/umeshsati54.github.io/master/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
    }],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
