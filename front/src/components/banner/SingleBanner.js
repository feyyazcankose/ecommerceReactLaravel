import React from 'react'

const Catagory = ({backgroundImageURL}) => {
  return (
    <div className="single-banner" style={{backgroundImage:`url(${backgroundImageURL})`}}>
                        <div className="content">
                            <h2>Smart Watch 2.0</h2>
                            <p>Space Gray Aluminum Case with <br/>Black/Volt Real Sport Band </p>
                            <div className="button">
                                <a href="product-grids.html" className="btn">View Details</a>
                            </div>
                        </div>
                    </div>
  )
}

export default Catagory