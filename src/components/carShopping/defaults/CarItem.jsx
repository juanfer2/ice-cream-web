import React from 'react'
import PropTypes from 'prop-types'
function CarItem({ product }) {
  return (
    <div>
      <div className="car_item">
        <div className="car_item__container_image">
          <img className="item_image" src={product.imageUrl} alt="" />
        </div>
        <div className="car_item__container_name">
          <p className="item_name center_item">{product.name}</p>
        </div>
        <div className="car_item__container_price">
          <p className="item_price center_item"> {product.price} </p>
        </div>
        <div className="car_item__container_count">
          <p className="item_count center_item"> {product.count} </p>
        </div>
      </div>
    </div>
  )
}

CarItem.propTypes = {
  product: PropTypes.object.isRequired,
}

export default CarItem
