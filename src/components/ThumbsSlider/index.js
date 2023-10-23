import React, { useState, useEffect, useRef } from "react";
import Swiper, { SwiperRefNode } from "react-id-swiper";

const images = [
  {
    src: "https://picsum.photos/320/240?v1"
  },
  {
    src: "https://picsum.photos/320/240?v2"
  },
  {
    src: "https://picsum.photos/320/240?v3"
  },
  {
    src: "https://picsum.photos/320/240?v4"
  }
];

const SlideItem = ({ children, ...params }) => (
  <div className="swiper-slide" {...params}>
    <span>{children}</span>
  </div>
);

const ThumbsSlider = () => {
  const gallerySwiperRef = useRef(null);
    const thumbnailSwiper = useRef(null);
    const thumbnailSwiperRef = useRef<SwiperRefNode>(null);
    const gallerySwiperParams = {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    };
    const thumbnailSwiperParams = {
      spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true
    };
    useEffect(() => {
      const gallerySwiper = gallerySwiperRef.current.swiper;
      const thumbnailSwiper = thumbnailSwiperRef.current.swiper;
      if (gallerySwiper.controller && thumbnailSwiper.controller
      ) {
        gallerySwiper.controller.control = thumbnailSwiper;
        thumbnailSwiper.controller.control = gallerySwiper;
      }
    }, []);
    return (
      <div>
        <Swiper {...gallerySwiperParams} ref={gallerySwiperRef}>
          <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/1)' }} />
          <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/2)' }} />
          <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/3)' }} />
          <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/4)' }} />
          <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/5)' }} />
        </Swiper>
        <Swiper {...thumbnailSwiperParams} ref={thumbnailSwiper}>
          <div style={{ backgroundImage:'url(http://lorempixel.com/300/300/nature/1)' }} />
          <div style={{ backgroundImage:'url(http://lorempixel.com/300/300/nature/2)' }} />
          <div style={{ backgroundImage:'url(http://lorempixel.com/300/300/nature/3)' }} />
          <div style={{ backgroundImage:'url(http://lorempixel.com/300/300/nature/4)' }} />
          <div style={{ backgroundImage:'url(http://lorempixel.com/300/300/nature/5)' }} />
        </Swiper>
      </div>
    );
};
export default ThumbsSlider;
