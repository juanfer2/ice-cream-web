import {
  SHOW_MODAL_CAR_SHOPPING,
  HIDEN_MODAL_CAR_SHOPPING,
} from '../../../action-types/carShopping'

const initialState = {
  show: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL_CAR_SHOPPING:
      return { ...state, show: true }
    case HIDEN_MODAL_CAR_SHOPPING:
      return { ...state, show: false }
    default:
      return state
  }
}
