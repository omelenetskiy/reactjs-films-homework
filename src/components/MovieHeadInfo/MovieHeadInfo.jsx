import React from 'react'
import PropTypes from 'prop-types'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './MovieHeadInfo.scss'

const getStars = (vote) => {
  const averageVote = Math.round(vote / 2)
  return Array(5)
    .fill()
    .map((star, index) => {
      const key = index
      return averageVote <= index ? (
        <FontAwesomeIcon className={styles.description__raiting_star} icon={regStar} key={key} />
      ) : (
        <FontAwesomeIcon className={styles.description__raiting_star} icon={solidStar} key={key} />
      )
    })
}

const timeFormat = (time) => {
  const hour = Math.floor(time / 60)
  const min = time - hour * 60
  return <span>{`${hour}h ${min}min`}</span>
}

const MovieHeadInfo = ({ res }) => {
  return (
    <div className={styles.description}>
      <p className={styles.description__title}>{res.original_title}</p>
      <div className={styles.description__genres}>
        {res.genres.map((genre) => {
          return (
            <span className={styles.description__genres_name} key={genre.id}>
              {genre.name}
            </span>
          )
        })}
        <span className={styles.description__genres_name}>|</span>
        <span className={styles.description__genres_name}>{timeFormat(res.runtime)}</span>
      </div>
      <div className={styles.description__raiting}>
        <div>{getStars(res.vote_average)}</div>
        <div className={styles.description__raiting_vote}>{res.vote_average}</div>
      </div>
    </div>
  )
}

MovieHeadInfo.propTypes = {
  res: PropTypes.object.isRequired,
}

export default MovieHeadInfo
