import React from "react";
import Header from "../components/header/Header";
import { Button, Container } from "react-bootstrap";
import badgeIcon from "../assets/badge black.png";
import PriceIcon from "../assets/best-price.png";
import deliveryIcon from "../assets/delivery.png";
import colorPallateIcon from "../assets/color-palette.png";
import SecurityBudgeFooter from "../components/SecurityBudgeFooter";
import QualityBar from "../components/QualityBar/QualityBar";

const SignUPPage = () => {
  return (
    <div>
      <Header upperLineNone={true} searchNone={true} categoryNone={true} />
      <div className="container">
        <QualityBar />
      </div>
      <Container>
        <h2 className="text-center pt-3 mt-2 mt-md-5 heading-color">
          Create my account
        </h2>
        <p className="black-color text-center f-size-14 my-2 sub-gray-text">
          Go on and fill up the form. Creating an account helps us know you
          better, and makes both our lives easier!
        </p>
      </Container>
      <Container className="d-flex col-12 col-md-6 justify-content-center mb-5">
        <div className="col-12 col-lg-10 col-xl-8 text-left">
          <div className="form-group col-md-12 my-4 px-0">
            <label for="inputEmail4" className="sub-gray-text">
              Email Address<a href="sign-up">*</a>
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="form-row mt-3">
            <div className="form-group col-md-6">
              <label for="inputEmail4" className="sub-gray-text">
                First Name*
              </label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputEmail4" className="sub-gray-text">
                Last Name*
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="form-group col-md-12 my-4 px-0">
            <label for="inputEmail4" className="sub-gray-text">
              Company Name
            </label>
            <input type="text" className="form-control" id="Password" />
          </div>
          <div className="form-row mt-3">
            <div className="form-group col-md-6">
              <label for="inputEmail4" className="sub-gray-text">
                Counry Code*
              </label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>+91</option>
                <option>+1</option>
              </select>
            </div>
            <div className="form-group col-md-6">
              <label for="inputEmail4" className="sub-gray-text">
                Cell Phone Number*
              </label>
              <input type="text" className="form-control" id="inputPassword4" />
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label f-size-12" for="gridCheck">
                Yes, I want to receive marketing text messages, including Cart
                reminders, at the number provided.
              </label>
            </div>
          </div>
          <div className="form-group col-md-12 my-4 px-0">
            <label for="inputEmail4" className="sub-gray-text">
              Password<a href="sign-up">*</a>
            </label>
            <input type="Password" className="form-control" id="Password" />
          </div>
          <p className="text-left font-weight-bold f-size-14 mb-0">
            Password must meet the following requirements:
          </p>
          <p
            className="text-left f-size-12 sub-gray-text"
            style={{ display: "list-item", marginLeft: "15px" }}
          >
            Password must have at least 6 characters.
          </p>
          <p className="text-left f-size-14 sub-gray-text mb-0">
            By creating an account, you agree to
          </p>
          <p className="text-left f-size-14 sub-gray-text">
            our Terms and <a href="">Conditions</a> and{" "}
            <a href="#">Privacy Policy</a>.
          </p>
          <div className="w-100 text-center">
            <Button
              className="rounded-0 f-size-13 px-4 mx-auto my-3 w-100"
              variant="primary"
            >
              MAKE ME A PART OF BUZZ
            </Button>
            <p className="text-center f-size-14 sub-gray-text">
              Already have an account? <a href="login">Log In</a>{" "}
            </p>
          </div>
        </div>
      </Container>
      <SecurityBudgeFooter />
    </div>
  );
};

export default SignUPPage;
