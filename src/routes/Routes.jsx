import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Inbox from "../pages/Inbox/Inbox";
import Profile from "../pages/Shared/Profile/Profile";
import WishList from "../pages/WishList/WishList";
import Cart from "../pages/Cart/Cart";
import Mall from "../pages/Mall/Mall";
import Community from "../pages/Community/Community";
import Exchange from "../pages/Exchange/Exchange";
import AboutUs from "../pages/AboutUs/AboutUs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Events from "../pages/LookingFor/Events";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'/inbox',
            element: <Inbox></Inbox>
        },
        {
            path:'/profile',
            element: <Profile></Profile>
        },
        {
            path:'/wishlist',
            element: <WishList></WishList>
        },
        {
            path:'/cart',
            element: <Cart></Cart>
        },
        {
            path:'/mall',
            element: <Mall></Mall>
        },
        {
            path:'/community',
            element: <Community></Community>
        },
        {
            path:'/exchange',
            element: <Exchange></Exchange>
        },
        {
            path:'/aboutUs',
            element: <AboutUs></AboutUs>
        },
        {
            path:'/events',
            element: <Events></Events>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ]
    },
  ]);




  export default router;