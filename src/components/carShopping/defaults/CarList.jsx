import React from 'react'
import PropTypes from 'prop-types'
import CarItem from './CarItem'
import CarTotal from './CarTotal'
import Button from '../../buttons/Button'

function CarList(props) {
  return (
    <div>
      <CarItem />
      <CarItem />
      <CarItem />
      <CarItem />
      <CarTotal />
      <div className="buy_items">
        <Button
          type={'success'}
          type_btn={'button'}
          is_gradient={true}
          onClick={() => setShow(true)}
        >
          Comprar
        </Button>
      </div>
    </div>
  )
}

CarList.propTypes = {}

export default CarList
