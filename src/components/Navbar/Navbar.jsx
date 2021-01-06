/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import className from 'classnames'
import fetchMoviesData from '../../redux/actions/fetchMovies'
import fetchGenresData from '../../redux/actions/fetchGenres'
import { changeCategory } from '../../redux/actions/changeNavbar'
import Select from './components/Select'
import navBtns from '../../utils/constants'
import getQueryCategory from '../../utils/getQueryCategory'
import styles from './Navbar.scss'

const Navbar = () => {
  const { genres } = useSelector((state) => state.genres)
  const { chosenCategory, chosenGenre } = useSelector((state) => state.navbar)
  const dispatch = useDispatch()
  const [genreQuery, setGenreQuery] = useState('')
  const getGenreQuery = (id) => {
    setGenreQuery(`&with_genres=${id}`)
  }
  useEffect(() => {
    dispatch(fetchGenresData())
  }, [])
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__buttons}>
        {navBtns.map((button, i) => {
          const key = i
          const classStyle = className(styles.navbar__buttons_button, {
            [styles.active_button]: chosenCategory === key,
          })
          return (
            <div
              className={classStyle}
              onClick={() => {
                dispatch(changeCategory(key))
                dispatch(
                  fetchMoviesData({
                    category: getQueryCategory(key),
                    genre: chosenGenre !== 'Genre' ? genreQuery : '',
                  }),
                )
              }}
              key={key}
            >
              {button}
            </div>
          )
        })}
      </div>
      <Select getGenreQuery={getGenreQuery} categoryQuery={getQueryCategory(chosenCategory)} genres={genres} />
    </div>
  )
}

export default Navbar
