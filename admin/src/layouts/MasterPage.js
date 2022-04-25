import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Abort from "../components/404";
import RoutesArray from "../routes/Routes";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/auth/Login";
import axios from "axios";
import Loder from "../assets/images/loader/loader.gif";
import { Helmet } from "react-helmet";
import swal from 'sweetalert2'





const MasterPage = () => {
  let location = useLocation();
  let Component = RoutesArray.filter(
    (route) => route.path == location.pathname
  );
  Component = Component.length != 0 ? Component[0].component : null;
  
  const [authorization, setAuthorization] = useState(false);
  const [navigate, setNavigate] = useState("/login");
  const [load, setLoad] = useState(true);
  

  axios.interceptors.response.use( 
    (res)=> {
      return res
    }, (err)=> {
      console.log(err.response.status);
      if(err.response.status==403)
        setNavigate('/403');
      else if(err.response.status==401)
        setNavigate('/login');
      setLoad(false);

  })

  
  useEffect( () => {
    document.body.classList.remove("app-login","p-0")


    axios.get('/api/admin/check').then(res=>{
          if(res.status===200)
            setAuthorization(true);
          setLoad(false);
    })

    return () => {
      setAuthorization(false);
      setLoad(false);
    };
  }, []);
  

   
 

  return (
    <>
      {
      load? 

      <>
          <div className="d-flex justify-content-center align-items-center">
            <img src={Loder} alt="" />
          </div>
      </>
      :<>
        {

          authorization == true?(
            Component != null ? 
              <>
                <Header />
                <div className="app-wrapper">
                  <div className="app-content pt-3 p-md-3 p-lg-4">
                    <div className="container-xl">
                      <Component />
                    </div>
                  </div>
                </div>
                <Footer />
              </>
             : (
              <Abort />
            )
          ): (<Navigate to={navigate}/>)
        }   
      </> 
      }
    </>
  );
};

export default MasterPage;
