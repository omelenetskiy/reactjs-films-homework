/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import styles from './Footer.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>FILMS</span>
      <span className={styles.copyright}>Copyright © 2020 FILMS. PAVEL DUBINA</span>
    </div>
  )
}

export default Footer
