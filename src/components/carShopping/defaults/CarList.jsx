import React from 'react'
import { useSelector } from 'react-redux'
import { isEmpty } from 'lodash'
import CarItem from './CarItem'
import CarTotal from './CarTotal'
import Button from '../../buttons/Button'

function CarList() {
  const state = useSelector((state) => state)
  const { products } = state.carShopping
  console.log(products)
  return (
    <div>
      {!isEmpty(products) &&
        products.map((product, i) => <CarItem key={i} product={product} />)}
      <CarTotal />
      <div className="buy_items">
        <Button type={'success'} type_btn={'button'} is_gradient={true}>
          Comprar
        </Button>
      </div>
    </div>
  )
}

export default CarList
