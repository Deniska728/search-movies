import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import { srcPath, publicPath } from './config/paths'

export default {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: [path.resolve(srcPath, 'root/index.js')],
  resolve: {
    modules: [srcPath, 'node_modules'],
    extensions: ['.js', '.jsx', '.json']
  },
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          },
          { loader: 'sass-loader' }
        ]
      }   
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(publicPath, 'index.html'),
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};