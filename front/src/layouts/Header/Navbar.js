import React from 'react'

const Navbar = () => {
  return (
    <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8 col-md-6 col-12">
                    <div className="nav-inner">
                        <div className="mega-category-menu">
                            <span className="cat-button"><i className="lni lni-menu"></i>All Categories</span>
                            <ul className="sub-category">
                                <li><a href="product-grids.html">Electronics <i className="lni lni-chevron-right"></i></a>
                                    <ul className="inner-sub-category">
                                        <li><a href="product-grids.html">Digital Cameras</a></li>
                                        <li><a href="product-grids.html">Camcorders</a></li>
                                        <li><a href="product-grids.html">Camera Drones</a></li>
                                        <li><a href="product-grids.html">Smart Watches</a></li>
                                        <li><a href="product-grids.html">Headphones</a></li>
                                        <li><a href="product-grids.html">MP3 Players</a></li>
                                        <li><a href="product-grids.html">Microphones</a></li>
                                        <li><a href="product-grids.html">Chargers</a></li>
                                        <li><a href="product-grids.html">Batteries</a></li>
                                        <li><a href="product-grids.html">Cables & Adapters</a></li>
                                    </ul>
                                </li>
                                <li><a href="product-grids.html">accessories</a></li>
                                <li><a href="product-grids.html">Televisions</a></li>
                                <li><a href="product-grids.html">best selling</a></li>
                                <li><a href="product-grids.html">top 100 offer</a></li>
                                <li><a href="product-grids.html">sunglass</a></li>
                                <li><a href="product-grids.html">watch</a></li>
                                <li><a href="product-grids.html">man’s product</a></li>
                                <li><a href="product-grids.html">Home Audio & Theater</a></li>
                                <li><a href="product-grids.html">Computers & Tablets </a></li>
                                <li><a href="product-grids.html">Video Games </a></li>
                                <li><a href="product-grids.html">Home Appliances </a></li>
                            </ul>
                        </div>
                        <nav className="navbar navbar-expand-lg">
                            <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul id="nav" className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <a href="index.html" className="active" aria-label="Toggle navigation">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dd-menu collapsed" href="#" data-bs-toggle="collapse"
                                            data-bs-target="#submenu-1-2" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">Pages</a>
                                        <ul className="sub-menu collapse" id="submenu-1-2">
                                            <li className="nav-item"><a href="about-us.html">About Us</a></li>
                                            <li className="nav-item"><a href="faq.html">Faq</a></li>
                                            <li className="nav-item"><a href="login.html">Login</a></li>
                                            <li className="nav-item"><a href="register.html">Register</a></li>
                                            <li className="nav-item"><a href="mail-success.html">Mail Success</a></li>
                                            <li className="nav-item"><a href="404.html">404 Error</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dd-menu collapsed" href="#" data-bs-toggle="collapse"
                                            data-bs-target="#submenu-1-3" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">Shop</a>
                                        <ul className="sub-menu collapse" id="submenu-1-3">
                                            <li className="nav-item"><a href="product-grids.html">Shop Grid</a></li>
                                            <li className="nav-item"><a href="product-list.html">Shop List</a></li>
                                            <li className="nav-item"><a href="product-details.html">shop Single</a></li>
                                            <li className="nav-item"><a href="cart.html">Cart</a></li>
                                            <li className="nav-item"><a href="checkout.html">Checkout</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="dd-menu collapsed" href="#" data-bs-toggle="collapse"
                                            data-bs-target="#submenu-1-4" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">Blog</a>
                                        <ul className="sub-menu collapse" id="submenu-1-4">
                                            <li className="nav-item"><a href="blog-grid-sidebar.html">Blog Grid Sidebar</a>
                                            </li>
                                            <li className="nav-item"><a href="blog-single.html">Blog Single</a></li>
                                            <li className="nav-item"><a href="blog-single-sidebar.html">Blog Single
                                                    Sibebar</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="contact.html" aria-label="Toggle navigation">Contact Us</a>
                                    </li>
                                </ul>
                            </div> {/* <!-- navbar collapse <--*/}
                        </nav>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="nav-social">
                        <h5 className="title">Follow Us:</h5>
                        <ul>
                            <li>
                                <a href="#"><i className="lni lni-facebook-filled"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="lni lni-twitter-original"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="lni lni-instagram"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="lni lni-skype"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Navbar