import { Route, Routes } from 'react-router-dom';



import MasterPage from './layouts/MasterPage';
import  axios  from 'axios';
import './index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'



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
          <Route expect path="*"  element={ <MasterPage/>}>
          </Route>
    </Routes>
  </>
  );
}

export default App;
