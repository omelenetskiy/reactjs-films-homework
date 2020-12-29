/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'
import styles from './Select.scss'

export const Select = ({ genres }) => {
  const [selectedValue, setSelectedValue] = useState('Genre')
  const [isSelect, setIsSelect] = useState(false)
  const selectTextClass = className(styles.select__text, {
    [styles.rotateArrow]: isSelect,
  })
  return (
    <div className={styles.select}>
      <span onClick={() => setIsSelect((state) => !state)} className={selectTextClass}>
        {selectedValue}
      </span>
      {isSelect && (
        <div className={styles.select__list}>
          {genres.map((genre, i) => {
            const key = i
            const classStyle = className(styles.select__item, {
              [styles.select__item_active]: genre.name === selectedValue,
            })
            return (
              <div
                onClick={(event) => {
                  setIsSelect((state) => !state)
                  setSelectedValue(event.target.outerText)
                }}
                className={classStyle}
                key={key}
              >
                {genre.name}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

Select.propTypes = {
  genres: PropTypes.array.isRequired,
}
