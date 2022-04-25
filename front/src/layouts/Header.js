import React from 'react'
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

import { useNavigate  } from 'react-router-dom'

import axios from 'axios';
import swal from 'sweetalert2'
import TopBar from './Header/TopBar';
import MiddleBar from './Header/MiddleBar';
import NavBar from './Header/Navbar';

const Header = () => {

  const navigate = useNavigate ();
  let AuthList="";
  
  async function onLogout(e){
	e.preventDefault();
	const csrf = await axios.get('/sanctum/csrf-cookie');
    await axios.post("api/logout").then(res=>{
      if(res.data.status==200)
	  {
		localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_name");
        
        new swal({
          title: "Çıkış Başarılı",
          icon: "success",
          button: "Tamam",
        });

        navigate('/');
	  }
	});	
  }



  if(!localStorage.getItem("auth_token"))
  {
	AuthList = (
		<>
		<ul className="user-login">
				<li><Link to="/login"><i className="fa fa-user-o"></i>Giriş Yap</Link></li>
				<li><Link to="/register"><i className="fa fa-user-o"></i>Kayıt Ol</Link></li>
			</ul>
		</>
	);

  }
  else 
  {
	AuthList = (
			<>
			<div className="user">
                <i className="lni lni-user"></i>
                                {localStorage.getItem("auth_name")}
            </div>
			<ul className="user-login">
				<li><button onClick={onLogout} type="button" className="btn btn-danger btn-sm text-white" >Çıkış Yap</button></li>
			</ul>
			
			</>

	); 
  }

  return (
	   	  <header className="header navbar-area">
				<TopBar authList={AuthList}/>
				<MiddleBar/>
				<NavBar/>
		</header>
  )
}
export default Header;