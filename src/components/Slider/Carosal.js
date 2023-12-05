import React from "react";
import slider1 from "../../assets/slider1.webp";
import slider2 from "../../assets/slider2.webp";
import "../../css/style.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const Carousal = () => {
  return (
    <div className="w-75 home-page-carousal z-n1" >
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        Navigation={{
          clickable: true
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img className=" w-100" src={slider2} alt="Second slide" /></SwiperSlide>
        <SwiperSlide><img className="w-100" src={slider1} alt="First slide" /></SwiperSlide>
        <SwiperSlide><img className=" w-100" src={slider2} alt="Second slide" /></SwiperSlide>
        <SwiperSlide><img className="w-100" src={slider1} alt="First slide" /></SwiperSlide>
        <SwiperSlide><img className=" w-100" src={slider2} alt="Second slide" /></SwiperSlide>
        <SwiperSlide><img className="w-100" src={slider1} alt="First slide" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousal;
