import { Route, Routes ,useLocation} from 'react-router-dom';

import './index.css';
import  axios  from 'axios';
import { Helmet } from 'react-helmet';
import MasterPage from './layouts/MasterPage';
import Login from './components/auth/Login';
import PasswordReset from './components/auth/PasswordReset';
import AbortOne from './components/404';
import AbortTwo from './components/403';
import ProductUpdate from './components/product/ProductUpdate';
import UserUpdate from './components/user/UserUpdate';
import CategoryUpdate from './components/category/CategoryUpdate';



axios.defaults.baseURL="http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type']="application/json";
axios.defaults.headers.post['Accept']="application/json";
axios.defaults.withCredentials = true;


axios.interceptors.request.use(function(config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';

  return config;
});


function App() {

  return (
    <>
    <Routes> 
          
          <Route   path="/login" element={ <Login/>}/>

          <Route   path="/password/reset" element={ <PasswordReset/>}/>
          <Route   path="/product/update/:id" element={ <ProductUpdate/>}/>
          <Route   path="/category/update/:id" element={ <CategoryUpdate/>}/>
          <Route   path="/user/update/:id" element={ <UserUpdate/>}/>
          
          <Route   path="/403" element={ <AbortTwo/>}/>
          <Route   path="/404" element={ <AbortOne/>}/>



          
          <Route   path="*" element={ <MasterPage/>}/>

         
    </Routes>
  </>
  );
}

export default App;
