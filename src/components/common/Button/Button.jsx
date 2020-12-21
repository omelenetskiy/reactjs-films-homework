import React, { Children } from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

const Button = ({ styles, onClick, children, style }) => {
  return (
    <button style={style} className={styles} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  styles: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

export default Button
