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
import img1 from "../assets/redesign/img1.jpg";
import img2 from "../assets/redesign/img2.jpg";
import img3 from "../assets/redesign/img3.jpg";
import special_offer from "../assets/redesign/special_offer.png";
import {
  OnHBorderBtnCardSlider,
  SliderCard,
  VerticalImgCardSlider,
} from "../components/Slider/SliderCard";
import { Button, Form } from "react-bootstrap";
import { ProductBox, TipsSuggetionCard } from "../components/product-box";
import Footer from "../components/Footer";
import SubscribeSection from "../components/SecoundLast";
import { OrangeButton } from "../components/RightArrowBTN";
import {
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import ShippingIcon from "../assets/ShippingSvg";
import DroneIcon from "../assets/DroneIcon";
import ShoppingIcon from "../assets/ShoppingBag";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Link, useNavigate } from "react-router-dom";
import "../css/home.sass"

const HomePage = () => {
  const arrayOfTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const navigate = useNavigate();
  return (
    <div className="home-page-main-div">
      <Header />
      <div className="main-container">
        <div className="carosal-box d-flex flex-wrap mb-5">

          <div className="w-100 d-flex main-carousal-div">
            <Carousal />
            <div className="sider-of-carousal">
              <img src={special_offer} alt="special-offer" className="w-100 h-100" />
            </div>
          </div>

          <div className="w-cm carosal-bottum-part">
            <div className="w-100 d-flex justify-content-center fetures-section">
              <div className="sameday-shiping w-33 d-flex justify-content-center align-items-center">
                <ShippingIcon />
                <h4 className="py-4 h4-heading  mb-0">Same Day Shipping</h4>
                <span>on selected products</span>
              </div>
              <div className="sameday-shiping w-33 justify-content-center d-flex align-items-center">
                <DroneIcon />
                <h4 className="py-4 h4-heading mb-0">Same Day Shipping</h4>
                <span>on selected products</span>
              </div>
              <div className="sameday-shiping justify-content-center w-33 d-flex align-items-center">
                <ShoppingIcon />
                <h4 className="py-4 h4-heading mb-0">Same Day Shipping</h4>
                <span>on selected products</span>
              </div>
            </div>
          </div>

          {/* designed  */}
          <div className="w-cm bb_top_selling-main">
            <h3 className="all-titles text-center mx-auto my-4 w-cm">
              Top Selling Products
            </h3>
            <div className="bb_top_selling d-flex flex-wrap justify-content-center">
              <Link to="/">
                <div>
                  <img src={img1} alt="img1" />
                </div>
                <p>Best Sellers</p>
              </Link>
              <Link to="/">
                <div>
                  <img src={img2} alt="img1" />
                </div>
                <p>Best Sellers</p>
              </Link>
              <Link to="/">
                <div>
                  <img src={img3} alt="img1" />
                </div>
                <p>Best Sellers</p>
              </Link>
              <Link to="/">
                <div>
                  <img src={img3} alt="img1" />
                </div>
                <p>Best Sellers</p>
              </Link>
              <Link to="/">
                <div>
                  <img src={img2} alt="img1" />
                </div>
                <p>Best Sellers</p>
              </Link>
              <Link to="/">
                <div>
                  <img src={img1} alt="img1" />
                </div>
                <p>Best Sellers</p>
              </Link>
            </div>

          </div>

          {/* designed  */}
          <div className="w-100 py-5" style={{ backgroundColor: "#ef28001a" }}>
            <h3 className="all-titles text-center mx-auto mb-4 w-cm">
              Most Loved Products
            </h3>
            <SliderCard />
          </div>

          {/* designed  */}
          <div className="w-100 select-product-box py-5">
            <div className="w-cm d-flex justify-content-between align-items-center">
              <h3
                className="all-titles px-4 offer-title"
                style={{ fontSize: "29px" }}
              >
                Offering Custom Banners and Signs For Business/Home Needs
              </h3>
              <Button
                variant="outline-primary"
                style={{ padding: "10px 20px" }}
                className=" bg-orange border-0 text-light shop-now-btn"
              >
                View All
              </Button>
            </div>
            <div className="w-cm w-100 d-flex justify-content-center align-items-center px-4 pt-4 flex-wrap">
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
              <h6 className="w-100 text-center mt-4 mb-0">
                Found <b>79 Banners</b> for your selection
              </h6>
              <VerticalImgCardSlider />

            </div>
          </div>

          {/* designed  */}
          <div className="w-100 border rounded-30 my-5 w-cm p-3 px-5 text-center">
            {/* <h3 className="">Ways to get the Right Print</h3>s */}
            <div className="d-flex justify-content-between mx-auto py-3 px-2 way-to-get-section">
              <div className="d-flex align-item-center design-template-sec">
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
              <div className="d-flex align-item-center design-template-sec">
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
              <div className="d-flex align-item-center design-template-sec">
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

          {/* designed  */}
          <div className="w-100 text-center">
            <h3 className="text-center all-titles w-100">Our Best Sellers</h3>
            <span className="text-center w-100 sub-gray-text">
              Boost Sales with Top-Charting Categories
            </span>
          </div>
          <div className="my-5 d-flex flex-wrap justify-content-around w-cm">
            {arrayOfTen.map((i) => (
              <ProductBox />
            ))}
          </div>

          <div className="w-100 d-flex justify-content-around poster-box my-5 w-cm flex-wrap">
            <div className="col-6 px-3">
              <div className="img-container">
                <img
                  src={poster1}
                  alt="poster"
                  className="rounded-30 overflow-hidden cursor-pointer mb-2"
                  onClick={() => navigate("/stands-and-displays")}
                />
              </div>
            </div>
            <div className="col-6 px-3">
              <div className="img-container">
                <img
                  src={poster2}
                  alt="poster"
                  className="mh-100 rounded-30 overflow-hidden cursor-pointer"
                  onClick={() => navigate("/stands-and-displays")}
                />
              </div>
            </div>
          </div>


          <h3 className="all-titles text-center w-100 mt-3 w-cm">
            Customer Picks
          </h3>
          <span className="text-center w-100 sub-gray-text">
            Explore Our Most Popular Products
          </span>
          <div className="w-cm">
            <OnHBorderBtnCardSlider customerPicks="banner" />
            <div className="w-100 text-right p-4">
              <OrangeButton text="View All" />
            </div>
          </div>
          <div
            className="w-100 text-center py-2 "
            style={{ background: "rgb(247, 247, 255)" }}
          >
            <h3 className="all-titles text-center w-100 pt-4">New Arrivals</h3>
            <span className="text-center w-100 sub-gray-text">
              Check Out Our Latest Products
            </span>
            <div className="w-cm">
              <OnHBorderBtnCardSlider secound={true} />
            </div>
          </div>
          <container className="d-flex w-100 flex-wrap justify-content-around my-5 w-cm banner-poster-box">
            <div
              className="w-48 d-flex align-items-center justify-content-between p-1830 rounded my-2 banner-poster"
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
                <Button variant="dark" className="my-3 height-fitcontant">
                  Explore More
                </Button>
              </div>
              <div className="poster-side2">
                <img src={item} alt="poster" className="w-90" />
              </div>
            </div>
            <div
              className="height-fitcontant w-48 d-flex align-items-center justify-content-between p-1830 rounded my-2 banner-poster"
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
                <Button variant="dark" className="my-3 height-fitcontant">
                  Explore More
                </Button>
              </div>
              <div className="poster-side2">
                <img src={item1} alt="poster" className="w-90" />
              </div>
            </div>
            <div
              className="w-48 height-fitcontant d-flex align-items-center justify-content-between p-1830 rounded my-2 banner-poster"
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
                <Button variant="dark" className="my-3 height-fitcontant">
                  Explore More
                </Button>
              </div>
            </div>
            <div
              className="w-48 height-fitcontant d-flex align-items-center jutent-between p-1830 rounded my-2 banner-poster"
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
                <Button variant="dark" className="my-3 height-fitcontant">
                  Explore More
                </Button>
              </div>
            </div>
          </container>
          <container className="w-100 d-flex flex-wrap justify-content-around my-3 w-cm px-2 ">
            <div
              className="w-49 rounded d-flex flex-wrap review-container"
              style={{ backgroundColor: "#fffdec" }}
            >
              <h3 className="text-center w-100 mt-5 font-weight-bold d-block">
                Reviews & Ratings
              </h3>
              <div className="d-flex flex-wrap justify-content-around w-90 mx-auto my-5">
                <div
                  className="d-flex justify-content-center align-items-center p-2 mw-100 review-main-box"
                  style={{ backgroundColor: "#fff2cd", borderRadius: "55px" }}
                >
                  <img
                    src={reviewLogo}
                    alt="reviews"
                    className="height-fitcontant review-mr-60"
                    style={{ width: "80px" }}
                  />
                  <div className="w-33 review-mr-60" >
                    <strong className="f-size-20 w-100 d-block">Banners</strong>
                    <span className="">Customer Reviews</span>
                  </div>
                  <div className="review-rating-star" style={{ width: "240px" }}>
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
                <div className="w-100 d-flex mt-5 justify-content-center customers-review-box">
                  <div className="w-30 d-flex">
                    <div style={{ width: "65px", height: "65px" }}>
                      <CircularProgressbarWithChildren
                        value={66}
                        styles={{
                          trail: {
                            // Trail color
                            stroke: "transparent",
                          },
                          path: {
                            // Path color
                            stroke: `#5a9d79`,
                          },
                        }}
                      >
                        <div
                          style={{
                            fontSize: 16,
                            marginTop: 0,
                            color: "#5a9d79",
                          }}
                        >
                          <strong>66%</strong>
                        </div>
                      </CircularProgressbarWithChildren>
                    </div>
                    <h5 className="mb-0 d-inline fw-bold ml-2 review-box-title">
                      Customers Support
                    </h5>
                  </div>
                  <div className="w-30 d-flex">
                    <div style={{ width: "65px", height: "65px" }}>
                      <CircularProgressbarWithChildren
                        value={66}
                        styles={{
                          trail: {
                            // Trail color
                            stroke: "transparent",
                          },
                          path: {
                            // Path color
                            stroke: `#5a9d79`,
                          },
                        }}
                      >
                        <div
                          style={{
                            fontSize: 16,
                            marginTop: 0,
                            color: "#5a9d79",
                          }}
                        >
                          <strong>66%</strong>
                        </div>
                      </CircularProgressbarWithChildren>
                    </div>
                    <h5 className="mb-0 d-inline fw-bold ml-2 review-box-title">
                      Customers Review
                    </h5>
                  </div>
                  <div className="w-30 d-flex">
                    <div style={{ width: "65px", height: "65px" }}>
                      <CircularProgressbarWithChildren
                        value={66}
                        styles={{
                          trail: {
                            // Trail color
                            stroke: "transparent",
                          },
                          path: {
                            // Path color
                            stroke: `#5a9d79`,
                          },
                        }}
                      >
                        <div
                          style={{
                            fontSize: 16,
                            marginTop: 0,
                            color: "#5a9d79",
                          }}
                        >
                          <strong>66%</strong>
                        </div>
                      </CircularProgressbarWithChildren>
                    </div>
                    <h5 className="mb-0 d-inline fw-bold ml-2 review-box-title">
                      Repeat Customers
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-49 rounded review-container"
              style={{ backgroundColor: "#f2f2f2" }}
            >
              <h3 className="text-center w-100 mt-5 font-weight-bold">
                Our customers speak for us!
              </h3>
              <div className="w-100">
                <Swiper
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <p className="mb-0 w-75 mx-auto text-center mt-4">
                      I comeback to those who provide outstanding quality and
                      this is one of those companies that go above and beyond
                      for you. Easy designing and the codes they provide for you
                      to save even more is awesome. I'll definitely be coming
                      back again! Thanks for being great to me!
                    </p>
                    <div className="d-flex height-fitcontant w-45 mx-auto my-5 justify-content-center">
                      <img
                        src={reviewLogo}
                        alt="reviews"
                        className="mr-3"
                        style={{ width: "55px" }}
                      />
                      <div className="">
                        <strong className="f-size-20 w-100 d-block ml-1 text-left">
                          Banners
                        </strong>
                        <div className="d-flex align-items-center text-left justify-content-start w-50 d-block">
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <span className="ms-1 mr-2">5.0</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <p className="mb-0 w-75 mx-auto text-center mt-4">
                      I comeback to those who provide outstanding quality and
                      this is one of those companies that go above and beyond
                      for you. Easy designing and the codes they provide for you
                      to save even more is awesome. I'll definitely be coming
                      back again! Thanks for being great to me!
                    </p>
                    <div className="d-flex height-fitcontant w-45 mx-auto my-5 justify-content-center">
                      <img
                        src={reviewLogo}
                        alt="reviews"
                        className="mr-3"
                        style={{ width: "55px" }}
                      />
                      <div className="">
                        <strong className="f-size-20 w-100 d-block ml-1 text-left">
                          Banners
                        </strong>
                        <div className="d-flex align-items-center text-left justify-content-start w-50 d-block">
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <span className="ms-1 mr-2">5.0</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <p className="mb-0 w-75 mx-auto text-center mt-4">
                      I comeback to those who provide outstanding quality and
                      this is one of those companies that go above and beyond
                      for you. Easy designing and the codes they provide for you
                      to save even more is awesome. I'll definitely be coming
                      back again! Thanks for being great to me!
                    </p>
                    <div className="d-flex height-fitcontant w-45 mx-auto my-5 justify-content-center">
                      <img
                        src={reviewLogo}
                        alt="reviews"
                        className="mr-3"
                        style={{ width: "55px" }}
                      />
                      <div className="">
                        <strong className="f-size-20 w-100 d-block ml-1 text-left">
                          Banners
                        </strong>
                        <div className="d-flex align-items-center text-left justify-content-start w-50 d-block">
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <img src={star} alt="star" />
                          <span className="ms-1 mr-2">5.0</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </container>
          <container className="w-100 my-3 text-right w-cm">
            <h3 className="all-titles text-center w-100 mt-3 mx-auto">
              Check out our Blog For Printing Tips & Suggestions
            </h3>
            <div className="w-100 d-flex my-4 justify-content-around ">
              <TipsSuggetionCard width={window.innerWidth > 800 ? "w-24" : window.innerWidth < 600 ? "w-80" : "w-30"} />
              {window.innerWidth > 600 ? <TipsSuggetionCard width={window.innerWidth > 800 ? "w-24" : "w-30"} /> : ""}
              {window.innerWidth > 600 ? <TipsSuggetionCard width={window.innerWidth > 800 ? "w-24" : "w-30"} /> : ""}
              {window.innerWidth > 800 ? <TipsSuggetionCard width="w-24" /> : ""}
            </div>
            <div className="w-100 text-right p-4">
              <OrangeButton text="View All" />
            </div>
          </container>
          <container className="w-100 text-left w-cm">
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
          <container className="w-100 text-center d-flex justify-content-around p-3 w-cm flex-wrap">
            <div className="w-33 my-3 px-3 quality-box">
              <img
                src={priceTag}
                alt="alt"
                className=""
                style={{ width: "55px" }}
              />
              <span className="f-size-20 font-weight-bold pl-3">
                Best Price
              </span>
              <p className="pt-3">
                BannerBuzz offers the industry’s best prices while using only
                the highest
              </p>
            </div>
            <div className="w-33 my-3 px-3 design-center-div quality-box">
              <img
                src={designPng}
                alt="alt"
                className=""
                style={{ width: "55px" }}
              />
              <span className="f-size-20 font-weight-bold pl-3">
                Free Design Proof
              </span>
              <p className="pt-3">
                Our industry-leading designers provide free proofs so you can be
                sure
              </p>
            </div>
            <div className="w-33 px-3 my-3 quality-box">
              <img
                src={badge}
                alt="alt"
                className=""
                style={{ width: "55px" }}
              />
              <span className="f-size-20 font-weight-bold pl-3">
                Best Quality
              </span>
              <p className="pt-3">
                If you’re not satisfied, we’re not satisfied. We’ll reprint or
                refund your order - guaranteed
              </p>
            </div>
          </container>
          <SubscribeSection />
          <Footer />
        </div>
      </div>
    </div >
  );
};

export default HomePage;
