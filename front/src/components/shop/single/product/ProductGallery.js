import React from 'react'
import { Carousel } from 'react-responsive-carousel';

const ProductGallery = () => {
  return (
    <div className="product-images">
        <main id="gallery">
        
        <Carousel  autoPlay infiniteLoop  dynamicHeight   stopOnHover showThumbs  showIndicators> 
            <img src="https://via.placeholder.com/1000x670" id="current" alt="#"/>
            <img src="https://via.placeholder.com/1000x670" className="img" alt="#"/>
            <img src="https://via.placeholder.com/1000x670" className="img" alt="#"/>
            <img src="https://via.placeholder.com/1000x670" className="img" alt="#"/>
            <img src="https://via.placeholder.com/1000x670" className="img" alt="#"/>
            <img src="https://via.placeholder.com/1000x670" className="img" alt="#"/>
        </Carousel>
        
    </main>
    </div>

  )
}

export default ProductGallery