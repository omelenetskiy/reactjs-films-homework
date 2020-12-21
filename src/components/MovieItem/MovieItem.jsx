/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import PropTypes from 'prop-types'
import Raiting from '../common/Raiting'
import getGenres from '../../helpers/getGenres'
import styles from './MovieItem.scss'

const MovieItem = ({ film }) => {
  console.log(getGenres([35, 18, 10749]))
  return (
    <div className={styles.container}>
      <div
        className={styles.poster}
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${film.poster_path})` }}
      ></div>
      <div className={styles.info}>
        <div className={styles.info__about}>
          <div className={styles.info__about_title}>{film.title}</div>
          <Raiting styles={styles.info__about_vote} res={film} />
        </div>
        <div className={styles.info__genres}>
          <span>{getGenres(film.genre_ids)}</span>
        </div>
      </div>
    </div>
  )
}

MovieItem.propTypes = {
  film: PropTypes.object.isRequired,
}
export default MovieItem
