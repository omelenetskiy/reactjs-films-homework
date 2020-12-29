/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React, { useState } from 'react'
import { Select } from '../common/Select'
import className from 'classnames'
import styles from './Navbar.scss'
import response from '../../utils/genres.json'
import { navBtns } from './../../utils/constants'

export const Navbar = () => {
  const [active, setActive] = useState(0)
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__buttons}>
        {navBtns.map((button, i) => {
          const key = i
          const classStyle = className(styles.navbar__buttons_button, {
            [styles.active_button]: active === key,
          })
          return (
            <div className={classStyle} onClick={() => setActive(key)} key={key}>
              {button}
            </div>
          )
        })}
        <Select genres={response.genres} />
      </div>
    </div>
  )
}
