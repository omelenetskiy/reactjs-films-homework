/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

const developmentConfig = require('./config/webpack/webpack.dev')
const productionConfig = require('./config/webpack/webpack.prod')

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = () => (isDevelopment ? developmentConfig : productionConfig)
