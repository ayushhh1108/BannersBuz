import React from "react";
import banner from "../assets/charitybanner.png";
import step2 from "../assets/step-section2.png";
import step1 from "../assets/step-section1.png";
import step3 from "../assets/step-section3.png";
import step4 from "../assets/step-section4.png";
import rightArrow from "../assets/right-arrow.png";
import Header from "../components/header/Header";
import { Container, Form } from "react-bootstrap";
import { OnlyBreadCrum } from "../components/breadcrum/breadcrum";

const CharityBannerPage = () => {
  return (
    <div>
      <Header />
      <div className="w-100">
        <Container>
          <OnlyBreadCrum />
        </Container>
        <div style={{ backgroundColor: "#dcebf9" }}>
          <img
            src={banner}
            alt="slider"
            style={{ display: "inherit" }}
            className="mw-100 mx-auto"
          />
        </div>
        <h2 className="text-center pt-3 mt-5 heading-color">
          Claiming your free banner is as easy as this
        </h2>
        <p className="black-color text-center f-size-14 my-2 sub-gray-text">
          In four easy steps, your organization can avail a free banner, that we
          are sure can be of help on various occasions.
        </p>
        <Container className="d-flex justify-content-around my-5">
          <div className="w-20 text-center">
            <img src={step1} alt="step-1" className="mw-100" />
            <p className="black-color text-center f-size-14 my-2 sub-gray-text">
              Fill up the form below and we’ll be in touch before you know.
            </p>
          </div>
          <img src={rightArrow} alt="step-2" className="rightArrow my-auto" />
          <div className="w-20 text-center">
            <img src={step2} alt="step-1" className="mw-100 my-auto" />
            <p className="black-color text-center f-size-14 my-2 sub-gray-text">
              Add a few lines about your experience with us on your website, so
              that more organizations can get in touch with us for this service.
            </p>
          </div>
          <img src={rightArrow} alt="step-2" className="rightArrow my-auto" />
          <div className="w-20 text-center">
            <img src={step3} alt="step-1" className="mw-100" />
            <p className="black-color text-center f-size-14 my-2 sub-gray-text">
              In four easy steps, your organization can avail a free banner,
              that we are sure can be of help on various occasions.
            </p>
          </div>
          <img src={rightArrow} alt="step-2" className="rightArrow my-auto" />
          <div className="w-20 text-center">
            <img src={step4} alt="step-1" className="mw-100" />
            <p className="black-color text-center f-size-14 my-2 sub-gray-text">
              In four easy steps, your organization can avail a free banner,
              that we are sure can be of help on various occasions.
            </p>
          </div>
        </Container>
        <h2 className="text-center pt-3 mt-5 heading-color">
          It’s time to choose your ideal banner
        </h2>
        <p className="black-color text-center f-size-14 my-2 sub-gray-text">
          four easy steps, your organization can avail a free banner, that we
          are sure can be of help on various occasions.In
        </p>
        <Container className="d-flex p-4 align-item-center my-5 rounded" style={{backgroundColor:"#f5f5f5"}}>
          <div className="d-flex w-45 align-item-center">
            <h4 className="text-center heading-color d-inline height-fitcontant w-50">
              Select Banner Size
            </h4>
            <Form.Select
              aria-label="Default select example"
              className="w-fit-content height-fitcontant w-50"
            >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <p className="primary-color w-70 text-right mb-0 pr-3">* Required Fields *</p>
        </Container>
      </div>
    </div>
  );
};

export default CharityBannerPage;
