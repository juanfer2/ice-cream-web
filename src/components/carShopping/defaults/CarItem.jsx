import React from 'react'
import PropTypes from 'prop-types'
import milk from '../../../images/products/leche.jpg'

function CarItem(props) {
  return (
    <div>
      <div className="car_item">
        <div className="car_item__container_image">
          <img className="item_image" src={milk} alt="" />
        </div>
        <div className="car_item__container_name">
          <p className="item_name center_item">Leche</p>
        </div>
        <div className="car_item__container_price">
          <p className="item_price center_item">$2.500</p>
        </div>
        <div className="car_item__container_count">
          <p className="item_count center_item">5</p>
        </div>
      </div>
    </div>
  )
}

CarItem.propTypes = {}

export default CarItem
