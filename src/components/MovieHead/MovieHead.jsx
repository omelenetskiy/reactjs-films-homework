import React, { useState } from 'react'
import Search from '../Search'
import MovieHeadInfo from '../MovieHeadInfo'
import Button from '../Button'
import styles from './MovieHead.scss'
import responce from './res.json'

const MovieDetails = () => {
  const res = responce
  const [isInfo, setInfo] = useState(true)

  const onViewInfo = () => {
    setInfo(false)
    console.log(isInfo)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.header__title}>FILMS</span>
        <Search />
      </div>
      <div className={styles.footer}>
        <MovieHeadInfo res={res} />
        <div className={styles.footer__controls}>
          {isInfo ? <p>{res.overview}</p> : ''}
          <Button styles={styles.watch_button}>Watch Now</Button>
          <Button styles={styles.info_button} onViewInfo={onViewInfo}>
            View Info
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
