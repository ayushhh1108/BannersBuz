import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import SubscribeSection from "../components/SecoundLast";

const ProfileDesignPage = () => {
  return (
    <div>
      <Header upperLineNone={true} />
      <div className="my-5 w-90 justify-content-center mx-auto">
        <h2 className="text-center pt-3 mt-5 heading-color">Your masterpieces</h2>
        <p className="text-muted black-color light-grey text-center f-size-15 my-4 sub-gray-text">
          Right here, we save all the creatives you created or uploaded. How
          could we let go of something so important!
        </p>
        <p className="black-color light-grey text-center f-size-15 my-4 sub-gray-text">
          No Designs Found
        </p>
      </div>
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default ProfileDesignPage;
