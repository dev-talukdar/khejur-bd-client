 
import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";  
import useProduct from "../../../hooks/useProduct";
import ProductItem from "../../Shared/productItem/productItem";

 

const PopularProduct = () => {
    const [products] = useProduct()
    const popularItems = products.filter(product => product.category === 'popular')
     

    return (
        <section className="">
            <SectionTitle
            subHeading={'Popular items'}
            heading={'From Our Shop'}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-4">
                {
                    popularItems.map(item => <ProductItem
                    key={item._id}
                    item={item}
                    ></ProductItem>)
                }
            </div>

            <Link className="flex justify-center items-center mt-10" to={'/shop/dates'}>
                <abbr >
                     ORDER NOW 
                </abbr>
            </Link>
           
            
        </section>
    );
};

export default PopularProduct;