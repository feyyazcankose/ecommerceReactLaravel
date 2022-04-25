import React from 'react'
import ProductDetail from './product/ProductDetail'
import Product from './product/Product'

const Single = () => {
  return (
    <section className="item-details section">
    <div className="container">
        <Product/>
        <ProductDetail/>
    </div>
    </section>
  )
}

export default Single