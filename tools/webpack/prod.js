const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge'); // used to merge webpack configs
const webpackCommon = require('./common');
const del = require('del');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

del.sync(['./dist']);

module.exports =  webpackMerge(webpackCommon, {
  entry: {
    main: [
      './src/index'
    ]
  },

  plugins: [
    /**
     * Plugin: UglifyJsPlugin
     * Description: Minimize all JavaScript output of chunks.
     * Loaders are switched into minimizing mode.
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
     */
    // NOTE: To debug prod builds uncomment //debug lines and comment //prod lines
    new UglifyJsPlugin({
      // beautify: true, //debug
      // mangle: false, //debug
      // dead_code: false, //debug
      // unused: false, //debug
      // deadCode: false, //debug
      // compress: {
      //   screw_ie8: true,
      //   keep_fnames: true,
      //   drop_debugger: false,
      //   dead_code: false,
      //   unused: false
      // }, // debug
      // comments: true, //debug


      beautify: false, //prod
      mangle: { screw_ie8 : true }, //prod
      compress: { screw_ie8: true }, //prod
      comments: false //prod
    }),

  ],

  /**
   * Static analysis linter for TypeScript advanced options configuration
   * Description: An extensible linter for the TypeScript language.
   *
   * See: https://github.com/wbuchwalter/tslint-loader
   */
  tslint: {
    emitErrors: true,
    failOnHint: true,
    resourcePath: 'src'
  },

  /**
   * Switch loaders to debug mode.
   *
   * See: http://webpack.github.io/docs/configuration.html#debug
   */
  debug: true
})
