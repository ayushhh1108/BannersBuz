import React from "react";
import slider1 from "../../assets/slider1.webp";
import slider2 from "../../assets/slider2.webp";
import "../../css/style.css";
const Carousal = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide w-75"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner z-n1" >
        <div className="carousel-item active">
          <img className="d-block w-100" src={slider1} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={slider2} alt="Second slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousal;
