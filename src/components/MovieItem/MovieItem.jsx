/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import Button from '../common/Button'
import Info from '../common/Info'
import MovieItemModal from './components/MovieItemModal'
import { fetchFilmData } from '../../redux/actions/fetchFilmData'
import { fetchTrailerData } from '../../redux/actions/fetchTrailer'
import styles from './MovieItem.scss'

const MovieItem = ({ film }) => {
  const dispatch = useDispatch()
  const [isModal, setIsModal] = useState(false)
  const onModal = (setState) => setState((state) => !state)
  return (
    <div className={styles.container}>
      {isModal && <MovieItemModal onModal={() => onModal(setIsModal)} film={film} />}
      <div
        className={styles.poster}
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${film.poster_path})` }}
      >
        <div className={styles.poster__hover}>
          <FontAwesomeIcon
            onClick={() => dispatch(fetchTrailerData(film.id))}
            className={styles.poster__hover_play}
            icon={faPlayCircle}
          />
          <span className={styles.poster__hover_text}>Watch Now</span>
          <Button onClick={() => onModal(setIsModal)} className={styles.poster__hover_button}>
            View Info
          </Button>
        </div>
      </div>
      <Info onClick={() => dispatch(fetchFilmData(film.id))} className={styles} film={film} />
    </div>
  )
}

MovieItem.propTypes = {
  film: PropTypes.object.isRequired,
}

export default MovieItem
