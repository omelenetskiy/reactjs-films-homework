import React from 'react'
import styles from './Main.scss'
import MovieHead from '../components/MovieHead'
import Categories from '../components/Categories'

const Main = () => {
  return (
    <div className={styles.main_container}>
      <MovieHead />
      <Categories />
    </div>
  )
}

export default Main
