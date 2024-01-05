import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <img src="path/to/image1.jpg" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="path/to/image2.jpg" alt="Slide 2" />
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default SwiperComponent;