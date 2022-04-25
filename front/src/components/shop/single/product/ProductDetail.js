import React from 'react'
import Comment from '../comment/Comment'
import CommentForm from '../comment/CommentForm'

const Detail = () => {
    return (
        <>
        <div className="product-details-info">
            <div className="single-block">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="info-body custom-responsive-margin">
                            <h4>Details</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                            <h4>Features</h4>
                            <ul className="features">
                                <li>Capture 4K30 Video and 12MP Photos</li>
                                <li>Game-Style Controller with Touchscreen</li>
                                <li>View Live Camera Feed</li>
                                <li>Full Control of HERO6 Black</li>
                                <li>Use App for Dedicated Camera Operation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="info-body">
                            <h4>Specifications</h4>
                            <ul className="normal-list">
                                <li><span>Weight:</span> 35.5oz (1006g)</li>
                                <li><span>Maximum Speed:</span> 35 mph (15 m/s)</li>
                                <li><span>Maximum Distance:</span> Up to 9,840ft (3,000m)</li>
                                <li><span>Operating Frequency:</span> 2.4GHz</li>
                                <li><span>Manufacturer:</span> GoPro, USA</li>
                            </ul>
                            <h4>Shipping Options:</h4>
                            <ul className="normal-list">
                                <li><span>Courier:</span> 2 - 4 days, $22.50</li>
                                <li><span>Local Shipping:</span> up to one week, $10.00</li>
                                <li><span>UPS Ground Shipping:</span> 4 - 6 days, $18.00</li>
                                <li><span>Unishop Global Export:</span> 3 - 4 days, $25.00</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row">
                <div class="col-lg-4 col-12">
                    <div class="single-block give-review">
                        <h4>4.5 (Overall)</h4>
                        <ul>
                            <li>
                                <span>5 stars - 38</span>
                                <i class="lni lni-star-filled"></i>
                                <i class="lni lni-star-filled"></i>
                                <i class="lni lni-star-filled"></i>
                                <i class="lni lni-star-filled"></i>
                                <i class="lni lni-star-filled"></i>
                            </li>
                            <li>
                                <span>4 stars - 10</span>
                                <i class="lni lni-star-filled"></i>
                                <i class="lni lni-star-filled"></i>
                                <i class="lni lni-star-filled"></i>
                                <i class="lni lni-star-filled"></i>
                                <i class="lni lni-star"></i>
                            </li>
                            <li>
                                <span>3 stars - 3</span>
                                <i class="lni lni-star-filled"></i>
                                <i class="lni lni-star-filled"></i>
                                <i class="lni lni-star-filled"></i>
                                <i class="lni lni-star"></i>
                                <i class="lni lni-star"></i>
                            </li>
                            <li>
                                <span>2 stars - 1</span>
                                <i class="lni lni-star-filled"></i>
                                <i class="lni lni-star-filled"></i>
                                <i class="lni lni-star"></i>
                                <i class="lni lni-star"></i>
                                <i class="lni lni-star"></i>
                            </li>
                            <li>
                                <span>1 star - 0</span>
                                <i class="lni lni-star-filled"></i>
                                <i class="lni lni-star"></i>
                                <i class="lni lni-star"></i>
                                <i class="lni lni-star"></i>
                                <i class="lni lni-star"></i>
                            </li>
                        </ul>
                        {/*<!-- Button trigger modal -->*/}
                        <button type="button" class="btn review-btn" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">
                            Leave a Review
                        </button>
                    </div>
                </div>
                <div class="col-lg-8 col-12">
                    <Comment />
                </div>
            </div>
        </div>
        <CommentForm/>
        </>
    )
}

export default Detail