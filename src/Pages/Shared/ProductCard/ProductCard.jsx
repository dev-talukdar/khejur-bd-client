import { Link } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = ({item}) => {
    const {name, image, packageSize, price} = item;
    return (
        <>
      {/*<!-- Component: E-commerce card --> */}
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure> <img  src={image} alt="card image" className=" w-full scale-100 hover:scale-110 hover:ease-in transition duration-500"/>   </figure> 
         <p className="relative ml-72 mb-16 px-4 bg-slate-900 text-yellow-600 font-semibold ">BDT {price}</p>
        
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-yellow-600">
              {name}
            </h3>
            
          </header>
          <p className='  text-yellow-600'>  <span className='font-bold '> Net Weight :</span>       {packageSize}          </p>
        </div>
        {/*  <!-- Action base sized basic button --> */}
        <div className="flex justify-end p-6 pt-0">
          <Link className="flex justify-center items-center mx-auto mt-10"><abbr > See Details</abbr></Link>
        </div>
      </div>
      {/*<!-- End E-commerce card --> */}
    </>
    );
};

export default ProductCard;       