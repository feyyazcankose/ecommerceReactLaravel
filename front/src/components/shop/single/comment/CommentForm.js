import React from 'react'

const CommentForm = () => {
  return (
    <div className="modal fade review-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Leave a Review</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label for="review-name">Your Name</label>
                                <input className="form-control" type="text" id="review-name" required/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label for="review-email">Your Email</label>
                                <input className="form-control" type="email" id="review-email" required/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label for="review-subject">Subject</label>
                                <input className="form-control" type="text" id="review-subject" required/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label for="review-rating">Rating</label>
                                <select className="form-control" id="review-rating">
                                    <option>5 Stars</option>
                                    <option>4 Stars</option>
                                    <option>3 Stars</option>
                                    <option>2 Stars</option>
                                    <option>1 Star</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="review-message">Review</label>
                        <textarea className="form-control" id="review-message" rows="8" required></textarea>
                    </div>
                </div>
                <div className="modal-footer button">
                    <button type="button" className="btn">Submit Review</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommentForm