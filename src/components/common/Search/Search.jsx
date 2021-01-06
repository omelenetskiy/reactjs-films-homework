import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { changeCategory, changeGenre } from '../../../redux/actions/changeNavbar'
import fetchMoviesData from '../../../redux/actions/fetchMovies'
import styles from './Search.scss'

const Search = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const onSubmit = (event) => {
    event.preventDefault()
    if (!value) return
    dispatch(fetchMoviesData({ search: `/search`, query: `&query=${value}` }))
    dispatch(changeCategory())
    dispatch(changeGenre('Genre'))
  }
  return (
    <div className={styles.search}>
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          onChange={(event) => setValue(event.target.value)}
          className={styles.search__input}
          type="text"
          placeholder="Search"
        />
      </form>
      <FontAwesomeIcon onClick={(event) => onSubmit(event)} className={styles.search__icon} icon={faSearch} />
    </div>
  )
}

export default Search
