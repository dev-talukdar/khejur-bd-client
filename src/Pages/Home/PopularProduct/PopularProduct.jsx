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
        <section className="">
            <SectionTitle
            subHeading={'Popular items'}
            heading={'From Our Shop'}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-4">
                {
                    products.map(item => <ProductItem
                    key={item._id}
                    item={item}
                    ></ProductItem>)
                }
            </div>
            <hr className="border-1 border-yellow-600 cursor-pointer hover:border-red-800 duration-500 mt-8" />
            
        </section>
    );
};

export default PopularProduct;