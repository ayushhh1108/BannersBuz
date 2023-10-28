import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import SubscribeSection from "../components/SecoundLast";
import DashboardSideBaar from "../components/DashboardSidebaar";
import ProfileBox from "../components/ProfileCard";

const ProfileAddress = () => {
  return (
    <div>
      <Header upperLineNone={true} />
      <div className="my-5 w-90 d-flex mx-auto justify-content-around">
        <div className="w-15 d-flex flex-wrap">
          <DashboardSideBaar active={2} />
        </div>
        <div className="w-75">
          <ProfileBox />
          <div className="w-70">
            <div className="form-row mt-5">
              <h2 className="text-left pt-3 heading-color mb-4 w-100">
                Add a New Address
              </h2>
              <div className="form-group col-md-6">
                <label for="inputEmail4">First Name*</label>
                <input type="text" className="form-control" id="inputEmail4" />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Last Name*</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Company*</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Cell Phone Number*</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="form-group col-md-12">
                <label for="inputPassword4">Street Address*</label>
                <input
                  type="text"
                  className="form-control my-2"
                  id="inputPassword4"
                />
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                />
                <label
                  class="form-check-label f-size-12"
                  for="flexCheckDefault"
                >
                  (Note: We are unable to deliver to PO Box, APO, FPO & DPO
                  addresses)
                </label>
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Zip/Postal Code*</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">City*</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputState">State/Province*</label>
                <select id="inputState" className="form-control">
                  <option selected>Gujrat</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label for="inputState">Country*</label>
                <select id="inputState" className="form-control">
                  <option selected>India</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-check col-md-12 ml-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label f-size-14"
                  for="flexCheckDefault"
                >
                  This is my default billing address
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
                  class="form-check-label f-size-14"
                  for="flexCheckDefault"
                >
                  This is my default shipping address
                </label>
              </div>
              <button type="submit" className="btn btn-primary px-4 f-size-13 mt-4">
                DONE SAVE ADDRESS
              </button>
            </div>
          </div>
        </div>
      </div>
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default ProfileAddress;
