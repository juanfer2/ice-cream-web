import React from 'react'
import PropTypes from 'prop-types'

function List({ children }) {
  return <div className="list">{children}</div>
}

List.propTypes = {
  children: PropTypes.element,
}

export default List
