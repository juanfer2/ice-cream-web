import React from 'react'
import PropTypes from 'prop-types'

function Button({ type, type_btn, is_gradient, children, onClick }) {
  return (
    <button
      type={type_btn}
      className={
        'button ' +
        (type ? type : '') +
        (is_gradient ? ' ' + type + '-gradient' : '')
      }
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  type_btn: PropTypes.string,
  is_gradient: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func,
}

export default Button
