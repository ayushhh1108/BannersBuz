import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import SubscribeSection from "../components/SecoundLast";
import DashboardSideBaar from "../components/DashboardSidebaar";
import ProfileBox from "../components/ProfileCard";

const ProfileQuotesPage = () => {
  return (
    <div>
      <Header upperLineNone={true} />
      <div className="my-5 w-90 d-flex mx-auto justify-content-around">
        <div className="w-15 d-flex flex-wrap">
          <DashboardSideBaar active={6} />
        </div>
        <div className="w-75">
          <ProfileBox />
          <h2 className="text-left pt-3 mt-5 heading-color mb-4 f-size-24">
            All Quotations
          </h2>
          <table className="w-100">
            <tr className="f-size-14">
              <th>Quotation ID</th>
              <th>Date</th>
              <th>Contact Name</th>
            </tr>
            <tr className="f-size-14">
              <td>214213</td>
              <td>12-02-2023</td>
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

export default ProfileQuotesPage;
