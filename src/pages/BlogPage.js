import React from "react";
import Header from "../components/header/Header";
import twitterIcon from "../assets/twitter-icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import printrestIcon from "../assets/pinterest-icon.png";
import instaIcon from "../assets/instagram-icon.png";
import youtubeIcon from "../assets/youtube-icon.png";
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
import { Button, Container, Form, Pagination } from "react-bootstrap";
import {
  AboutBannerCard,
  NewsLatterBox,
  ProductBox,
  TipsSuggetionCard,
} from "../components/product-box";
import Footer from "../components/Footer";
import { OnlyBreadCrum } from "../components/breadcrum/breadcrum";
import ThumbsSlider from "../components/ThumbsSlider";
import SubscribeSection from "../components/SecoundLast";

const BlogPage = () => {
  const arrayOfTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div>
      <Header upperLineNone={true} />
      <Container className="my-5 w-1100 d-flex">
        <div className="w-70 d-flex justify-content-between flex-wrap">
          {arrayOfTen?.map((i) => {
            return <TipsSuggetionCard width="w-49 my-2" />;
          })}
          <Pagination className="mx-auto my-4">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
        <div className="w-30">
          <div className="py-1 ">
            <h5 className="py-1 mx-4 light-grey bb-grey mb-4">CATEGORIES</h5>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey">Banners (333)</p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey">Clothing (6)</p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey">Banners (333)</p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey">Banners (333)</p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey">Clothing (6)</p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey">Banners (333)</p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey">Banners (333)</p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey">Clothing (6)</p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey">Banners (333)</p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey">Banners (333)</p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey">Clothing (6)</p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey">Banners (333)</p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey">Banners (333)</p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey">Clothing (6)</p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey">Banners (333)</p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey">Banners (333)</p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey">Clothing (6)</p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey">Banners (333)</p>
          </div>
          <div className="py-1 mt-5">
            <h5 className="py-1 mx-4 light-grey bb-grey mb-4">RELATED POSTS</h5>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey f-size-12">
              Small Business Solutions: Top 6 Ways to Make St. Patrick’s Day
              Eventful to Increase Visitors to Your Business
            </p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey f-size-12">
              Small Business Solutions: 7 Steps to Create Valentine’s Day
              Promotions Your Customers Will Love & Ad
            </p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey f-size-12">
              7 Reasons Why You Should Invest in Window Graphics
            </p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey f-size-12">
              Halloween Inspired Advertising Solutions
            </p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey f-size-12">
              Halloween Inspired Advertising Solutions
            </p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey f-size-12">
              Small Business Solutions : What you can do to attract the last
              minute Valentine’s Day shoppers this season
            </p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey f-size-12">
              Halloween Inspired Advertising Solutions
            </p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey f-size-12">
              Small Business Solutions: Top 6 Ways to Make St. Patrick’s Day
              Eventful to Increase Visitors to Your Business
            </p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey f-size-12">
              Small Business Solutions: 7 Steps to Create Valentine’s Day
              Promotions Your Customers Will Love & Ad
            </p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey f-size-12">
              7 Reasons Why You Should Invest in Window Graphics
            </p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey f-size-12">
              Halloween Inspired Advertising Solutions
            </p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey f-size-12">
              Halloween Inspired Advertising Solutions
            </p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey f-size-12">
              Small Business Solutions : What you can do to attract the last
              minute Valentine’s Day shoppers this season
            </p>
            <p className="py-1 mx-4 mb-1 light-grey bb-grey f-size-12">
              Halloween Inspired Advertising Solutions
            </p>
          </div>
          <AboutBannerCard />
          <div className="py-1 mt-5">
            <h5 className="py-1 mx-4 light-grey bb-grey mb-4">
              CONNECT & FOLLOW
            </h5>
            <div className="social-icons px-3 mx-auto">
              <img className="p-2" src={twitterIcon} />
              <img className="p-2" src={facebookIcon} />
              <img className="p-2" src={printrestIcon} />
              <img className="p-2" src={instaIcon} />
              <img className="p-2" src={youtubeIcon} />
            </div>
          </div>
          <NewsLatterBox />
          <div className="py-3 mt-5 mx-4">
            <h5 className="py-1 light-grey bb-grey mb-4">ARCHIVES</h5>
            <Form.Select aria-label="Default select example">
              <option>select mounth</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
        </div>
      </Container>
      <SubscribeSection/>
      <Footer />
    </div>
  );
};

export default BlogPage;
