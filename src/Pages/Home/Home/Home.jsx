 import { Helmet } from "react-helmet-async";
import  Banner from "../Banner/Banner.jsx";
import Category from "../Category/Category.jsx"; 
import Featured from "../Featured/Featured.jsx";
import PopularProduct from "../PopularProduct/PopularProduct.jsx";
import Testimonials from "../Testimonials/Testimonials.jsx";
import ProductListing from "../ProductListing/ProductListing.jsx";
import AllProduct from "../AllProduct/AllProduct.jsx";

const Home = () => {
    return (
        <div className="bg-gradient-to-r from-rose-50 via-rose-100 to-rose-50">
            <Helmet>
                <title>Home | Khejur BD</title>
            </Helmet>

             <Banner></Banner>
             <ProductListing></ProductListing>
             
             <AllProduct></AllProduct>
             <Category></Category> 
             <PopularProduct></PopularProduct>
             <Featured></Featured>
             <Testimonials></Testimonials>
        </div>
    );
};

export default Home;