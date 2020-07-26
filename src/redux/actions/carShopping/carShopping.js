import {
  SHOW_MODAL_CAR_SHOPPING,
  HIDEN_MODAL_CAR_SHOPPING,
} from '../../../action-types/carShopping'

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
