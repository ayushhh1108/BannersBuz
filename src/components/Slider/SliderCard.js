import React, { useEffect, useState } from "react";
import "../../css/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import cardImg from "../../assets/pexels.jpg";
import star from "../../assets/star.svg";
import halfstar from "../../assets/half-start.svg";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Card } from "react-bootstrap";
import { OnHBorderBtnCard } from "../product-box";
import { RightArrowbtn } from "../RightArrowBTN";
import { Link } from "react-router-dom";
import img1 from "../../assets/redesign/img1.jpg";
import img2 from "../../assets/redesign/img2.jpg";
import img3 from "../../assets/redesign/img3.jpg";
const SliderCard = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 4, 5, 6, 7, 8, 9]);
  const [screenWidth,setScreenWidth] = useState(window.innerWidth);
  const [slides,setSlides] = useState(3);
  useEffect(() => {
    if(screenWidth<900){
      setSlides(1);
    }else if(screenWidth<1200){
      setSlides(2);
    }else{
      setSlides(3)
    }
  },[]);
  return (
    <div className="w-100 px-3 w-cm">
      <Swiper 
        slidesPerView={slides}
        spaceBetween={20}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper py-3 height-fitcontant"
      >
        {array.map((i) => (
          <SwiperSlide>
            <div className="col-sm-12 border p-0 bg-light bb_most_love_product">
              <div className="card-body d-flex p-2 most-loved-card">
                <div className="img-container w-35 overflow-hidden">
                  <img src={cardImg} alt="card-img" />
                </div>
                <div className="d-flex flex-wrap align-items-center pl-3 w-75">
                  <h5 className="card-title text-left mb-0 f-size-18 fw-bold">
                    Special title treatment
                  </h5>
                  <div className="w-100">
                    <Card.Text className="mb-2 text-left fw-bold">
                      <span className="test-dec fw-normal">Starts at </span>$6.99
                    </Card.Text>
                    <div className="d-flex align-items-center justify-content-center w-fit-content">
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={halfstar} alt="star" />
                      <span className="ms-1 f-size-14">(4.5/5)</span>
                    </div>
                  </div>
                  <Link to="/banner">
                    <RightArrowbtn text={"View Details"} />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const VerticalImgCardSlider = () => {
  const array = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9];
  const [screenWidth,setScreenWidth] = useState(window.innerWidth);
  const [slides,setSlides] = useState(4);
  useEffect(() => {
    if(screenWidth<415){
      setSlides(1);
    }else if(screenWidth<900){
      setSlides(2);
    }else if(screenWidth<1200){
      setSlides(3);
    }else{
      setSlides(4)
    }
  },[]);
  return (
    <>
      <Swiper
        slidesPerView={slides}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper p-4"
        style={{ height: "fit-content" }}
      >
        {array.map((i) => (
          <SwiperSlide style={{ height: "fit-content" }} className="">
            <div className="col-sm-12 bb_custom_banners border p-0">
              <div className="card-body d-flex flex-wrap justify-content-center select-product-box-body">
                <div className="img-container w-100">
                  <img src={img1} alt="card-img" />
                </div>
                <div className="pb-4 d-flex flex-wrap align-items-center w-100 justify-content-center">
                  <h5 className="card-title text-center mb-0 p-2 f-size-18 fw-bold mt-3">
                    Special title treatment
                  </h5>
                  <div className="w-100 p-2">
                    <div className="d-flex align-items-center justify-content-center w-50 mx-auto">
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={halfstar} alt="star" />
                      <span className="ms-1 font-weight-light f-size-14">3980</span>
                    </div>
                    <Card.Text className="text-center p-2 f-size-16">
                      <span className="test-dec ">Starts at </span>$6.99
                    </Card.Text>
                  </div>
                  <Link to='/photo-magnets'>
                    <RightArrowbtn text={"Customize"} />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const OnHBorderBtnCardSlider = ({ secound, customerPicks }) => {
  const array = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9];
  const [screenWidth,setScreenWidth] = useState(window.innerWidth);
  const [slides,setSlides] = useState(4);
  useEffect(() => {
    if(screenWidth<400){
      setSlides(1);
    }else if(screenWidth<600){
      setSlides(2);
    }else if(screenWidth<800){
      setSlides(3);
    }else if(screenWidth<1200){
      setSlides(4);
    }else{
      setSlides(4);
    }
  },[]);
  return (
    <>
      <Swiper
        slidesPerView={slides}
        spaceBetween={50}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper py-5"
        style={{  height:  "fit-content"  }}
      >
        {array.map((i) => (
          <SwiperSlide style={{ height: "fit-content" }}>
            <OnHBorderBtnCard secound={secound} customerPicks={customerPicks} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export { SliderCard, VerticalImgCardSlider, OnHBorderBtnCardSlider };
