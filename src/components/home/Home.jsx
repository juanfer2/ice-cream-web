import React from 'react'

import { products } from '../../store'
/*Components */
import ProductsList from '../productsList/ProductsList'
// import CarShopping from '../carShopping/CarShopping'

function Home() {
  return (
    <div>
      <ProductsList products={products} />
      {/* <CarShopping /> */}
    </div>
  )
}

export default Home
