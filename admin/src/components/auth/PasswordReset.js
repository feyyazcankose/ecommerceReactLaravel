import React from 'react'
import { Helmet } from 'react-helmet'
import logo from '../../assets/images/app-logo.svg';

const PasswordReset = () => {
    return (
        <>
        <Helmet>
        <script type="text/javascript">
        let body= document.getElementsByTagName('body')[0];
        body.classList.add('app-reset-password');
        body.classList.add('p-0');
        </script>
      </Helmet>
        <div className="row g-0 app-auth-wrapper">
            <div className="col-12 col-md-7 col-lg-6 auth-main-col  p-5">
                <div className="d-flex flex-column align-content-end">
                    <div className="app-auth-body mx-auto">
                        <div className="app-auth-branding mb-4"><a className="app-logo" href="index.html"><img className="logo-icon me-2" src={logo} alt="logo" /></a></div>
                        <h2 className="auth-heading  mb-4">Password Reset</h2>
                        <div className="auth-intro mb-4 ">Enter your email address below. We'll email you a link to a page where you can easily create a new password.</div>
                        <div className="auth-form-container text-left">
                            <form className="auth-form resetpass-form">
                                <div className="email mb-3">
                                    <label className="sr-only" htmlFor="reg-email">Your Email</label>
                                    <input id="reg-email" name="reg-email" type="email" className="form-control login-email" placeholder="Your Email" required="required" />
                                </div>{/*//form-group*/}
                                <div className="">
                                    <button type="submit" className="btn app-btn-primary btn-block theme-btn mx-auto">Reset Password</button>
                                </div>
                            </form>
                        </div>{/*//auth-form-container*/}
                    </div>{/*//auth-body*/}
                    <footer className="app-auth-footer">
                        <div className="container  py-3">
                            {/*/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) * /*/}
                            <small className="copyright">Designed with <i className="fas fa-heart" style={{ color: '#fb866a' }} /> by <a className="app-link" href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
                        </div>
                    </footer>{/*//app-auth-footer*/}
                </div>{/*//flex-column*/}
            </div>{/*//auth-main-col*/}
            <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
                <div className="auth-background-holder">
                </div>
                <div className="auth-background-mask" >
                    <div className="auth-background-overlay p-3 p-lg-5">
                        <div className="d-flex flex-column align-content-end h-100">
                            <div className="h-100" />
                            <div className="overlay-content p-3 p-lg-4 rounded">
                                <h5 className="mb-3 overlay-title">Explore Portal Admin Template</h5>
                                <div>Portal is a free Bootstrap 5 admin dashboard template. You can download and view the template license <a href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/">here</a>.</div>
                            </div>
                        </div>
                    </div>{/*//auth-background-overlay*/}
                </div>{/*//auth-background-col*/}
            </div>{/*//auth-background-col*/}
        </div>
        
        </>
  )
}

export default PasswordReset