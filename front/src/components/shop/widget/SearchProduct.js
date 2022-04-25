import React from 'react'

const SearchProduct = () => {
  return (
    <div className="single-widget search">
    <h3>Search Product</h3>
    <form action="#">
        <input type="text" placeholder="Search Here..."/>
        <button type="submit"><i className="lni lni-search-alt"></i></button>
    </form>
</div>
  )
}

export default SearchProduct