import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import SubscribeSection from "../components/SecoundLast";
import DashboardSideBaar from "../components/DashboardSidebaar";
import ProfileBox from "../components/ProfileCard";
import { Tab, Tabs } from "react-bootstrap";

const ProfilePage = () => {
  return (
    <div>
      <Header upperLineNone={true} />
      <div className="my-5 w-90 d-flex mx-auto justify-content-around">
        <div className="w-15 d-flex flex-wrap">
          <DashboardSideBaar active={1} />
        </div>
        <div className="w-75">
          <ProfileBox />
          <div className="w-70 py-5 ">
            <Tabs
              defaultActiveKey="highLight"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab
                eventKey="highLight"
                className="text-left"
                title="Edit Profile"
              >
                <div className="form-row mt-5">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4" className="f-size-13">First Name*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputPassword4" className="f-size-13">Last Name*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputPassword4" className="f-size-13">Cell Phone Number*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                    />
                  </div>
                  <div class="form-check col-md-12 ml-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label f-size-13"
                      for="flexCheckDefault"
                    >
                      I’d like to be updated via SMS/TEXT
                    </label>
                  </div>
                  <div class="form-check col-md-12 ml-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      class="form-check-label f-size-13"
                      for="flexCheckDefault"
                    >
                      Change Email
                    </label>
                  </div>
                  <div className="form-group col-md-6 mt-3">
                    <label for="inputPassword4" className="f-size-13">Email Address*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                    />
                  </div>
                  <div className="form-group col-md-6 mt-3">
                    <label for="inputPassword4" className="f-size-13">Current Password*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                    />
                  </div>
                  <button type="submit" className="btn primary-button-css px-4 f-size-12">
                    OK SUBMIT
                  </button>
                </div>
              </Tab>
              <Tab
                eventKey="works"
                title="Change My Password"
                className="text-left"
              >
                <div className="form-row mt-5">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4" className="f-size-13">Current Password*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputPassword4" className="f-size-13">New Password*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                    />
                  </div>
                  <p className="text-left w-100 font-weight-bold f-size-13 mb-0">
                    Password must meet the following requirements:
                  </p>
                  <p
                    className="text-left f-size-12 sub-gray-text"
                    style={{ display: "list-item", marginLeft: "15px" }}
                  >
                    Password must have at least 6 characters.
                  </p>
                </div>
                <button type="submit" className="btn primary-button-css px-4 f-size-12">
                  OK SUBMIT
                </button>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default ProfilePage;
