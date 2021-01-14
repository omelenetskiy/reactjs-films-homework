/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */
const merge = require('webpack-merge')
const TercerWebpackPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const base = require('./webpack.base.js')
const path = require('path')

module.exports = merge(base, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../../build'),
    filename: '[name].[contenthash].js',
  },
  plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin()],
  optimization: {
    minimizer: [new TercerWebpackPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          outputPath: 'images',
          publicPath: 'assets',
        },
      },
    ],
  },
})
