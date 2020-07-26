import React from 'react'
import Cards from '../cards/Cards'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'
import List from '../list/List'

function ProductsList({ products }) {
  return (
    <List>
      {!isEmpty(products) &&
        products.map((product, i) => (
          <Cards
            key={i}
            title={product.name}
            image={product.imageUrl}
            price={product.price}
          />
        ))}
    </List>
  )
}

ProductsList.propTypes = {
  products: PropTypes.array,
}

export default ProductsList
