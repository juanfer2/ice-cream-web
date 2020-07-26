import React from 'react'

import { products } from '../../store'
/*Components */
import Navbar from '../navbar/Navbar'
import ProductsList from '../productsList/ProductsList'

function Home() {
  return (
    <div>
      <Navbar />
      <ProductsList products={products} />
    </div>
  )
}

export default Home
