import ProductCard from "../../Shared/ProductCard/ProductCard";

 

const ShopTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10 mt-10'>
        {
            items.map(item => <ProductCard
            key={item._id}
            item={item}
            ></ProductCard>)
        }
        </div>
    );
};

export default ShopTab;