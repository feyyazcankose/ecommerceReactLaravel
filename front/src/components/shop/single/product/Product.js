import React from "react";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

const Product = () => {
  return (
    <div className="top-area">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 col-12">
            <ProductGallery/>
        </div>
        <div className="col-lg-6 col-md-12 col-12">
            <ProductInfo/>
        </div>
      </div>
    </div>
  );
};

export default Product;
