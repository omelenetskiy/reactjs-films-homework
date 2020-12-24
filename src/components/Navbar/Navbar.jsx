/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React, { useState } from 'react'
import { Button } from '../common/Button'
import { Select } from '../common/Select'
import styles from './Navbar.scss'
import response from '../../utils/genres.json'

export const Navbar = () => {
  const [active, setActive] = useState(0)
  const activeStyle = {
    borderBottom: `2px solid rgb(24, 183, 236)`,
  }
  const buttons = ['Trending', 'Top Rated', 'Coming Soon']

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__buttons}>
        {buttons.map((button, i) => {
          const key = i
          return (
            <Button
              style={active === key ? activeStyle : {}}
              className={styles.navbar__buttons_button}
              onClick={() => setActive(key)}
              key={key}
            >
              {button}
            </Button>
          )
        })}
        <Select genres={response.genres} />
      </div>
    </div>
  )
}
