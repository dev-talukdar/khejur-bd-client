import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import ProductItem from "../../Shared/productItem/productItem";
import './ProductCategory.css'


const ProductCategory = ({ items, title, img }) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid  md:grid-cols-2 gap-4 mt-16">
                {
                    items.map(item => <ProductItem
                        key={item._id}
                        item={item}
                    ></ProductItem>)
                }
            </div>


            <Link className="flex justify-center items-center mt-10" to={`/shop/${title}`}>
                <abbr >
                     ORDER NOW 
                </abbr>
            </Link>

        </div>
    );
};

export default ProductCategory;