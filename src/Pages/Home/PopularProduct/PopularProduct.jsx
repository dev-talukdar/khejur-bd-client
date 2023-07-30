import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";  
import ProductItem from "../../Shared/productItem/productItem";

 

const PopularProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter( item => item.category === "popular");
            setProducts(popularItems)})
    }, [])

    return (
        <section>
            <SectionTitle
            subHeading={'Popular items'}
            heading={'From Our Shop'}
            ></SectionTitle>

            <div>
                {
                    products.map(item => <ProductItem
                    key={item._id}
                    item={item}
                    ></ProductItem>)
                }
            </div>
            
        </section>
    );
};

export default PopularProduct;