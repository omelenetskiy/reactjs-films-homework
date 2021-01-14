/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

const express = require('express')
const webpack = require('webpack')
const open = require('open')
const path = require('path')
const webpackConfig = require('./config/webpack/webpack.dev')

const compiler = webpack(webpackConfig)

const app = express()
const port = 3000

if (process.env.NODE_ENV === 'development') {
  app.use(
    require('webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath,
    }),
  )
  app.use(require('webpack-hot-middleware')(compiler))

  app.use('*', (req, res, next) => {
    const filename = path.resolve(compiler.outputPath, 'index.html')
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err)
      }
      res.set('content-type', 'text/html')
      res.send(result)
      return res.end()
    })
  })
} else {
  app.use(express.static(path.join(__dirname, 'build')))

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })
}
app.listen(port, () => {
  open(`http://localhost:${port}/`)
})
