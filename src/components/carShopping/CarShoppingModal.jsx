import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { hidenCardShopping } from '../../redux/actions/carShopping/carShopping'

import { Modal } from 'antd'
import CarShopping from './CarShopping'

function CarShoppingModal() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const closeModal = () => dispatch(hidenCardShopping())
  const { show } = state.carShopping

  return (
    <Modal title="Basic Modal" visible={show} onCancel={() => closeModal()}>
      <CarShopping />
    </Modal>
  )
}

CarShoppingModal.propTypes = {}

export default CarShoppingModal
