import React from "react";
import Notifications from "./Notifications";
import {NavLink, useNavigate} from 'react-router-dom'
import axios from "axios";
import Swal from "sweetalert2";
const Navbar = () => {
  const navigate = useNavigate();
  async function onLogout(e){
    e.preventDefault();
    const csrf = await axios.get('/sanctum/csrf-cookie');
      await axios.post("api/logout").then(res=>{
        if(res.status==200)
      {
          localStorage.removeItem("auth_token");
          localStorage.removeItem("auth_name");
          
          // Swal({
          //   title: "Çıkış Başarılı",
          //   icon: "success",
          //   button: "Tamam",
          // });
  
          navigate('/login');
      }
    });	 
  }

  return (
    <>
      <div className="app-header-inner">
        <div className="container-fluid py-2">
          <div className="app-header-content">
            <div className="row justify-content-between align-items-center">
              <div className="col-auto">
                <NavLink
                  id="sidepanel-toggler"
                  className="sidepanel-toggler d-inline-block d-xl-none"
                  to="/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    role="img"
                  >
                    <title>Menu</title>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                      d="M4 7h22M4 15h22M4 23h22"
                    ></path>
                  </svg>
                </NavLink>
              </div>
              <div className="search-mobile-trigger d-sm-none col">
                <i className="search-mobile-trigger-icon fas fa-search"></i>
              </div>
              <div className="app-search-box col">
                <form className="app-search-form">
                  <input
                    type="text"
                    placeholder="Ara..."
                    name="search"
                    className="form-control search-input"
                  />
                  <button
                    type="submit"
                    className="btn search-btn btn-primary"
                    value="Search"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>

              <div className="app-utilities col-auto">
            
                <Notifications />
                <div className="app-utility-item">
                  <NavLink to="/settings" title="Settings">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-gear icon"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"
                      />
                    </svg>
                  </NavLink>
                </div>

                <div className="app-utility-item app-user-dropdown dropdown">
                  <NavLink
                    className="dropdown-toggle"
                    id="user-dropdown-toggle"
                    data-bs-toggle="dropdown"
                    to="#"
                    role="button"
                    aria-expanded="false"
                  >
                    <img src="assets/images/user.png" alt="user profile" />
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="user-dropdown-toggle"
                  >
                    <li>
                      <NavLink className="dropdown-item" to="/profile">
                        Hesabım
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/settings">
                        Ayarlar
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button className="dropdown-item" onClick={onLogout}>
                        Çıkış Yap
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
