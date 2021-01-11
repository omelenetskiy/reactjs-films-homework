/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieItem from '../MovieItem'
import Loading from '../common/Loading'
import fetchMoviesData from '../../redux/actions/fetchMovies'
import styles from './MovieList.scss'

const MovieList = () => {
  const dispatch = useDispatch()
  const { movies, isLoading } = useSelector((state) => state.movies)
  useEffect(() => dispatch(fetchMoviesData({ category: '/popular' })), [])
  return (
    <>
      {movies.length === 0 && !isLoading && <div className={styles.not_found}>Movies not found</div>}
      <div className={styles.container}>
        {isLoading && <Loading>LOADING</Loading>}
        {movies.map((film, index) => {
          const key = index
          return <MovieItem film={film} key={key} />
        })}
      </div>
    </>
  )
}

export default MovieList
