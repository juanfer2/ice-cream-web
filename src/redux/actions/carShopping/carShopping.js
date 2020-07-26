import {
  SHOW_MODAL_CAR_SHOPPING,
  HIDEN_MODAL_CAR_SHOPPING,
  ADD_PRODUCT_TO_CAR,
} from '../../../action-types/carShopping'

export const addProductCarShopping = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT_TO_CAR,
      payload: product,
    })
  }
}

export const showCardShopping = () => {
  return (dispatch) => {
    dispatch({
      type: SHOW_MODAL_CAR_SHOPPING,
    })
  }
}

export const hidenCardShopping = () => {
  return (dispatch) => {
    dispatch({
      type: HIDEN_MODAL_CAR_SHOPPING,
    })
  }
}
