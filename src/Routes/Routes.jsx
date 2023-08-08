import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home"; 
import AboutUs from "../Pages/AboutUs/AboutUs";
import Product from "../Pages/Product/Product/Product";
import Shop from "../Pages/Shop/Shop/Shop";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
               path: '/',
               element: <Home></Home> 
            },
            {
               path: 'products',
               element: <Product></Product>
            },
            {
                path: 'shop',
                element: <Shop></Shop>
             },
             {
                path: 'about-us',
                element: <AboutUs></AboutUs>
             },
             
        ]
    },
]);