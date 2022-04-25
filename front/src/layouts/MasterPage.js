import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Abort from '../components/Abort'
import RoutesArray from '../routes/Routes';
import { useLocation} from 'react-router-dom';
import Loader from './Loader';
const MasterPage = () => {
  let location = useLocation();
  let Component = RoutesArray.filter(route => route.path === location.pathname);
  Component=Component.length!==0 ? Component[0].component  : null; 
  return (
   <>
   {/* <Loader/> */}
    
    { Component!==null ? (<><Header/><Component /><Footer/></>): <Abort/> }
    
   </>
  )
}

export default MasterPage