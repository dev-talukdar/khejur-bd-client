 import  Banner from "../Banner/Banner.jsx";
import Category from "../Category/Category.jsx"; 

const Home = () => {
    return (
        <div className="bg-gradient-to-r from-rose-50 via-rose-100 to-rose-50">
             <Banner></Banner>
             <Category></Category> 
        </div>
    );
};

export default Home;