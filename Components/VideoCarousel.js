import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Updated import path for swiper above version 7
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import 'swiper/css/autoplay'; 



SwiperCore.use([Navigation, Pagination, Autoplay]);

const VideoCarousel = () => {
  const videos = [
    '/videos/video1.mp4',
    '/videos/video2.mp4',
    '/videos/video3.mp4',
  ];

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      {videos.map((video, index) => (
        <SwiperSlide key={index}>
          <video
            src={video}
            controls
            width="100%"
            height="50%"
            style={{ objectFit: 'cover' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VideoCarousel;