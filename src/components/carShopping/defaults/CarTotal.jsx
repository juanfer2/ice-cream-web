import React from 'react'
import { useSelector } from 'react-redux'

function CarTotal() {
  const state = useSelector((state) => state)
  const { totalPrice } = state.carShopping
  return (
    <div className="total">
      <p>Total</p>
      <p>{totalPrice}</p>
    </div>
  )
}

export default CarTotal
