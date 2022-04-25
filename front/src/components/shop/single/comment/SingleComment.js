import React from 'react'

const SingleComment = () => {
  return (
    <div className="single-review">
    <img src="https://via.placeholder.com/150x150" alt="#"/>
    <div className="review-info">
        <h4>Awesome quality for the price
            <span>Jacob Hammond
            </span>
        </h4>
        <ul className="stars">
            <li><i className="lni lni-star-filled"></i></li>
            <li><i className="lni lni-star-filled"></i></li>
            <li><i className="lni lni-star-filled"></i></li>
            <li><i className="lni lni-star-filled"></i></li>
            <li><i className="lni lni-star-filled"></i></li>
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor...</p>
    </div>
</div>
  )
}

export default SingleComment