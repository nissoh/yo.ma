const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const webpackCommon = require('./common');

const entryPath = path.join(__dirname, '../main')

module.exports = webpackMerge(webpackCommon, {
  entry: {
    main: [
      'webpack-hot-middleware/client?reload=true',
      entryPath
    ]
  },
  /**
   * Switch loaders to debug mode.
   *
   * See: http://webpack.github.io/docs/configuration.html#debug
   */
  debug: true,

  /**
   * Developer tool to enhance debugging
   *
   * See: http://webpack.github.io/docs/configuration.html#devtool
   * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
   */
  devtool: 'cheap-module-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin()
  ]
})
