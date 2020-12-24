import React from 'react'
import styles from './Search.scss'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Search = () => {
  return (
    <div className={styles.search}>
      <input className={styles.search__input} type="text" placeholder="Search" />
      <FontAwesomeIcon className={styles.search__icon} icon={faSearch} />
    </div>
  )
}
