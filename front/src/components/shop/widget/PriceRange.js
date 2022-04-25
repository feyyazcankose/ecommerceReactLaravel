import React from 'react'

const PriceRange = () => {
  return (
                        <div className="single-widget range">
                            <h3>Price Range</h3>
                            <input type="range" className="form-range" name="range" step="1" min="100" max="10000"
                                value="10" />
                            <div className="range-inner">
                                <label>$</label>
                                <input type="text" id="rangePrimary" placeholder="100" />
                            </div>
                        </div>
  )
}

export default PriceRange