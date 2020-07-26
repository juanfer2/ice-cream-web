import React from 'react'
import PropTypes from 'prop-types'
import Button from '../buttons/Button'

function Cards({ title, price, image, onClickButton, onClickSeeMore }) {
  return (
    <div className="card_product">
      <img className="card_product__image" src={image} alt="" />
      <div className="card_product__content">
        <h1>{title}</h1>
        <span className="price">
          <strong>{price}</strong>
        </span>
        <span className="more" onClick={onClickSeeMore}>
          MAS INFORMACIÓN {'>'}
        </span>
        {/* <Button
        type={'success'}
        type_btn={'button'}
        is_gradient={true}
        >
          Agregar
        </Button> */}
        <Button
          type={'success'}
          type_btn={'button'}
          is_gradient={true}
          onClick={onClickButton}
        >
          Agregar
        </Button>
      </div>
    </div>
  )
}

Cards.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string,
  image: PropTypes.string,
  onClickButton: PropTypes.any,
  onClickSeeMore: PropTypes.any,
}

export default Cards
