import path from 'path';
import webpack from 'webpack';

const env = process.env.NODE_ENV || 'development';

export default {
  context: path.join(__dirname),
  devtool: 'source-map',
  entry: {
    App: './app.js'
  },
  output: {
    filename: '[chunkhash].js',
    chunkFilename: '[chunkhash].js',
    sourceMapFilename: 'debugging/[file].map',
    path: path.join(__dirname, 'assets'),
    publicPath: '/assets/'
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

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': `"${ env }"`
      }
    }),

    // Minification
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),

    // Deduplication
    new webpack.optimize.DedupePlugin()

  ]
};
