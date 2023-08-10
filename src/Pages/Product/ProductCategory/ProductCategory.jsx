import Cover from "../../Shared/Cover/Cover";
import ProductItem from "../../Shared/productItem/productItem";


const ProductCategory = ({items, title, img}) => {
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

        </div>
    );
};

export default ProductCategory;