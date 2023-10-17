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
import { Button, Form } from "react-bootstrap";
import { ProductBox, TipsSuggetionCard } from "../components/product-box";
import Footer from "../components/Footer";

const HomePage = () => {
  const arrayOfTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
                <img src={hirePng} alt="hirePng" className="ways-png-width" />
                <div className="p-2">
                  <span className="font-weight-bold d-block">
                    Hire a Designer
                  </span>
                  <p className="mb-0 d-inline">
                    Starts <b> @ $9.99</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-center w-100 mt-3">Our Best Sellers</h3>
          <span className="text-center w-100 sub-gray-text">
            Boost Sales with Top-Charting Categories
          </span>
          <div className="my-5 d-flex flex-wrap justify-content-around">
            {arrayOfTen.map((i) => (
              <ProductBox />
            ))}
          </div>
          <div className="w-100 d-flex justify-content-around poster-box my-4">
            <img
              src={poster1}
              alt="poster"
              className="w-49 rounded overflow-hidden"
            />
            <img
              src={poster2}
              alt="poster"
              className="w-49 rounded overflow-hidden"
            />
          </div>
          <h3 className="text-center w-100 mt-3">Customer Picks</h3>
          <span className="text-center w-100 sub-gray-text">
            Explore Our Most Popular Products
          </span>
          <OnHBorderBtnCardSlider />
          <Button variant="outline-primary mx-auto mb-3">View All</Button>
          <div
            className="w-100 text-center py-2"
            style={{ background: "rgb(247, 247, 255)" }}
          >
            <h3 className="text-center w-100 mt-3">New Arrivals</h3>
            <span className="text-center w-100 sub-gray-text">
              Check Out Our Latest Products
            </span>
            <OnHBorderBtnCardSlider secound={true} />
          </div>
          <container className="d-flex w-100 flex-wrap justify-content-around my-5">
            <div
              className="w-48 d-flex align-items-center justify-content-between p-1830 rounded my-2"
              style={{
                border: "1px solid rgb(238, 238, 238)",
                backgroundImage:
                  "linear-gradient(to right bottom, #fef9dc, #f2fce3, #eafdec, #e6fef5, #e7fdfb, #e5fdfc, #e3fdfc, #e1fdfd, #dbfef6, #daffec, #dffedf, #eafbd1)",
              }}
            >
              <div className="poster-side1 d-flex flex-wrap">
                <strong className="f-size-28 w-100">Banners</strong>
                <p className="f-size-28 mb-0 w-100">
                  Starting at <strong>$2.25</strong>
                </p>
                <Button
                  variant="dark"
                  className="my-3 height-fitcontant"
                >
                  Explore More
                </Button>
              </div>
              <div className="poster-side2">
                <img src={item} alt="poster" className="w-90" />
              </div>
            </div>
            <div
              className="w-48 d-flex align-items-center justify-content-between p-1830 rounded my-2"
              style={{
                border: "1px solid rgb(238, 238, 238)",
                backgroundImage:
                  "linear-gradient(to right bottom, #fef9dc, #f2fce3, #eafdec, #e6fef5, #e7fdfb, #e5fdfc, #e3fdfc, #e1fdfd, #dbfef6, #daffec, #dffedf, #eafbd1)",
              }}
            >
              <div className="poster-side1 d-flex flex-wrap">
                <strong className="f-size-28 w-100">Banners</strong>
                <p className="f-size-28 mb-0 w-100">
                  Starting at <strong>$2.25</strong>
                </p>
                <Button
                  variant="dark"
                  className="my-3 height-fitcontant"
                >
                  Explore More
                </Button>
              </div>
              <div className="poster-side2">
                <img src={item1} alt="poster" className="w-90" />
              </div>
            </div>
            <div
              className="w-48 d-flex align-items-center justify-content-between p-1830 rounded my-2"
              style={{
                border: "1px solid rgb(238, 238, 238)",
                backgroundImage:
                  "linear-gradient(to right bottom, #fef9dc, #f2fce3, #eafdec, #e6fef5, #e7fdfb, #e5fdfc, #e3fdfc, #e1fdfd, #dbfef6, #daffec, #dffedf, #eafbd1)",
              }}
            >
              <div className="poster-side2">
                <img src={item1} alt="poster" className="w-90" />
              </div>
              <div className="poster-side1 d-flex flex-wrap text-right justify-content-end">
                <strong className="f-size-28 w-100">Banners</strong>
                <p className="f-size-28 mb-0 w-100">
                  Starting at <strong>$2.25</strong>
                </p>
                <Button
                  variant="dark"
                  className="my-3 height-fitcontant"
                >
                  Explore More
                </Button>
              </div>
            </div>
            <divstify-con
              className="w-48 d-flex align-items-center jutent-between p-1830 rounded my-2"
              style={{
                border: "1px solid rgb(238, 238, 238)",
                backgroundImage:
                  "linear-gradient(to right bottom, #fef9dc, #f2fce3, #eafdec, #e6fef5, #e7fdfb, #e5fdfc, #e3fdfc, #e1fdfd, #dbfef6, #daffec, #dffedf, #eafbd1)",
              }}
            >
              <div className="poster-side2">
                <img src={item} alt="poster" className="w-90" />
              </div>
              <div className="poster-side1 d-flex flex-wrap justify-content-end text-right">
                <strong className="f-size-28 w-100">Banners</strong>
                <p className="f-size-28 mb-0 w-100">
                  Starting at <strong>$2.25</strong>
                </p>
                <Button
                  variant="dark"
                  className="my-3 height-fitcontant"
                >
                  Explore More
                </Button>
              </div>
            </divstify-con>
          </container>
          <container className="w-100 d-flex justify-content-around my-3">
            <div
              className="w-49 rounded d-flex flex-wrap"
              style={{ backgroundColor: "#fffdec" }}
            >
              <h3 className="text-center w-100 mt-3 font-weight-light d-block">
                Reviews & Ratings
              </h3>
              <div className="d-flex justify-content-around w-90 mx-auto my-5">
                <img
                  src={reviewLogo}
                  alt="reviews"
                  className="height-fitcontant"
                  style={{ width: "65px"}}
                />
                <div className="w-33">
                  <strong className="f-size-20 w-100 d-block">Banners</strong>
                  <span className="">Customer Reviews</span>
                </div>
                <div className="w-33">
                  <div className="d-flex align-items-center justify-content-center w-50 d-block">
                    <span className="ms-1">
                      <strong className="f-size-20 w-100">4.5</strong>
                    </span>
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={halfstar} alt="star" />
                  </div>
                  <span className="">Customer Reviews</span>
                </div>
              </div>
            </div>
            <div
              className="w-49 rounded"
              style={{ backgroundColor: "#f2f2f2" }}
            >
              <h3 className="text-center w-100 mt-3 font-weight-light">
                Our customers speak for us!
              </h3>
              <p className="mb-0 w-75 mx-auto text-center mt-4">
                I comeback to those who provide outstanding quality and this is
                one of those companies that go above and beyond for you. Easy
                designing and the codes they provide for you to save even more
                is awesome. I'll definitely be coming back again! Thanks for
                being great to me!
              </p>
              <div
                className="d-flex justify-content-around height-fitcontant w-45 mx-auto my-4"
              >
                <img
                  src={reviewLogo}
                  alt="reviews"
                  className=""
                  style={{ width: "55px" }}
                />
                <div className="w-75">
                  <strong className="f-size-20 w-100 d-block ml-1">
                    Banners
                  </strong>
                  <div className="d-flex align-items-center justify-content-start w-50 d-block">
                    <span className="ms-1 mr-2">5.0</span>
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                </div>
              </div>
            </div>
          </container>
          <container className="w-100 my-3 text-center">
            <h3 className="text-center w-100 mt-3 mx-auto">
              Check out our Blog For Printing Tips & Suggestions
            </h3>
            <div className="w-100 d-flex my-4 justify-content-around">
              <TipsSuggetionCard />
              <TipsSuggetionCard />
              <TipsSuggetionCard />
              <TipsSuggetionCard />
            </div>
            <Button variant="outline-primary" className="mx-auto my-3">
              View All
            </Button>
          </container>
          <container className="w-100 text-left">
            <h5 className="pl-3 w-100 mt-3 f-size-20">
              Check out our Blog For Printing Tips & Suggestions
            </h5>
            <p className="pl-3 w-100">
              BannerBuzz is a leading e-commerce company that is dedicated to
              making your brand/business visible with quality printed signage
              solutions. We aspire to be the most customer-focused organization
              and are proud to be acknowledged every day by our customers for
              our customized products. Customers can buy and showcase their
              products in any event in a grandeur way and use the best marketing
              materials that aid in creatively promoting their brand. To name a
              few, customized banners are very helpful for directing customers
              in HoReCa (Hotel, Restaurant, Catering) establishments, as well as
              for greeting and directing patients and visitors in hospitals. You
              can customize our products as per your choice that resonates with
              the brand/event and get them delivered to your
            </p>
          </container>
          <container className="w-100 text-center d-flex justify-content-around p-3">
              <div className="w-33 my-3 px-3">
                <img src={priceTag} alt="alt" className="" style={{width:"55px"}}/>
                <span className="f-size-20 font-weight-bold pl-3">Best Price</span>
                <p className="pt-3">BannerBuzz offers the industry’s best prices while using only the highest</p>
              </div>
              <div className="w-33 my-3 px-3 design-center-div">
                <img src={designPng} alt="alt" className="" style={{width:"55px"}}/>
                <span className="f-size-20 font-weight-bold pl-3">Free Design Proof</span>
                <p className="pt-3">Our industry-leading designers provide free proofs so you can be sure</p>
              </div>
              <div className="w-33 px-3 my-3">
                <img src={badge} alt="alt" className="" style={{width:"55px"}}/>
                <span className="f-size-20 font-weight-bold pl-3">Best Quality</span>
                <p className="pt-3">If you’re not satisfied, we’re not satisfied. We’ll reprint or refund your order - guaranteed</p>
              </div>
          </container>
          <container className="w-100 text-center d-flex align-items-center justify-content-evenly p-3" style={{backgroundColor:"#4383b8",color:"white"}}>
            <p className="w-33">Subscribe to our newsletter and get 20% OFF on Your First Order + Free Shipping.</p>
            <Form.Control type="text" className="w-45 height-fitcontant" placeholder="Normal text" />
            <Button variant="light" className="height-fitcontant px-2">SUBSCRIBE</Button>
          </container>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
