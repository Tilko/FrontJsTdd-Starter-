const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 1234,
    disableHostCheck: true, //=> to enable ngrok

    open: true, //open page when server start
    inline: true, //webpack can log in console
    //for liveReload:
    watchContentBase: true,
    liveReload: true,
    //////////////
  }
};

module.exports = config;