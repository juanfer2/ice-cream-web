import React from 'react'

import { products } from '../../store'
/*Components */
import Navbar from '../navbar/Navbar'
import ProductsList from '../productsList/ProductsList'
// import CarShopping from '../carShopping/CarShopping'

function Home() {
  return (
    <div>
      <Navbar />
      <ProductsList products={products} />
      {/* <CarShopping /> */}
    </div>
  )
}

export default Home
