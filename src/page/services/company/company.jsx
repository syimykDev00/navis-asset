import React from 'react';
import companyImgOne from '../../../assets/img/companyImgOne.svg';
import companyImgTwo from '../../../assets/img/companyImgTwo.svg';
import companyImgThree from '../../../assets/img/companyImgThree.svg';
import companyImgFour from '../../../assets/img/companyImgFour.svg';
import companyImgFive from '../../../assets/img/companyImgFive.svg';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const Company = () => {
  return (
    <section id="company">
      <div className="container">
        <div className='company'>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          <SwiperSlide><img src={companyImgOne} alt="" /></SwiperSlide>
          <SwiperSlide><img src={companyImgTwo} alt="" /></SwiperSlide>
          <SwiperSlide><img src={companyImgThree} alt="" /></SwiperSlide>
          <SwiperSlide><img src={companyImgFour} alt="" /></SwiperSlide>
          <SwiperSlide><img src={companyImgFive} alt="" /></SwiperSlide>
          <SwiperSlide><img src={companyImgOne} alt="" /></SwiperSlide>
          <SwiperSlide><img src={companyImgTwo} alt="" /></SwiperSlide>
          <SwiperSlide><img src={companyImgThree} alt="" /></SwiperSlide>
          <SwiperSlide><img src={companyImgFour} alt="" /></SwiperSlide>
          <SwiperSlide><img src={companyImgFive} alt="" /></SwiperSlide>
        </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Company;