/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import MovieHeadInfo from '../MovieHeadInfo'
import Button from '../common/Button'
import { fetchTrailerData } from '../../redux/actions/fetchTrailer'
import styles from './MovieHead.scss'

const MovieHead = ({ film }) => {
  const dispatch = useDispatch()
  useEffect(() => window.scrollTo(0, 64), [film])
  const [isInfo, setIsInfo] = useState(false)
  const onViewInfo = () => {
    setIsInfo((state) => !state)
  }
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${film.poster_path}')` }}
    >
      <div className={styles.footer}>
        <MovieHeadInfo film={film} />
        <div className={styles.footer__controls}>
          {isInfo && <p>{film.overview}</p>}
          <Button className={styles.watch_button} onClick={() => dispatch(fetchTrailerData(film.id))}>
            Watch Now
          </Button>
          <Button className={styles.info_button} onClick={onViewInfo}>
            View Info
          </Button>
        </div>
      </div>
    </div>
  )
}
export default MovieHead

MovieHead.propTypes = {
  film: PropTypes.object.isRequired,
}
