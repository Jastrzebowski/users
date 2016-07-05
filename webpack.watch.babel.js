import path from 'path';
import webpack from 'webpack';

export default {
  context: path.join(__dirname),
  entry: {
    App: './app.js'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id].js',
    path: path.join(__dirname, 'scripts'),
    publicPath: 'http://localhost:2048/scripts/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [ 'react-hot', 'babel-loader' ]
      }
    ]
  },
  plugins: [
    // Prefetching React,
    new webpack.PrefetchPlugin('react'),

    new webpack.HotModuleReplacementPlugin()

  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    inline: true,
    port: 2048
  }
};
