import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Featured.css'



const Featured = () => {
    return (
        <div className="feature-product mt-16 bg-fixed  text-white">
            <SectionTitle 
                subHeading='Check out our '
                heading='Featured Product'
            ></SectionTitle>

            <div className="md:flex justify-center bg-slate-950 bg-opacity-60 items-center pb-20  md:px-36 ">
                <div>
                    <img className="avatar rounded-xl" src="https://www.khejurbd.net/images/dry-fruits.webp" alt="" />
                </div>
                <div className="md:ml-10 mt-16">
                    <p>Aug 15, 2023</p>
                    <p className="uppercase">Benefit of Eating Ajwa Dates</p>
                    <p>Because of its high protein content, Ajwa Date is an effective weight loss aid. It helps you feel full for longer, 
                        which means you eat less. They help lower cholesterol and flush excess fat from the body thanks to the wide variety of 
                        vitamins and minerals they contain.</p>
                        <button className="btn btn-outline mt-3 text-white border-0 border-b-4">Read More</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;