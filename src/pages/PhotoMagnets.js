import React from "react";
import Header from "../components/header/Header";
import copy from "../assets/copy.png";
import uploadPng from "../assets/upload.png";
import hirePng from "../assets/candidate.png";
import designPng from "../assets/web-design.png";
import poster1 from "../assets/poster-1.jpg";
import poster2 from "../assets/poster-2.jpg";
import Carousal from "../components/Slider/Carosal";
import item from "../assets/1banner.png";
import star from "../assets/star.svg";
import halfstar from "../assets/half-start.svg";
import item1 from "../assets/2banner.png";
import priceTag from "../assets/price-tag (1).png";
import badge from "../assets/badge (1).png";
import reviewLogo from "../assets/reviewLogo.png";
import {
  OnHBorderBtnCardSlider,
  SliderCard,
  VerticalImgCardSlider,
} from "../components/Slider/SliderCard";
import { Button, Container, Form } from "react-bootstrap";
import { ProductBox, TipsSuggetionCard } from "../components/product-box";
import Footer from "../components/Footer";
import { OnlyBreadCrum } from "../components/breadcrum/breadcrum";
import ThumbsSlider from "../components/ThumbsSlider";

const PhotoMegnets = () => {
  const arrayOfTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <Header />
      <OnlyBreadCrum />
      <Container>
        <div className="w-35">
            {/* <ThumbsSlider /> */}
        </div>
        <div className="w-65"></div>
      </Container>
      <Footer />
    </div>
  );
};

export default PhotoMegnets;
