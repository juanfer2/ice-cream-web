import React from 'react'
import IceCream1 from '../../images/imagesCarrousel/ice_cream.jpg'

function Banner() {
  return (
    <div className="banner">
      <div
        className="banner_image"
        style={{
          background: `url(${IceCream1})`,
        }}
      ></div>
    </div>
  )
}

export default Banner
