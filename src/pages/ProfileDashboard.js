import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import SubscribeSection from "../components/SecoundLast";
import badgeIcon from "../assets/cart-large-minimalistic-svgrepo-com.svg";
import quoteIcon from "../assets/register-svgrepo-com.svg";
import DashboardSideBaar from "../components/DashboardSidebaar";
import ProfileBox from "../components/ProfileCard";

const DashboardPage = () => {
  return (
    <div>
      <Header upperLineNone={true} />
      <div className="my-5 w-90 d-flex mx-auto justify-content-around">
        <div className="w-15 d-flex flex-wrap">
          <DashboardSideBaar active={0}/>
        </div>
        <div className="w-75">
          <ProfileBox />
          <div className="w-100 d-flex my-4">
            <div className="w-45 light-grey cursor-pointer p-3 ml-2">
              <img src={badgeIcon} alt="icons" className="w-35px mr-2" />0
              Orders Completed
            </div>
            <div className="w-45 light-grey cursor-pointer p-3 ml-2">
              <img src={quoteIcon} alt="icons" className="w-35px mr-2" />0
              Quotes Requested
            </div>
          </div>
          <h2 className="text-left pt-3 mt-5 heading-color">
            Your Latest Choice
          </h2>
          <p className="text-muted black-color light-grey text-left f-size-15 my-4 sub-gray-text">
            No order placed
          </p>
          <h2 className="text-left pt-3 mt-5 heading-color">
          Addresses
          </h2>
          <p className="text-muted black-color light-grey text-left f-size-15 my-4 sub-gray-text">
            No address placed
          </p>
        </div>
      </div>
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default DashboardPage;
