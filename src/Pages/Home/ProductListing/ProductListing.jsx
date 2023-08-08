import FeaturedListing from '../../../components/FeaturedListing/FeaturedListing';
import './ProductListing.css'

const ProductListing = () => {
    return (
        <div className='flex justify-between flex-wrap '>

            <FeaturedListing
                productName="Saudi  Dates"
                productDiscountPercent="10% Discount."
                backgroundImage="https://www.khejurbd.net/images/featuredImages/featuredDates.webp"
            ></FeaturedListing>

            <FeaturedListing
                productName="raw Peanuts"
                productDiscountPercent="10% Discount."
                backgroundImage="https://www.khejurbd.net/images/featuredImages/featuredNuts.webp"
            ></FeaturedListing>

            <FeaturedListing
                productName="Premium Seed"
                productDiscountPercent="20% Discount."
                backgroundImage="https://www.khejurbd.net/images/featuredImages/featuredSeeds.webp"
            ></FeaturedListing>

        </div>

    );
};

export default ProductListing;