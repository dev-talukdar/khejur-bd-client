import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';



const Category = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide><img src="https://khejurbd.net/images/category/ajwa%20dates.webp" alt="" />
            <div className='absolute flex transform translate-y-1/2 left-5 right-5 bottom-80'>
            <Link to={'/'}> <button className='btn btn-sm btn-neutral btn-outline'>See Details</button></Link>
            </div>
            </SwiperSlide>
            <SwiperSlide><img src="https://khejurbd.net/images/category/almonds.webp" alt="" />
            <div className='absolute flex transform translate-y-1/2 left-5 right-5 bottom-80'>
            <Link to={'/'}> <button className='btn btn-sm btn-neutral btn-outline'>See Details</button></Link>
            </div>
            </SwiperSlide>
            <SwiperSlide><img src="https://khejurbd.net/images/category/chia%20seed.webp" alt="" />
            <div className='absolute flex transform translate-y-1/2 left-5 right-5 bottom-80'>
            <Link to={'/'}> <button className='btn btn-sm btn-neutral btn-outline'>See Details</button></Link>
            </div>
            </SwiperSlide>
            <SwiperSlide><img src="https://khejurbd.net/images/category/amber%20dates.webp" alt="" />
            <div className='absolute flex transform translate-y-1/2 left-5 right-5 bottom-80'>
            <Link to={'/'}> <button className='btn btn-sm btn-neutral btn-outline'>See Details</button></Link>
            </div>
            </SwiperSlide>
            <SwiperSlide><img src="https://khejurbd.net/images/category/cashews.webp" alt="" />
            <div className='absolute flex transform translate-y-1/2 left-5 right-5 bottom-80'>
            <Link to={'/'}> <button className='btn btn-sm btn-neutral btn-outline'>See Details</button></Link>
            </div>
            </SwiperSlide>
            <SwiperSlide><img src="https://khejurbd.net/images/category/pumpkin%20seed.webp" alt="" />
            <div className='absolute flex transform translate-y-1/2 left-5 right-5 bottom-80'>
            <Link to={'/'}> <button className='btn btn-sm btn-neutral btn-outline'>See Details</button></Link>
            </div>
            </SwiperSlide>
            <SwiperSlide><img src="https://khejurbd.net/images/category/mabroom%20dates.webp" alt="" />
            <div className='absolute flex transform translate-y-1/2 left-5 right-5 bottom-80'>
            <Link to={'/'}> <button className='btn btn-sm btn-neutral btn-outline'>See Details</button></Link>
            </div>
            </SwiperSlide>
            <SwiperSlide><img src="https://khejurbd.net/images/category/medjool%20dates.webp" alt="" />
            <div className='absolute flex transform translate-y-1/2 left-5 right-5 bottom-80'>
            <Link to={'/'}> <button className='btn btn-sm btn-neutral btn-outline'>See Details</button></Link>
            </div>
            </SwiperSlide>
            <SwiperSlide><img src="https://khejurbd.net/images/category/walnut.webp" alt="" />
            <div className='absolute flex transform translate-y-1/2 left-5 right-5 bottom-80'>
            <Link to={'/'}> <button className='btn btn-sm btn-neutral btn-outline'>See Details</button></Link>
            </div>
            </SwiperSlide>
            <SwiperSlide><img src="https://khejurbd.net/images/category/safawi%20dates.webp" alt="" />
            <div className='absolute flex transform translate-y-1/2 left-5 right-5 bottom-80'>
            <Link to={'/'}> <button className='btn btn-sm btn-neutral btn-outline'>See Details</button></Link>
            </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Category;