import React, { useState } from "react";
import Header from "../components/header/Header";
import { Button, Container } from "react-bootstrap";
import badgeIcon from "../assets/badge black.png";
import PriceIcon from "../assets/best-price.png";
import deliveryIcon from "../assets/delivery.png";
import colorPallateIcon from "../assets/color-palette.png";
import SecurityBudgeFooter from "../components/SecurityBudgeFooter";
import QualityBar from "../components/QualityBar/QualityBar";
import { useFormik } from "formik";
import { signupValidationSchema } from "../utils/validation";
import { API, BASE_URl } from "../utils/api";
import { saveUser } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";
import facebookIcon from "../assets/facebook.png";
import googleIcon from "../assets/social.png";
import twitterIcon from "../assets/twitter-icon.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../utils/firebase";
import axios from "axios";

const SignUPPage = () => {

  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      company_name: "",
      marketing_messages: false,
      country_code: "",
      phone_number: "",
    },
    validationSchema: signupValidationSchema,
    onSubmit: (values) => {
      console.log("values: ", values);
      const body = {
        ...values
      }
      API("/register", "post", body, "")
        .then(res => {
          console.log("register res: ", res?.data);
          saveUser(res?.data);
          formik.resetForm();
          navigate("/");
        })
        .catch(error => {
          console.log("Failed to register: ", error);
          setLoginError(error?.response?.data?.data);
        })
    }
  })

  const onGoogleSignup = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => {
        console.log("google res: ", res);
        axios({
          method: "post",
          url: `${BASE_URl}/register`,
          data: {
            first_name: res?.user?.displayName.split(' ')[0],
            last_name: res?.user?.displayName.split(' ')[1],
            email: res.user.email,
            password: res?.user?.uid,
            company_name: "",
            marketing_messages: false,
            country_code: "",
            phone_number: "",
          },
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            setLoginError("");
            console.log("register api res: ", res.data);
            saveUser(res?.data?.data);
            navigate("/");
          })
          .catch((error) => {
            console.log("register api error: ", error);
            setLoginError(error?.response?.data?.data);
          });
      })
      .catch((error) => console.log("google error: ", error));
  }

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
      {loginError && <div className="text-danger text-center d-flex justify-content-center"><span>{loginError}</span></div>}
      <Container className="d-flex col-12 col-md-6 justify-content-center mb-5">
        <div className="col-12 col-lg-10 col-xl-8 text-left">
          <div className="form-group col-md-12 my-4 px-0">
            <label for="inputEmail4" className="sub-gray-text">
              Email Address<a href="sign-up">*</a>
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email Address"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && <span className="text-danger mt-1">{formik.errors.email}</span>}
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
                placeholder="First Name"
                {...formik.getFieldProps("first_name")}
              />
              {formik.touched.first_name && formik.errors.first_name && <span className="text-danger mt-1">{formik.errors.first_name}</span>}
            </div>
            <div className="form-group col-md-6">
              <label for="inputEmail4" className="sub-gray-text">
                Last Name*
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Last Name"
                {...formik.getFieldProps("last_name")}
              />
              {formik.touched.last_name && formik.errors.last_name && <span className="text-danger mt-1">{formik.errors.last_name}</span>}
            </div>
          </div>
          <div className="form-group col-md-12 my-4 px-0">
            <label for="inputEmail4" className="sub-gray-text">
              Company Name
            </label>
            <input
              type="text"
              className="form-control"
              id="Password"
              placeholder="Company Name"
              {...formik.getFieldProps("company_name")}
            />
          </div>
          <div className="form-row mt-3">
            <div className="form-group col-md-6">
              <label for="inputEmail4" className="sub-gray-text">
                Counry Code*
              </label>
              <select id="inputState" className="form-control" {...formik.getFieldProps("country_code")}>
                <option selected disabled value={""}>Choose country code</option>
                <option value={"+91"}>+91</option>
                <option value={"+1"}>+1</option>
              </select>
              {formik.touched.country_code && formik.errors.country_code && <span className="text-danger mt-1">{formik.errors.country_code}</span>}
            </div>
            <div className="form-group col-md-6">
              <label for="inputEmail4" className="sub-gray-text">
                Cell Phone Number*
              </label>
              <input
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Cell Phone Number"
                {...formik.getFieldProps("phone_number")}
              />
              {formik.touched.phone_number && formik.errors.phone_number && <span className="text-danger mt-1">{formik.errors.phone_number}</span>}
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="gridCheck"
                value={formik.values.marketing_messages}
                onChange={(e) => formik.setFieldValue("marketing_messages", e.target.checked)}
              />
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
            <input
              type="Password"
              className="form-control"
              id="Password"
              placeholder="Password"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && <span className="text-danger mt-1">{formik.errors.password}</span>}
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
              onClick={formik.handleSubmit}
            >
              MAKE ME A PART OF BUZZ
            </Button>
            <p className="text-center f-size-14 sub-gray-text">
              Already have an account? <a href="/login">Log In</a>{" "}
            </p>
          </div>
          <div className="d-flex flex-wrap d-block text-center col-12 justify-content-center">
            <p className="my-3">or Sign up with Social</p>
            <div className="w-100 text-center d-flex">
              <Button
                className="rounded-0 f-size-14 px-4 mx-auto d-flex align-items-center my-3"
                variant="primary"
              >
                <img
                  src={facebookIcon}
                  alt="facebookIcon"
                  className="mw-100 w-24px"
                />
              </Button>
              <Button
                className="rounded-0 f-size-14 px-4 mx-auto d-flex align-items-center my-3 border-0"
                style={{ backgroundColor: "#e02f2f" }}
                onClick={onGoogleSignup}
              >
                <img
                  src={googleIcon}
                  alt="googleIcon"
                  className="mw-100 w-24px "
                />
              </Button>
              <Button
                className="rounded-0 f-size-14 px-4 mx-auto d-flex align-items-center my-3 border-0"
                style={{ backgroundColor: "#55acee" }}
              >
                <img
                  src={twitterIcon}
                  alt="facebookIcon"
                  className="mw-100 w-24px "
                />
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <SecurityBudgeFooter />
    </div>
  );
};

export default SignUPPage;
