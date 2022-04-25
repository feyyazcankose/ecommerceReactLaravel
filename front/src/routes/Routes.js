import Home from '../components/Home' ;
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import ShopGrid from '../components/shop/grid/ShopGrid';
import Single from '../components/shop/single/Single';
import Cart from '../components/shop/cart/Cart';

const routes = [
    {path:'/' ,component: Home},
    {path:'/register' ,component: Register},
    {path:'/login' ,component: Login},
    {path:'/grid' ,component: ShopGrid},
    {path:'/product' ,component: Single},
    {path:'/cart' ,component: Cart},
]

export default routes;