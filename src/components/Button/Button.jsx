import React, { Children } from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

const Button = ({ styles, onViewInfo, children }) => {
  return (
    <button className={styles} onClick={onViewInfo}>
      {children}
    </button>
  )
}

export default Button
