import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { OnlyBreadCrum } from "../components/breadcrum/breadcrum";
import ThumbsSlider from "../components/ThumbsSlider";
import star from '../assets/star.svg'
import halfstar from '../assets/half-start.svg'

const PhotoMegnets = () => {
  const arrayOfTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <Header />
      <div className="">
        <OnlyBreadCrum />
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <ThumbsSlider />
            </div>
            <div className="col-5">
              <h1>Photo Magnets</h1>
              <div className="d-flex flex-wrap align-items-center">
                <div className="me-4 d-flex align-items-center">
                  <img src={star} alt='star' />
                  <img src={star} alt='star' />
                  <img src={star} alt='star' />
                  <img src={star} alt='star' />
                  <img src={halfstar} alt='star' />
                </div>
                <div>
                  <span className="text-primary">3279 Reviews</span> <span> | </span>
                  <span className="text-primary"> Product Specifications </span> <span> | </span>
                  <span className="text-primary"> Ask a Question </span><span> | </span>
                  <span>SKU : BBPTMT01</span>
                </div>
              </div>
              <div className="my-4 fancyCheck d-flex py-3" style={{ backgroundColor: '#f5f5f5' }}>
                <div className="col-6">
                  <ul>
                    <li>Flexible magnetic sheet makes the photo magnets durable.</li>
                    <li>High-quality UV printing provides a bright finish.</li>
                    <li>Available in a varied range of sizes to meet your needs.</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>Lightweight, the metal photo magnets are portable.</li>
                    <li>Installation is quick and simple, without the need for tools.</li>
                  </ul>
                </div>
              </div>
              <div className="p-2" style={{ backgroundColor: '#fff2d3' }}>
                <span className="text-bold">Want it by Friday, Oct. 27?</span> Order Today and choose <span className="text-bold">'Priority'</span> shipping at checkout.

              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default PhotoMegnets;
