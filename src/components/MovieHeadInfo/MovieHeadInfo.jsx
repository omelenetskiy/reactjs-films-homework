import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Stars from '../common/Stars'
import Raiting from '../common/Raiting'
import timeFormat from '../../utils/timeFormat'
import styles from './MovieHeadInfo.scss'

const MovieHeadInfo = ({ film }) => {
  useEffect(() => window.scrollTo(0, 0), [film])
  return (
    <div className={styles.description}>
      <p className={styles.description__title}>{film.original_title}</p>
      <div className={styles.description__genres}>
        {film.genres.map((genre) => (
          <span className={styles.description__genres_name} key={genre.id}>
            {genre.name}
          </span>
        ))}
        <span className={styles.description__genres_name}>|</span>
        <span className={styles.description__genres_name}>{timeFormat(film.runtime)}</span>
      </div>
      <div className={styles.description__raiting}>
        <Stars className={styles.description__raiting_star} res={film} />
        <Raiting className={styles.description__raiting_vote} res={film} />
      </div>
    </div>
  )
}

MovieHeadInfo.propTypes = {
  film: PropTypes.object.isRequired,
}

export default MovieHeadInfo
