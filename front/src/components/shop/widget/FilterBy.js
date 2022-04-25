import React from 'react'

const FilterBy = () => {
  return (
    <div className="single-widget condition">
      <h3>Filter by Price</h3>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
        <label className="form-check-label" htmlFor="flexCheckDefault1">
          $50 - $100L (208)
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
        <label className="form-check-label" htmlFor="flexCheckDefault2">
          $100L - $500 (311)
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
        <label className="form-check-label" htmlFor="flexCheckDefault3" >
          $500 - $1,000 (485)
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
        <label className="form-check-label" htmlFor="flexCheckDefault4">
          $1,000 - $5,000 (213)
        </label>
      </div>
    </div>
  )
}

export default FilterBy