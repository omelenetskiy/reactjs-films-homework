/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React, { useState } from 'react'
import Search from '../common/Search'
import MovieHeadInfo from '../MovieHeadInfo'
import Button from '../common/Button'
import styles from './MovieHead.scss'
import responce from './res.json'

const MovieHead = () => {
  const res = responce
  const [isInfo, setIsInfo] = useState(false)
  const onViewInfo = () => {
    setIsInfo((state) => !state)
  }

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${res.poster_path}')` }}
    >
      <div className={styles.header}>
        <span className={styles.header__title}>FILMS</span>
        <Search />
      </div>
      <div className={styles.footer}>
        <MovieHeadInfo res={res} />
        <div className={styles.footer__controls}>
          {isInfo && <p>{res.overview}</p>}
          <Button styles={styles.watch_button}>Watch Now</Button>
          <Button styles={styles.info_button} onClick={onViewInfo}>
            View Info
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MovieHead
