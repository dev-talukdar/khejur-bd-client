import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './TestimonialCard.css'
import Marquee from "react-fast-marquee";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    return (
        <section>
            <SectionTitle
                subHeading={'Customers saying about'}
                heading={'about our products'}
            ></SectionTitle>


            <Marquee>

                <div className='flex gap-10 my-6 mt-6'>

                    <div className="card ml-10 scale-100 hover:scale-105 hover:ease-in duration-500 ...">
                        <div className="content ">
                            <p className="heading">Md Salman</p>
                            <p className="para">I ordered 2 KG ajwa from them, they deliver on timely manner. Their quality is good too. I think they may consider their pricing a bit. Where other vendor selling dates about 150-200 tk less for per kg</p>
                            <p className="para">Rating: </p> <Rating
                                style={{ maxWidth: 180 }}
                                value={5}
                                readOnly
                            />

                        </div>
                    </div>
                    <div className="card scale-100 hover:scale-105 hover:ease-in duration-500 ...">
                        <div className="content ">
                            <p className="heading">Abul Kashem</p>
                            <p className="para">Maa Shaa Allah…they are providing authentic and fresh products with fast delivery service….I brought fresh ajwa dates from them….too good 👍</p>
                            <p className="para">Rating: </p> <Rating
                                style={{ maxWidth: 180 }}
                                value={4}
                                readOnly
                            />

                        </div>
                    </div>
                    <div className="card scale-100 hover:scale-105 hover:ease-in duration-500 ...">
                        <div className="content ">
                            <p className="heading">Rina Parveen</p>
                            <p className="para">Garden fresh dates, good quality. Fast delivery, highly recommended.</p>
                            <p className="para">Rating: </p> <Rating
                                style={{ maxWidth: 180 }}
                                value={4}
                                readOnly
                            />

                        </div>
                    </div>
                    <div className="card scale-100 hover:scale-105 hover:ease-in duration-500 ...">
                        <div className="content ">
                            <p className="heading">Jesmin Akhter</p>
                            <p className="para">I ordered 2 kg Ajwa dates from abroad, they deliver to my home within a short time. Their dates quality was really good. Highly recommended</p>
                            <p className="para">Rating: </p> <Rating
                                style={{ maxWidth: 180 }}
                                value={5}
                                readOnly
                            />

                        </div>
                    </div>
                    <div className="card scale-100 hover:scale-105 hover:ease-in duration-500 ...">
                        <div className="content ">
                            <p className="heading">Nasrin Aktar</p>
                            <p className="para">Product was Good And fresh.thank you Khejur Bd!</p>
                            <p className="para">Rating: </p> <Rating
                                style={{ maxWidth: 180 }}
                                value={5}
                                readOnly
                            />

                        </div>
                    </div>
                    <div className="card scale-100 hover:scale-105 hover:ease-in duration-500 ...">
                        <div className="content ">
                            <p className="heading">Tamanna Ferdaus</p>
                            <p className="para">Loved it...organic and premium  quality ❤️</p>
                            <p className="para">Rating: </p> <Rating
                                style={{ maxWidth: 180 }}
                                value={5}
                                readOnly
                            />

                        </div>
                    </div>
                    <div className="card scale-100 hover:scale-105 hover:ease-in duration-500 ...">
                        <div className="content ">
                            <p className="heading">Shanto Ahmed</p>
                            <p className="para">i ordered 1st time here, products were really good and looks delicious.highly recommended.</p>
                            <p className="para">Rating: </p> <Rating
                                style={{ maxWidth: 180 }}
                                value={5}
                                readOnly
                            />

                        </div>
                    </div>
                    <div className="card scale-100 hover:scale-105 hover:ease-in duration-500 ...">
                        <div className="content ">
                            <p className="heading">Ahmed Shuvo</p>
                            <p className="para">Highly Recommend this website. It was good and fresh</p>
                            <p className="para">Rating: </p> <Rating
                                style={{ maxWidth: 180 }}
                                value={5}
                                readOnly
                            />

                        </div>
                    </div>
                    <div className="card scale-100 hover:scale-105 hover:ease-in duration-500 ...">
                        <div className="content ">
                            <p className="heading">Shakil Ahmed</p>
                            <p className="para">Khejur was good. Highly recommended.</p>
                            <p className="para">Rating: </p> <Rating
                                style={{ maxWidth: 180 }}
                                value={5}
                                readOnly
                            />

                        </div>
                    </div>
                    <div className="card scale-100 hover:scale-105 hover:ease-in duration-500 ...">
                        <div className="content ">
                            <p className="heading">Jafar Ullah</p>
                            <p className="para">Dam kichuta beshi, kintu product peye ami satisfied. Suvo kamona roilo, apnader jonno.</p>
                            <p className="para">Rating: </p> <Rating
                                style={{ maxWidth: 180 }}
                                value={5}
                                readOnly
                            />

                        </div>
                    </div>

                </div>

            </Marquee>
        </section>
    );
};

export default Testimonials;