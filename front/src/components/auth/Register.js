import axios from 'axios';
import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const Register = () => {

    const navigate = useNavigate();

    const [registerState, setRegister] = useState({
        'name':'',
        'surname':'',
        'email':'',
        'password':'',
        'validation_error':[]
    });

    const HandleChange = (e) => {

        setRegister({
                        ...registerState, 
                        [e.target.name] : e.target.value
        });

    }


    const onSubmit = (e) => {
        e.preventDefault();
        // console.log("Hello");

        //get data
        const data = {
            name: registerState.name,
            surname:registerState.surname,
            email:registerState.email,
            password:registerState.password,
        }
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post("api/register",data).then(res=>{
                if(res.data.status ===200)
                {
                    localStorage.setItem("auth_token",res.data.token);
                    localStorage.setItem("auth_name",res.data.username);
                    
                    new Swal({
                        title: "Kayıt Başarılı",
                        icon: "success",
                        button: "Tamam",
                    });
            
                    navigate('/');
                }
                else
                {
                    setRegister({
                        ...registerState,
                        ['validation_error']: res.data.validation_error,
                      })
                }

            })
        })
        // console.log(data);



    }

    const validate=(name)=>{
        if(typeof registerState.validation_error[name]!=="undefined")
        return (
            <div className="input-error">
                {registerState.validation_error[name]
            }
            </div> 
        )

    }

  return (
 <>
   


  <div className="account-login section">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                    <form className="card login-form" method="post" onSubmit={onSubmit}>
                        <div className="card-body">
                            
                        <div className="form-group input-group">
                          <input type="text" className="form-control" placeholder="Ad" name="name" onChange={HandleChange}   value={registerState.name}/>
                          { validate("name") }
                          
                        </div>
                        <div className="form-group input-group">
                          <input type="text" className="form-control" placeholder="Soyad" name="surname" onChange={HandleChange} value={registerState.surname}/>
                          { validate("surname") }

                        </div>
                        <div className="form-group input-group">
                          <input type="email" className="form-control" placeholder="E Posta" name="email" onChange={HandleChange} value={registerState.email}/>
                          { validate("email") }

                        </div>
                        <div className="form-group input-group">
                          <input type="password" className="form-control" placeholder="Parola" name="password" onChange={HandleChange} value={registerState.password}/>
                          { validate("password") }

                        </div>
                            
                            <div className="button">
                                <button className="btn" type="submit">Kayıt Ol</button>
                            </div>
                            <p className="outer-link">Bir hesabın var mı?<a href="register.html">Giriş yap</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
 </>
  )
}

export default Register