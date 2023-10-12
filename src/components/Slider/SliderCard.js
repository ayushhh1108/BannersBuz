import React, { useState } from "react";
import "../../css/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import cardImg from "../../assets/pexels.jpg";
import star from "../../assets/star.svg";
import halfstar from "../../assets/half-start.svg";
import rightArrow from "../../assets/right-arrow.png";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Card } from "react-bootstrap";
const SliderCard = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 4, 5, 6, 7, 8, 9]);
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper p-5"
        style={{ backgroundColor: "#f8f8f8" }}
      >
        {array.map((i) => (
          <SwiperSlide>
            <div className="col-sm-12 rounded border p-0">
              <div className="card-body d-flex p-2">
                <div className="img-container w-35 overflow-hidden rounded border">
                  <img src={cardImg} alt="card-img" />
                </div>
                <div className="d-flex flex-wrap align-items-center pl-3 w-75">
                  <h5 className="card-title text-left mb-0">
                    Special title treatment
                  </h5>
                  <div className="w-100">
                    <div className="d-flex align-items-center justify-content-center w-50">
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={halfstar} alt="star" />
                      <span className="ms-1">(4.5/5)</span>
                    </div>
                    <Card.Text className="text-left">
                      <span className="test-dec">Starts at </span>$6.99
                    </Card.Text>
                  </div>
                  <a href="#" className="d-flex card-title w-75">
                    View Details{" "}
                    <img
                      src={rightArrow}
                      alt="right-arrow"
                      className="w-15 pl-2"
                    />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const VerticalImgCardSlider = () => {
  const array = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper p-5"
        style={{height:"fit-content"}}
      >
        {array.map((i) => (
          <SwiperSlide style={{height:"fit-content"}}>
            <div className="col-sm-12 rounded border p-0">
              <div className="card-body d-flex flex-wrap justify-content-center">
                <div className="img-container w-100 px-5 py-3">
                  <img src={cardImg} alt="card-img" />
                </div>
                <div className="d-flex flex-wrap align-items-center w-100 justify-content-center">
                  <h5 className="card-title text-center mb-0 p-2">
                    Special title treatment
                  </h5>
                  <div className="w-100 p-2">
                    <div className="d-flex align-items-center justify-content-center w-50 mx-auto">
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={halfstar} alt="star" />
                      <span className="ms-1 font-weight-light">3980</span>
                    </div>
                    <Card.Text className="text-center p-2">
                      <span className="test-dec">Starts at </span>$6.99
                    </Card.Text>
                  </div>
                  <a href="#" className="d-flex card-title w-100 align-item-center p-3 mx-auto justify-content-center slider-customize-hover">
                    View Details{" "}
                    <img
                      src={rightArrow}
                      alt="right-arrow"
                      className="w-12 pl-2"
                    />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export {SliderCard , VerticalImgCardSlider};
