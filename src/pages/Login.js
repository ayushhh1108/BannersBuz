import React, { useState } from "react";
import Header from "../components/header/Header";
import { Button, Container } from "react-bootstrap";
import facebookIcon from "../assets/facebook.png";
import googleIcon from "../assets/social.png";
import twitterIcon from "../assets/twitter-icon.png";
import SecurityBudgeFooter from "../components/SecurityBudgeFooter";
import QualityBar from "../components/QualityBar/QualityBar";
import { useFormik } from "formik";
import { loginValidationSchema } from "../utils/validation";
import { useNavigate } from "react-router-dom";
import { API, BASE_URl } from "../utils/api";
import { saveUser } from "../utils/localStorage";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../utils/firebase";
import axios from "axios";

const LoginPage = () => {

  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      setLoginError("");
      console.log("values: ", values);
      API("/login", "post", values, "")
        .then(res => {
          setLoginError("");
          console.log("login res: ", res?.data);
          saveUser(res?.data);
          formik.resetForm();
          navigate("/");
        })
        .catch(error => {
          console.log("Failed to login: ", error);
          setLoginError(error?.response?.data?.data);
        })
    }
  });

  const onGoogleLogin = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => {
        console.log("google res: ", res);
        axios({
          method: "post",
          url: `${BASE_URl}/login`,
          data: {
            email: res.user.email,
            password: res?.user?.uid,
          },
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            setLoginError("");
            console.log("login api res: ", res.data);
            saveUser(res?.data?.data);
            navigate("/");
          })
          .catch((error) => {
            console.log("login api error: ", error);
            setLoginError(error?.response?.data?.data);
          });
      })
      .catch((error) => console.log("google error: ", error));
  };

  return (
    <div>
      <Header upperLineNone={true} searchNone={true} categoryNone={true} />
      <div className="container">
        <QualityBar />
      </div>
      <Container>
        <h2 className="text-center pt-3 mt-5 heading-color">
          Log in to your account
        </h2>
        <p className="black-color text-center f-size-14 my-2 sub-gray-text">
          Don't have an account? <a href="sign-up">Create an account!</a>
        </p>
      </Container>
      {loginError && <div className="text-danger text-center d-flex justify-content-center"><span>{loginError}</span></div>}
      <Container className="d-flex col-12 col-lg-8 col-xl-6 flex-wrap justify-content-between mb-5">
        <div className="col-12 col-sm-6 text-left">
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
            <input
              type="email"
              autoFocus={false}
              className="form-control"
              id="inputEmail4"
              {...formik.getFieldProps("email")}
            />
            {formik.errors.email && <span className="text-danger mt-1">{formik.errors.email}</span>}
          </div>
          <div className="form-group col-md-12 my-4 px-0">
            <label for="inputEmail4" className="sub-gray-text">
              Password<a href="sign-up">*</a>
            </label>
            <input
              type="Password"
              className="form-control"
              id="Password"
              {...formik.getFieldProps("password")}
            // value={formik.values.password}
            // onChange={(e) => formik.setFieldValue("password", e.target.value.trim())}
            />
            {formik.touched.password && formik.errors.password && <span className="text-danger mt-1">{formik.errors.password}</span>}
          </div>
          <p className="text-right">
            {" "}
            <a href="#">Forgot Password?</a> |{" "}
            <a href="#">Login With Email OTP</a>
          </p>
          <div className="w-100 text-center">
            <Button
              className="rounded-0 f-size-12 px-4 mx-auto w-fit-content"
              variant="primary"
              onClick={formik.handleSubmit}
            >
              LOG IN TO MY ACCOUNT
            </Button>
          </div>
        </div>
        <div className="col-6 d-none d-sm-block text-left">
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
              style={{ backgroundColor: "#e02f2f" }}
              onClick={onGoogleLogin}
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
              style={{ backgroundColor: "#55acee" }}
            >
              <img
                src={twitterIcon}
                alt="facebookIcon"
                className="mw-100 w-24px mr-2"
              />
              SIGN IN WITH Twitter
            </Button>
          </div>
        </div>
        <div className="d-flex flex-wrap d-block d-sm-none text-center col-12 justify-content-center">
          <p className="my-3">or Sign in with Social</p>
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
              onClick={onGoogleLogin}
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
      </Container>
      <SecurityBudgeFooter />
    </div>
  );
};

export default LoginPage;
