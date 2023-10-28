import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import SubscribeSection from "../components/SecoundLast";
import DashboardSideBaar from "../components/DashboardSidebaar";
import ProfileBox from "../components/ProfileCard";

const ProfileCreditPage = () => {
  return (
    <div>
      <Header upperLineNone={true} />
      <div className="my-5 w-90 d-flex mx-auto justify-content-around">
        <div className="w-15 d-flex flex-wrap">
          <DashboardSideBaar active={5} />
        </div>
        <div className="w-75">
          <ProfileBox />
          <h2 className="text-left pt-3 mt-5 heading-color mb-4">
            All About Your Credits
          </h2>
          <p className="text-muted black-color light-grey text-left f-size-15 my-4 sub-gray-text">
            Your Credit Amount: <strong>$0.00</strong>
          </p>
          <p className="text-muted black-color p-3 light-grey text-left f-size-15 my-4 sub-gray-text" style={{backgroundColor:"aliceblue"}}>
            Your Credit-Transaction History
          </p>
          <table className="w-100">
            <tr>
              <th>Date</th>
              <th>Credit Amount Redeemed</th>
              <th>Credit Amount Added</th>
              <th>Comment</th>
            </tr>
            <tr>
              <td>12-02-2023</td>
              <td>$214</td>
              <td>$213</td>
              <td>MAtt hanrry</td>
            </tr>
          </table>
        </div>
      </div>
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default ProfileCreditPage;
