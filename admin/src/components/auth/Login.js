import React, { useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import axios from 'axios';
import swal from 'sweetalert2'

import logo from '../../assets/images/app-logo.svg';


const Login = () => {

  useEffect(() => {
    document.body.classList.add("app-login","p-0")
  },);

  const navigate = useNavigate();

  const [loginState, setStateLogin] = useState(
    {
      'email': '',
      'password': '',
      'validation_error': [],
      'error': ''
    }
  );


  const handleChange = (e) => {
    //input value değiştikçe loginstate değişiklik yapar ~ this method is the loginState assign  in changes input value 
    setStateLogin({ ...loginState, [e.target.name]: e.target.value });
  }


  async function onSubmit(e) {
    //sayfa yenilenmesin ! ~ this page dont refresh
    e.preventDefault();
    const data = {
      "email": loginState.email,
      "password": loginState.password,
      "validation_error":[],
      "error":''
    }

    const csrf = await axios.get('/sanctum/csrf-cookie');


    await axios.post("api/login", data).then(res => {
      if (res.data.status == 200) {

        console.log(res.data);
        localStorage.setItem("auth_token", res.data.token);
        localStorage.setItem("auth_name", res.data.username);

        

        navigate('/');

      }
      else if(res.data.status ==401) {
        setStateLogin({
          ...loginState,
          ['error']: res.data.message
        });

      }
      else
      {
        setStateLogin({
          ...loginState,
          ['validation_error']: res.data.validation_error,
        })

        console.log(res.data.validation_error);
      } 
    })

  }


  return (
    <>

      <div className="row g-0 app-auth-wrapper">
        <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
          <div className="d-flex flex-column align-content-end">
            <div className="app-auth-body mx-auto">
              <div className="app-auth-branding mb-4"><a className="app-logo" href="index.html"><img className="logo-icon me-2" src={logo} alt="logo" /></a></div>
              <h2 className="auth-heading text-center mb-5">Log in to Portal</h2>
              <div className="auth-form-container text-start">
              {loginState.error ? <div style={{backgroundColor:"red",color:"#fff",padding:'10px',marginBottom:'10px',borderRadius:'20px'}}>
                              {loginState.error}
                    </div>: ''
                  }
                
                <form className="auth-form login-form" onSubmit={onSubmit}>
                  <div className="email mb-3">
                    <label className="sr-only" htmlFor="signin-email">Email</label>
                    <input id="signin-email" name="email" type="email" onChange={handleChange} value={loginState.email} className="form-control signin-email" placeholder="Email address" required="required" />
                    {loginState.validation_error['email']!=null? <div className="input-error">{loginState.validation_error['email']}</div> : ''}

                  </div>{/*//form-group*/}
                  <div className="password mb-3">
                    <label className="sr-only" htmlFor="signin-password">Password</label>
                    <input id="signin-password" name="password" onChange={handleChange} value={loginState.password} type="password" className="form-control signin-password" placeholder="Password" required="required" />
                    {loginState.validation_error['password']!=null? <div className="input-error">{loginState.validation_error['password']}</div> : ''}
                    
                    <div className="extra mt-3 row justify-content-between">
                      <div className="col-6">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" defaultValue id="RememberPassword" />
                          <label className="form-check-label" htmlFor="RememberPassword">
                            Remember me
                          </label>
                        </div>
                      </div>{/*//col-6*/}
                      <div className="col-6">
                        <div className="forgot-password text-end">
                          <a href="reset-password.html">Forgot password?</a>
                        </div>
                      </div>{/*//col-6*/}
                    </div>{/*//extra*/}
                  </div>{/*//form-group*/}
                  <div className="text-center">
                    <button type="submit" className="btn app-btn-primary w-100 theme-btn mx-auto">Log In</button>
                  </div>
                </form>
              </div>{/*//auth-form-container*/}
            </div>{/*//auth-body*/}
            <footer className="app-auth-footer">
              <div className="container text-center py-3">
                {/*/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) * /*/}
                <small className="copyright">Designed with <i className="fas fa-heart" style={{ color: '#fb866a' }} /> by <a className="app-link" href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
              </div>
            </footer>{/*//app-auth-footer*/}
          </div>{/*//flex-column*/}
        </div>{/*//auth-main-col*/}
        <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
          <div className="auth-background-holder">
          </div>
          <div className="auth-background-mask" />
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
      </div>
    </>
  )
}

export default Login