import React from "react";
import Header from "../components/header/Header";
import { Button, Container } from "react-bootstrap";
import badgeIcon from "../assets/badge black.png";
import PriceIcon from "../assets/best-price.png";
import deliveryIcon from "../assets/delivery.png";
import colorPallateIcon from "../assets/color-palette.png";
import facebookIcon from "../assets/facebook.png";
import googleIcon from "../assets/social.png";
import twitterIcon from "../assets/twitter-icon.png";
import SecurityBudgeFooter from "../components/SecurityBudgeFooter";

const LoginPage = () => {
  const arrayOfTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <div>
      <Header upperLineNone={true} searchNone={true} categoryNone={true} />
      <Container className="my-5 w-1100 d-flex">
        <div className="w-100 d-flex justify-content-between">
          <div className="w-fit-content light-grey">
            <img src={badgeIcon} alt="icons" className="mw-100 w-24px mr-2" />
            Quality Guarantee
          </div>
          <div className="w-fit-content light-grey">
            <img src={PriceIcon} alt="icons" className="mw-100 w-24px mr-2" />
            Best Prices
          </div>
          <div className="w-fit-content light-grey">
            <img
              src={deliveryIcon}
              alt="icons"
              className="mw-100 w-24px mr-2"
            />
            Free Shipping
          </div>
          <div className="w-fit-content light-grey">
            <img
              src={colorPallateIcon}
              alt="icons"
              className="mw-100 w-24px mr-2"
            />
            Free Design Proofs
          </div>
        </div>
      </Container>
      <Container>
        <h2 className="text-center pt-3 mt-5 heading-color">
          Log in to your account
        </h2>
        <p className="black-color text-center f-size-14 my-2 sub-gray-text">
          Don't have an account? <a href="sign-up">Create an account!</a>
        </p>
      </Container>
      <Container className="d-flex w-50 justify-content-between mb-5">
        <div className="w-50 text-left">
          <h4 className=" pt-3 mt-5 heading-color">
            Existing customers, log in
          </h4>
          <p className="black-color f-size-14 my-2 sub-gray-text">
            Fill up some quick information to log in.
          </p>
          <div className="form-group col-md-12 my-4 px-0">
            <label for="inputEmail4" className="sub-gray-text">
              Email Address<a href="sign-up">*</a>
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="form-group col-md-12 my-4 px-0">
            <label for="inputEmail4" className="sub-gray-text">
              Password<a href="sign-up">*</a>
            </label>
            <input type="Password" className="form-control" id="Password" />
          </div>
          <p className="text-right">
            {" "}
            <a href="sign-up">Forgot Password?</a> |{" "}
            <a href="sign-up">Login With Email OTP</a>
          </p>
          <div className="w-100 text-center">
            <Button
              className="rounded-0 f-size-12 px-4 mx-auto w-fit-content"
              variant="primary"
            >
              LOG IN TO MY ACCOUNT
            </Button>
          </div>
        </div>
        <div className="w-45 text-left">
          <h4 className=" pt-3 mt-5 heading-color">New customers, sign up</h4>
          <p className="black-color f-size-14 my-2 sub-gray-text">
            Sign up quickly with your social accounts
          </p>
          <div className="w-100 text-center my-4">
            <Button
              className="rounded-0 f-size-14 px-4 mx-auto w-100 d-flex align-items-center my-3"
              variant="primary"
            >
              <img
                src={facebookIcon}
                alt="facebookIcon"
                className="mw-100 w-24px mr-2"
              />
              SIGN IN WITH FACEBOOK
            </Button>
            <Button
              className="rounded-0 f-size-14 px-4 mx-auto w-100 d-flex align-items-center my-3 border-0"
              style={{ backgroundColor:"#e02f2f"}}
            >
              <img
                src={googleIcon}
                alt="googleIcon"
                className="mw-100 w-24px mr-2"
              />
              SIGN IN WITH GOOGLE
            </Button>
            <Button
              className="rounded-0 f-size-14 px-4 mx-auto w-100 d-flex align-items-center my-3 border-0"
              style={{backgroundColor: "#55acee"}}
            >
              <img
                src={twitterIcon}
                alt="facebookIcon"
                className="mw-100 w-24px mr-2"
              />
              SIGN IN WITH FACEBOOK
            </Button>
          </div>
        </div>
      </Container>
      <SecurityBudgeFooter />
    </div>
  );
};

export default LoginPage;
