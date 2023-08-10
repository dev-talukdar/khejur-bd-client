 
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

            <button className="btn btn-outline border-0 border-b-4 mt-4">View Product</button>
           
            
        </section>
    );
};

export default PopularProduct;