const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
  mode: process.env.NODE.ENV === 'development'? 'development' : 'production',
  devtool: process.env.NODE.ENV === 'development' ? 'eval-cheap-module-module-map' : 'source-map'
};