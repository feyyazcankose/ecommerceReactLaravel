import React from 'react'

const SortBy = () => {
  return (
    <div className="product-sorting">
    <label htmlFor="sorting">Sort by:</label>
    <select className="form-control" id="sorting">
      <option>Popularity</option>
      <option>Low - High Price</option>
      <option>High - Low Price</option>
      <option>Average Rating</option>
      <option>A - Z Order</option>
      <option>Z - A Order</option>
    </select>
    <h3 className="total-show-product">
      Showing: <span>1 - 12 items</span>
    </h3>
  </div>
  )
}

export default SortBy