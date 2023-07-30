 
 
 const ProductItem = ({item}) => {
    const {name, image, packageSize, price} = item;
    return (
        <div className="flex space-x-3 ">
            <img style={{borderRadius: '50px 200px 200px 200px'}} className=" w-[120px] shadow-lg ..." src={image} alt="" />
            <div>
            <h3 className="uppercase">{name} ----</h3>
            <h3>{packageSize}</h3>
            </div>
            <h3 ><span className="text-xl font-bold">৳</span> {price}</h3>
            
        </div>
    );
 };
 
 export default ProductItem;