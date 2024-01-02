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
    <div className="w-100" style={{ backgroundColor: "#ef28001a" }}>
      <Swiper 
        slidesPerView={slides}
        spaceBetween={50}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper p-5 height-fitcontant w-cm"
      >
        {array.map((i) => (
          <SwiperSlide>
            <div className="col-sm-12 rounded border p-0 bg-light">
              <div className="card-body d-flex p-2 most-loved-card">
                <div className="img-container w-35 overflow-hidden rounded border">
                  <img src={cardImg} alt="card-img" />
                </div>
                <div className="d-flex flex-wrap align-items-center pl-3 w-75">
                  <h5 className="card-title text-left mb-0 f-size-18 fw-bold">
                    Special title treatment
                  </h5>
                  <div className="w-100">
                    <div className="d-flex align-items-center justify-content-center w-fit-content">
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={star} alt="star" />
                      <img src={halfstar} alt="star" />
                      <span className="ms-1 f-size-14">(4.5/5)</span>
                    </div>
                    <Card.Text className="text-left">
                      <span className="test-dec">Starts at </span>$6.99
                    </Card.Text>
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
          <SwiperSlide style={{ height: "fit-content" }}>
            <div className="col-sm-12 rounded border p-0">
              <div className="card-body d-flex flex-wrap justify-content-center select-product-box-body">
                <div className="img-container w-100 px-5 py-3">
                  <img src={cardImg} alt="card-img" />
                </div>
                <div className="pb-4 d-flex flex-wrap align-items-center w-100 justify-content-center">
                  <h5 className="card-title text-center mb-0 p-2 f-size-18 fw-bold">
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
        spaceBetween={55}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper p-5 py-5"
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
