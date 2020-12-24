import React, { Children } from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

export const Button = ({ className, onClick, children, style }) => {
  return (
    <button style={style} className={className} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}
