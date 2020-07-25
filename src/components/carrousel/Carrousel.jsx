import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
function Carrousel({
  dots=true, 
  infinite=true,
  speed=500,
  slidesToShow=1,
  slidesToScroll=1,
  children
}) {

  const settings = {
    dots,
    infinite,
    speed,
    slidesToShow,
    slidesToScroll,
    adaptiveHeight: true
  };

  return (
    <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          {children}
        </Slider>
      </div>
  )
}

export default Carrousel
