const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const modeConfig = env => require(`./build-utils/webpack.${env.mode}`)(env);
const path = require('path');

module.exports = ({ mode, presets } = { mode: 'production', presets: [] }) => {
  return webpackMerge(
    {
      mode,
      output: {
        filename: 'bundle.js',
        chunkFilename: '[name].chunk.js'
      },
      module: {
        rules: [
          {
            test: /\.js/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-class-properties'],
                cacheDirectory: true
              }
            }
          },
          { test: /\.txt/, use: 'raw-loader' },
          {
            test: /\.pug/,
            use: {
              loader: 'pug-loader',
              options: {
                excludes: /(node_modules)/,
                query: {
                  pretty: true
                }
              }
            }
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Webpack Learn',
          template: 'src/template.pug',
          minify: false
        }),
        new webpack.ProgressPlugin()
      ]
    },
    modeConfig({ mode, presets })
  );
};
