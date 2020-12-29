/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { MovieItem } from '../MovieItem'
import styles from './MovieList.scss'

export const MovieList = ({ res }) => {
  return (
    <div className={styles.container}>
      {res.results.map((film, index) => {
        const key = index
        return <MovieItem film={film} key={key} />
      })}
    </div>
  )
}

MovieList.propTypes = {
  res: PropTypes.object,
}
