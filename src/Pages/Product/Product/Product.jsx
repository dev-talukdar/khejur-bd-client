import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import PopularProduct from "../../Home/PopularProduct/PopularProduct";

 

const Product = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Khejur BD</title>
            </Helmet>
            
            <Cover img={'https://www.khejurbd.net/images/cover-img/datesNwalnut.webp'} title="Our Products"></Cover>

            <PopularProduct></PopularProduct>
            <PopularProduct></PopularProduct>
            
        </div>
    );
};

export default Product;