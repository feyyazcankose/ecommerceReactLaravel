import React from 'react'

 const Footer = () => {
  return (
	<>
     <footer className="footer">
        {/*<!-- Start Footer Top -->*/}
       
        {/*<!-- End Footer Top -->*/}
        {/*<!-- Start Footer Middle -->*/}
        <div className="footer-middle">
            <div className="container">
                <div className="bottom-inner">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            {/*<!-- Single Widget -->*/}
                            <div className="single-footer f-contact">
                                <h3>Get In Touch With Us</h3>
                                <p className="phone">Phone: +1 (900) 33 169 7720</p>
                                <ul>
                                    <li><span>Monday-Friday: </span> 9.00 am - 8.00 pm</li>
                                    <li><span>Saturday: </span> 10.00 am - 6.00 pm</li>
                                </ul>
                                <p className="mail">
                                    <a href="mailto:support@shopgrids.com">support@shopgrids.com</a>
                                </p>
                            </div>
                            {/*<!-- End Single Widget -->*/}
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            {/*<!-- Single Widget -->*/}
                            <div className="single-footer our-app">
                                <h3>Our Mobile App</h3>
                                <ul className="app-btn">
                                    <li>
                                        <a href="#">
                                            <i className="lni lni-apple"></i>
                                            <span className="small-title">Download on the</span>
                                            <span className="big-title">App Store</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="lni lni-play-store"></i>
                                            <span className="small-title">Download on the</span>
                                            <span className="big-title">Google Play</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/*<!-- End Single Widget -->*/}
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            {/*<!-- Single Widget -->*/}
                            <div className="single-footer f-link">
                                <h3>Information</h3>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Downloads</a></li>
                                    <li><a href="#">Sitemap</a></li>
                                    <li><a href="#">FAQs Page</a></li>
                                </ul>
                            </div>
                            {/*<!-- End Single Widget -->*/}
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            {/*<!-- Single Widget -->*/}
                            <div className="single-footer f-link">
                                <h3>Shop Departments</h3>
                                <ul>
                                    <li><a href="#">Computers & Accessories</a></li>
                                    <li><a href="#">Smartphones & Tablets</a></li>
                                    <li><a href="#">TV, Video & Audio</a></li>
                                    <li><a href="#">Cameras, Photo & Video</a></li>
                                    <li><a href="#">Headphones</a></li>
                                </ul>
                            </div>
                            {/*<!-- End Single Widget -->*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*<!-- End Footer Middle -->*/}
        {/*<!-- Start Footer Bottom -->*/}
        <div className="footer-bottom">
            <div className="container">
                <div className="inner-content">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-12">
                            <div className="payment-gateway">
                                <span>We Accept:</span>
                                <img src="assets/images/footer/credit-cards-footer.png" alt="#" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="copyright">
                                <p>Designed and Developed by<a href="https://graygrids.com/" rel="nofollow"
                                        target="_blank">GrayGrids</a></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <ul className="socila">
                                <li>
                                    <span>Follow Us On:</span>
                                </li>
                                <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                <li><a href="#"><i className="lni lni-twitter-original"></i></a></li>
                                <li><a href="#"><i className="lni lni-instagram"></i></a></li>
                                <li><a href="#"><i className="lni lni-google"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*<!-- End Footer Bottom -->*/}
    </footer>
	</>
  )
}

export default Footer;