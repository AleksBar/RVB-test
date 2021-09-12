'use strict';

module.exports = {
  mode: 'production',
        output: {
          filename: 'script.min.js'
        },
        watch: true,
      
        devtool: "source-map",
      
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [['@babel/preset-env', {
                      debug: true,
                      corejs: 3,
                      useBuiltIns: "usage"
                  }]]
                }
              }
            }
          ]
        }
};