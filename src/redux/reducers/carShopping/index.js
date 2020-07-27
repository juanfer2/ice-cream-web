import {
  SHOW_MODAL_CAR_SHOPPING,
  HIDEN_MODAL_CAR_SHOPPING,
  ADD_PRODUCT_TO_CAR,
} from '../../../action-types/carShopping'
import { isEmpty } from 'lodash'

const initialState = {
  show: false,
  products: [],
  totalPrice: null,
  countProducts: null,
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

  const addProductsToCar = (newProduct) => {
    const [element, index] = findProduct(newProduct)
    if (!isEmpty(element)) {
      state.products.slice(index, 1)
      const intitalProduct = state.products
      countProducts(intitalProduct, true)
      return {
        ...state,
        products: state.products,
        count: state.count,
        show: true,
      }
    }
    const intitalProduct = [...state.products, newProduct]

    countProducts(intitalProduct)
    return {
      ...state,
      products: [...state.products, newProduct],
      count: state.count,
      show: true,
    }
  }

  const countProducts = (listProducts) => {
    state.count = 0
    state.totalPrice = 0
    listProducts.map((product) => {
      console.log('product')
      console.log(product)
      state.count = product.count + state.count
      state.totalPrice = product.price + state.totalPrice
    })

    if (state.products.length === 0) {
      state.count = action.payload.count + state.count
      state.totalPrice = action.payload.price + state.totalPrice
    }
  }

  switch (action.type) {
    case SHOW_MODAL_CAR_SHOPPING:
      return { ...state, show: true }
    case HIDEN_MODAL_CAR_SHOPPING:
      return { ...state, show: false }
    case ADD_PRODUCT_TO_CAR: {
      const newState = addProductsToCar(action.payload)
      return newState
    }
    default:
      return state
  }
}
