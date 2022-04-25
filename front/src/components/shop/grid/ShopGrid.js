import React from "react";
import SearchProduct from "../widget/SearchProduct";
import Catagories from "../widget/Catagories";
import PriceRange from "../widget/PriceRange";
import SortBy from "../widget/SortBy";
import SingleProduct from '../../product/SingleProduct'
import FilterBy from "../widget/FilterBy";

const ShopGrid = () => {
  return (
    <section className="product-grids section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12">
            <div className="product-sidebar">
              <SearchProduct />
              <Catagories />
              <PriceRange />

              <FilterBy />

              <FilterBy />
            </div>
          </div>

          <div className="col-lg-9 col-12">
            <div className="product-grids-head">
              <div className="product-grid-topbar">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-8 col-12">
                    <SortBy />
                  </div>
                </div>
              </div>

              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-grid"
                  role="tabpanel"
                  aria-labelledby="nav-grid-tab"
                >
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <SingleProduct/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopGrid;
