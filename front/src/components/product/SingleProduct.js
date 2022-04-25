import React from 'react'

const SingleCard = ({product,addBasket}) => {
    console.log(product);
  return (

                    <div className="single-product">
                        <div className="product-image">
                            <img src={"http://127.0.0.1:8000/"+product.path} alt="#"/>
                            <div className="button">
                                <button type="button" value={product.id} onClick={addBasket} className="btn"><i className="lni lni-cart"></i>Sepete Ekle</button>
                            </div>
                        </div>
                        <div className="product-info">
                            <span className="category">{product.get_category.title}</span>
                            <h4 className="title">
                                <a href="product-grids.html">{product.title}</a>
                            </h4>
                            
                            <div className="price">
                                <span>₺{product.price}</span>
                            </div>
                        </div>
                    </div>
  )
}

export default SingleCard