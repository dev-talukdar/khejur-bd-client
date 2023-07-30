 
 
 const ProductItem = ({item}) => {
    const {name, image, packageSize, price} = item;
    return (
        <div>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <h3>{packageSize}</h3>
            <h3>{price}</h3>
            
        </div>
    );
 };
 
 export default ProductItem;