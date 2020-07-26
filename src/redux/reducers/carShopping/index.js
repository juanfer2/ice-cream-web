import {
  SHOW_MODAL_CAR_SHOPPING,
  HIDEN_MODAL_CAR_SHOPPING,
  ADD_PRODUCT_TO_CAR,
} from '../../../action-types/carShopping'
import { isEmpty } from 'lodash'

const initialState = {
  show: false,
  products: [],
}

export default function (state = initialState, action) {
  const findProduct = (element) => {
    if (!isEmpty(element)) {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id,
      )
      if (index !== undefined && index !== -1) {
        const productBefore = state.products.find(
          (product) => product.id === action.payload.id,
        )
        element.count = productBefore.count + 1
        return [element, index]
      }
      return [null, null]
    }
    return [null, null]
  }

  switch (action.type) {
    case SHOW_MODAL_CAR_SHOPPING:
      return { ...state, show: true }
    case HIDEN_MODAL_CAR_SHOPPING:
      return { ...state, show: false }
    case ADD_PRODUCT_TO_CAR: {
      const [element, index] = findProduct(action.payload)

      if (!isEmpty(element)) {
        state.products.slice(index, 1)
        return {
          ...state,
          products: state.products,
          show: true,
        }
      }
      return {
        ...state,
        products: [...state.products, action.payload],
        show: true,
      }
    }
    default:
      return state
  }
}
