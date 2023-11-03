import React from "react";
import banner from "../assets/charitybanner.png";
import step2 from "../assets/step-section2.png";
import step1 from "../assets/step-section1.png";
import step3 from "../assets/step-section3.png";
import step4 from "../assets/step-section4.png";
import rightArrow from "../assets/right-arrow.png";
import Header from "../components/header/Header";
import { Button, Container, Form } from "react-bootstrap";
import { OnlyBreadCrum } from "../components/breadcrum/breadcrum";
import SubscribeSection from "../components/SecoundLast";
import Footer from "../components/Footer";

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
        <Container className="d-flex flex-wrap justify-content-around my-5">
          <div className="col-12 col-md-4 col-lg-2 text-center">
            <img src={step1} alt="step-1" className="mw-100" />
            <p className="black-color text-center f-size-14 my-2 sub-gray-text">
              Fill up the form below and we’ll be in touch before you know.
            </p>
          </div>
          <img src={rightArrow} alt="step-2" className="rightArrow mt-65 col-2 col-lg-1" />
          <div className="col-12 col-md-4 col-lg-2 text-center">
            <img src={step2} alt="step-1" className="mw-100" />
            <p className="black-color text-center f-size-14 my-2 sub-gray-text">
              Add a few lines about your experience with us on your website, so
              that more organizations can get in touch with us for this service.
            </p>
          </div>
          <img src={rightArrow} alt="step-2" className="rightArrow mt-65 d-block d-md-none d-lg-block col-2 col-lg-1" />
          <div className="col-12 col-md-4 col-lg-2 text-center">
            <img src={step3} alt="step-1" className="mw-100" />
            <p className="black-color text-center f-size-14 my-2 sub-gray-text">
              In four easy steps, your organization can avail a free banner,
              that we are sure can be of help on various occasions.
            </p>
          </div>
          <img src={rightArrow} alt="step-2" className="rightArrow mt-65 col-2 col-lg-1" />
          <div className="col-12 col-md-4 col-lg-2 text-center">
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
        <Container
          className="d-flex p-4 align-item-center flex-wrap justify-content-between my-5 rounded"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <div className="d-flex align-item-center flex-wrap">
            <h4 className="text-center heading-color d-inline height-fitcontant me-2">
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
          <p className="primary-color text-right mb-0 pr-3 mt-2 mt-sm-0">
            * Required Fields *
          </p>
        </Container>
        <Container className="d-flex justify-content-between flex-wrap">
          <div className="col-12 col-md-6">
            <form>
              <h5 className="bb-grey py-4 mb-2">Your Details</h5>
              <div className="form-row mt-3">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">First Name*</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Last Name*</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Email Address*</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Telephone Number*</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
              </div>
              <h5 className="bb-grey py-4 mb-2">Shipping Address</h5>
              <div className="form-group mt-3">
                <label for="inputAddress">Address 1*</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div className="form-group">
                <label for="inputAddress2">Address 2*</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputCity">Post Code*</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputCity">City*</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputState">State*</label>
                  <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label for="inputState">Country*</label>
                  <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="col-12 col-md-6">
            <form>
              <h5 className="bb-grey py-4 mb-2">
                Charity or Non-Profit Details
              </h5>
              <div className="form-row mt-3">
                <div className="form-group col-md-12">
                  <label for="inputEmail4">Charity or Non-Profit Name*</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPassword4">Website*</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Registration Number</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
              </div>
              <p className="my-3 f-size-14">
                Registration Certificate<a href="#">*</a>
              </p>
              <Button variant="outline-primary" type="submit" className="px-4">
                SELECT FILES
              </Button>
            </form>
          </div>
          <div className="col-12">
            <p className="my-3 f-size-14">
              By clicking Apply now button, I agree to the{" "}
              <a href="#">Terms & Conditions</a>
            </p>
            <button type="submit" className="btn btn-primary px-4 mb-5">
              Apply Now
            </button>
          </div>
        </Container>
      </div>
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default CharityBannerPage;
