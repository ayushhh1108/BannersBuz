import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import SubscribeSection from "../components/SecoundLast";
import DashboardSideBaar from "../components/DashboardSidebaar";
import ProfileBox from "../components/ProfileCard";

const ProfileOrderPage = () => {
  return (
    <div>
      <Header upperLineNone={true} />
      <div className="my-5 w-90 d-flex mx-auto justify-content-around">
        <div className="w-15 d-flex flex-wrap">
          <DashboardSideBaar active={3}/>
        </div>
        <div className="w-75">
          <ProfileBox />
          <h2 className="text-left pt-3 mt-5 heading-color f-size-24">
          Orders
          </h2>
          <p className="text-muted black-color light-grey text-left f-size-13 my-4 mt-2  sub-gray-text">
            No order placed
          </p>
        </div>
      </div>
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default ProfileOrderPage;
