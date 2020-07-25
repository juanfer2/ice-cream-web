import React from "react";
/*Components */
import Navbar from "../navbar/Navbar";
import Carrousel from "../carrousel/Carrousel";
import IceCream1 from "../../images/imagesCarrousel/ice_cream_1.jpg";
import IceCream2 from "../../images/imagesCarrousel/ice_cream_2.jpg";
import IceCream3 from "../../images/imagesCarrousel/ice_cream_3.jpg";

function Home() {
  return (
    <div>
      <Navbar />
        <div className="banner">
        <div className="banner_image" style={{
          background: `url(${IceCream1})`
        }}>
        </div>
          {/* <img className="banner_image" src={IceCream1} alt="icream1" /> */}
        </div>
        
    </div>
  );
}

export default Home;
