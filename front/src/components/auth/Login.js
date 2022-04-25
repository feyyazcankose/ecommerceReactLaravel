import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { useNavigate  } from 'react-router-dom'

import axios from 'axios';
import swal from 'sweetalert2'
import Swal from 'sweetalert2';


const Login = () => {
  const navigate = useNavigate ();

  const [loginState, setStateLogin] = useState(
      {
          'email':'',
          'password':'',
          'validation_error':[],
          'error':''
      }
  );


  const handleChange = (e) => {
    //input value değiştikçe loginstate değişiklik yapar ~ this method is the loginState assign  in changes input value 
    setStateLogin({...loginState,[e.target.name]:e.target.value});
  }


  async function onSubmit(e) {
    //sayfa yenilenmesin ! ~ this page dont refresh
    e.preventDefault(); 
    console.log("çalıştı");
    const data = {
      "email":loginState.email,
      "password":loginState.password,
    }

    const csrf = await axios.get('/sanctum/csrf-cookie');


    await axios.post("api/login",data).then(res=>{
      if(res.data.status==200){

        localStorage.setItem("auth_token",res.data.token);
        localStorage.setItem("auth_name",res.data.username);
        
       new Swal({
          title: "Giriş Başarılı",
          icon: "success",
          button: "Tamam",
      });
      
        navigate('/');

      }
      else
      {
        setStateLogin({
          ...loginState, 
          ['validation_error'] :res.data.validation_error,
          ['error'] :res.data.error
        });

      }
    })

  }


  return (

    <div className="account-login section">
        <div className="container">
            <div className="row">

            {loginState.error ? <div className="alert alert-danger text-white">
                              {loginState.error}
                    </div>: ''
                  }
                <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                    <form className="card login-form" method="post" onSubmit={onSubmit}>
                        <div className="card-body">
                            <div className="form-group input-group">
                                <label htmlFor="reg-fn">E posta</label>
                                 <input type="email"  onChange={handleChange} className="form-control" placeholder="E Posta" name="email"  value={loginState.email}/>
                                {loginState.validation_error['email']!=null? <div className="input-error">{loginState.validation_error['email']}</div> : ''}

                            </div>
                            <div className="form-group input-group">
                                <label htmlFor="reg-fn">Parola</label>
                                <input type="password" onChange={handleChange} className="form-control" placeholder="Parola" name="password" value={loginState.password} />
                                {loginState.validation_error['password']!=null? <div className="input-error">{loginState.validation_error['password']}</div> : ''}
                            </div>
                            <div className="d-flex flex-wrap justify-content-between bottom-content">
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input width-auto" id="exampleCheck1"/>
                                    <label className="form-check-label">Beni Hatırla</label>
                                </div>
                                <a className="lost-pass" href="account-password-recovery.html">Şifreni mi unuttun?</a>
                            </div>
                            <div className="button">
                                <button className="btn" type="submit">Giriş Yap</button>
                            </div>
                            <p className="outer-link">Henüz hesap oluşturmadın mı? <Link to="/register">Kayıt Ol</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login