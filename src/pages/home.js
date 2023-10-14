import React from "react";
import Header from "../components/header/Header";
import copy from "../assets/copy.png";
import uploadPng from "../assets/upload.png";
import hirePng from "../assets/candidate.png";
import designPng from "../assets/web-design.png";
import poster1 from "../assets/poster-1.jpg";
import poster2 from "../assets/poster-2.jpg";
import Carousal from "../components/Slider/Carosal";
import {
  SliderCard,
  VerticalImgCardSlider,
} from "../components/Slider/SliderCard";
import { Button, Form } from "react-bootstrap";
import ProductBox from "../components/product-box";

const HomePage = () => {
  const arrayOfTen = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div>
      <Header />
      <div className="main-container w-cm">
        <div className="carosal-box d-flex flex-wrap mb-5">
          <Carousal />
          <div className="w-25 d-flex flex-wrap justify-content-center">
            <h5 className="w-100 text-center pt-3">Beat the Clock & Save!</h5>
            <div className="w-75 d-flex justify-content-space-evenly">
              <div className="rounded small-calander text-center p-1">
                <h5 className="days-count">2</h5>
                <span className="border-top">Days</span>
              </div>
              <div className="rounded small-calander text-center p-1">
                <h5 className="days-count">10</h5>
                <span className="border-top">HRS</span>
              </div>
              <div className="rounded small-calander text-center p-1">
                <h5 className="days-count">30</h5>
                <span className="border-top">MIN</span>
              </div>
              <div className="rounded small-calander text-center p-1">
                <h5 className="days-count">35</h5>
                <span className="border-top">SEC</span>
              </div>
            </div>
            <h5 className="w-100 text-center height-fitcontant">
              Fall Flash Sale
            </h5>
            <h4 className="w-100 text-center text-warning">22% off Sitewide</h4>
            <div className="d-flex height-fitcontant w-100 justify-content-space-evenly">
              <div className="w-50 d-flex height-fitcontant p-2 copy-side justify-content-between">
                <p className="mb-0">FLASH</p>
                <img src={copy} alt="copy" className="copy-icon" />
              </div>
              <button type="button" class="btn shop-now-btn">
                Shop now
              </button>
            </div>
          </div>
          <div className="w-100 d-flex carosal-bottum-part">
            <div className="sameday-shiping w-33 d-flex align-items-center">
              <h4 className="p-2 h4-heading">Same Day Shipping</h4>
              <span>on selected products</span>
            </div>
            <div className="sameday-shiping w-33 d-flex align-items-center">
              <h4 className="p-2 h4-heading">Same Day Shipping</h4>
              <span>on selected products</span>
            </div>
            <div className="sameday-shiping w-33 d-flex align-items-center">
              <h4 className="p-2 h4-heading">Same Day Shipping</h4>
              <span>on selected products</span>
            </div>
          </div>
          <h4 className="text-center mx-auto mt-4 mb-4">Most Loved Products</h4>
          <SliderCard />
          <h2 className="p-4 mx-auto">
            Offering Custom Banners and Signs For Business/Home Needs
          </h2>
          <div className="select-product-box w-100 d-flex justify-content-center align-items-center p-4 flex-wrap">
            <h5 className="d-inline m-2">Select Your Product</h5>
            <Form.Select
              aria-label="Default select example"
              className="d-inline w-15 m-2"
            >
              <option>Banners</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Select
              aria-label="Default select example"
              className="d-inline w-15 m-2"
            >
              <option>Will Banner</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <h6 className="w-100 text-center m-5">
              Found <b>79 Banners</b> for your selection
            </h6>
            <VerticalImgCardSlider />
            <Button variant="outline-primary">View All</Button>
          </div>
          <div className="w-100 border rounded my-5">
            <div className=" w-75 d-flex justify-content-between mx-auto py-3 px-2 ">
              <h3 className="w-25">Ways to get the Right Print</h3>
              <div className="d-flex align-item-center">
                <img
                  src={designPng}
                  alt="designPng"
                  className="ways-png-width"
                />
                <div className="p-2">
                  <span className="font-weight-bold d-block">
                    Design Template
                  </span>
                  <p className="mb-0 d-inline">Professionally Designed</p>
                </div>
              </div>
              <div className="d-flex align-item-center">
                <img
                  src={uploadPng}
                  alt="uploadPng"
                  className="ways-png-width"
                />
                <div className="p-2">
                  <span className="font-weight-bold d-block">
                  Upload Artwork
                  </span>
                  <p className="mb-0 d-inline">Perfect Print</p>
                </div>
              </div>
              <div className="d-flex align-item-center">
                <img
                  src={hirePng}
                  alt="hirePng"
                  className="ways-png-width"
                />
                <div className="p-2">
                  <span className="font-weight-bold d-block">
                  Hire a Designer
                  </span>
                  <p className="mb-0 d-inline">Starts <b> @ $9.99</b></p>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-center w-100 mt-3">Our Best Sellers</h3>
          <span className="text-center w-100 sub-gray-text">Boost Sales with Top-Charting Categories</span>
          <div className="my-5 d-flex flex-wrap justify-content-around">
            {arrayOfTen.map((i)=><ProductBox />)}
          </div>
          <div className="w-100 d-flex justify-content-around poster-box my-4">
            <img src={poster1} alt="poster" className="w-49 rounded overflow-hidden" />
            <img src={poster2} alt="poster" className="w-49 rounded overflow-hidden" />
          </div>
          <h3 className="text-center w-100 mt-3">Customer Picks</h3>
          <span className="text-center w-100 sub-gray-text">Explore Our Most Popular Products</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
