import Home from "../components/Home";

import Orders from "../components/order/Orders";
import OrderWait from "../components/order/OrderWait";
import OrderCheck from "../components/order/OrderCheck";
import OrderBack from "../components/order/OrderBack";

import Cargo from "../components/cargo/Cargo";

import Profile from "../components/profile/Profile";


import ProductsList from "../components/product/ProductsList";
import ProductAdd from "../components/product/ProductAdd";
import ProductUpdate from "../components/product/ProductUpdate";



import Users from "../components/user/Users";

import CatagoryList from "../components/category/CatagoryList";
import CatagoryAdd from "../components/category/CatagoryAdd";

import Comment from "../components/comment/Comment";

import CouponList from "../components/coupon/CouponList";
import CouponAdd from "../components/coupon/CouponAdd";

import Settings from "../components/Settings";
import Login from "../components/auth/Login";
import FourHundredFour from "../components/404";
import FourHundredTree from "../components/403";

const routes = [
    //Home Page
    {path:'/' ,component: Home},
    
    
    // Orders 
    {path:'/orders' ,component: Orders},
    {path:'/order/wait' ,component: OrderWait},
    {path:'/order/check' ,component: OrderCheck},
    {path:'/order/back' ,component: OrderBack},
    
    //Users
    {path:'/users' ,component: Users},
    

    //Product
    {path:'/products' ,component: ProductsList},
    {path:'/product/add' ,component: ProductAdd},
    {path:'/product/update/:id' ,component: ProductUpdate},
 
    
    //Coupons
    {path:'/coupons' ,component: CouponList},
    {path:'/coupon/add' ,component: CouponAdd},
    

    //Cargo
    {path:'/cargo' ,component: Cargo},
    

    //Catagory
    {path:'/catagoies' ,component: CatagoryList},
    {path:'/catagory/add' ,component: CatagoryAdd},
    

    //Comment
    {path:'/comment' ,component: Comment},

    //Settings
    {path:'/settings' ,component: Settings},
    //Profile
    {path:'/profile' ,component: Profile},
    {path:'/404' ,component: FourHundredFour},
    {path:'/403' ,component: FourHundredTree},

]

export default routes;