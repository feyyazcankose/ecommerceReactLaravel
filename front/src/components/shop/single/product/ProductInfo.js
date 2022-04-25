import React from 'react'

const ProductInfo = () => {
  return (
    <div className="product-info">
                            <h2 className="title">GoPro Karma Camera Drone</h2>
                            <p className="category"><i className="lni lni-tag"></i> Drones:<a href="#">Action
                                    cameras</a></p>
                            <h3 className="price">$850<span>$945</span></h3>
                            <p className="info-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt
                                ut labore et dolore magna aliqua.</p>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="form-group color-option">
                                        <label className="title-label" htmlFor="size">Choose color</label>
                                        <div className="single-checkbox checkbox-style-1">
                                            <input type="checkbox" id="checkbox-1"  />
                                            <label htmlFor="checkbox-1"><span></span></label>
                                        </div>
                                        <div className="single-checkbox checkbox-style-2">
                                            <input type="checkbox" id="checkbox-2" />
                                            <label htmlFor="checkbox-2"><span></span></label>
                                        </div>
                                        <div className="single-checkbox checkbox-style-3">
                                            <input type="checkbox" id="checkbox-3" />
                                            <label htmlFor="checkbox-3"><span></span></label>
                                        </div>
                                        <div className="single-checkbox checkbox-style-4">
                                            <input type="checkbox" id="checkbox-4" />
                                            <label htmlFor="checkbox-4"><span></span></label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="form-group">
                                        <label htmlFor="color">Battery capacity</label>
                                        <select className="form-control" id="color">
                                            <option>5100 mAh</option>
                                            <option>6200 mAh</option>
                                            <option>8000 mAh</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="form-group quantity">
                                        <label htmlFor="color">Quantity</label>
                                        <select className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-content">
                                <div className="row align-items-end">
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="button cart-button">
                                            <button className="btn" style={{width: '100%'}}>Add to Cart</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="wish-button">
                                            <button className="btn"><i className="lni lni-reload"></i> Compare</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="wish-button">
                                            <button className="btn"><i className="lni lni-heart"></i> To Wishlist</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  )
}

export default ProductInfo