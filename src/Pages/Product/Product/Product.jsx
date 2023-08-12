import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import useProduct from "../../../hooks/useProduct";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ProductCategory from "../ProductCategory/ProductCategory";




const Product = () => {
    const [product] = useProduct();
    const dates = product.filter(date => date.category === 'dates')
    const peanuts = product.filter(peanut => peanut.category === 'peanuts')
    const seeds = product.filter(seed => seed.category === 'seeds')
    return (
        <div>
            <Helmet>
                <title>Products | Khejur BD</title>
            </Helmet>
            {/* main cover  */}
            <Cover img={'https://www.khejurbd.net/images/cover-img/datesNwalnut.webp'} title="Our Products"></Cover>

            <SectionTitle
                subHeading={"Don't miss"}
                heading={"Todays Offer"}
            ></SectionTitle>

            {/* dates items  */}
            <ProductCategory
                items={dates}
                title='dates'
                img={'https://www.khejurbd.net/images/cover-img/datesCover.webp'}
            ></ProductCategory>

            {/* peanuts item  */}
            <ProductCategory
                items={peanuts}
                title='peanuts'
                img={'https://www.khejurbd.net/images/cover-img/nutsCover.webp'}
            ></ProductCategory>

            {/* seeds items  */}
            <ProductCategory
                items={seeds}
                title='seeds'
                img={'https://www.khejurbd.net/images/cover-img/seedsCover.webp'}
            ></ProductCategory>


        </div >
    );
};

export default Product;