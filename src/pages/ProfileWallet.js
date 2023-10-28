import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import SubscribeSection from "../components/SecoundLast";
import DashboardSideBaar from "../components/DashboardSidebaar";
import ProfileBox from "../components/ProfileCard";
import wallateIcon from "../assets/wallet-money-svgrepo-com.svg";
import moneyIcon from "../assets/money-check-dollar-svgrepo-com.svg";
import arrowWalletIcon from "../assets/wallet-arrow-right-svgrepo-com.svg";

const ProfileWalletPage = () => {
  return (
    <div>
      <Header upperLineNone={true} />
      <div className="my-5 w-90 d-flex mx-auto justify-content-around">
        <div className="w-15 d-flex flex-wrap">
          <DashboardSideBaar active={4} />
        </div>
        <div className="w-75">
          <ProfileBox />
          <h2 className="text-left pt-3 mt-5 heading-color mb-4">
            All About Your Wallet
          </h2>
          <div className="w-100 d-flex justify-content-around">
            <div class="card w-30">
              <div class="card-content">
                <div class="card-body py-2 px-3">
                  <div class="media d-flex">
                    <div class="align-self-center">
                      <img src={wallateIcon} alt="wallet" className="w-35px" />
                    </div>
                    <div class="media-body text-right">
                      <h5>Wallet Details</h5>
                      <span className="f-size-14">
                        Available Wallet Points : 0.00
                      </span>
                      <p className="f-size-14 mb-0">(1 Point = $1.00)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card w-30 justify-content-center">
              <div class="card-content">
                <div class="card-body py-2 px-3">
                  <div class="media d-flex">
                    <div class="align-self-center">
                      <img src={arrowWalletIcon} alt="wallet" className="w-35px" />
                    </div>
                    <div class="media-body text-right">
                      <h5>Next Expiration Date</h5>
                      <span className="f-size-14">02/12/2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card w-30 justify-content-center">
              <div class="card-content">
                <div class="card-body py-2 px-3">
                  <div class="media d-flex">
                    <div class="align-self-center">
                      <img src={moneyIcon} alt="wallet" className="w-35px" />
                    </div>
                    <div class="media-body text-right">
                      <h5>Points to be expired</h5>
                      <span className="f-size-14">0.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p
            className="text-muted black-color p-3 light-grey text-left f-size-15 my-4 sub-gray-text"
            style={{ backgroundColor: "aliceblue" }}
          >
            Your Wallet-Transaction History
          </p>
          <table className="w-100">
            <tr>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Transaction Type</th>
              <th>Transaction Details</th>
              <th>Points</th>
              <th>Expiration Date</th>
              <th>Available Balance</th>
            </tr>
            <tr>
              <td>9909</td>
              <td>12-02-2023</td>
              <td>Credit</td>
              <td>By online Transaction</td>
              <td>1100</td>
              <td>12-02-2023</td>
              <td>1100</td>
            </tr>
          </table>
        </div>
      </div>
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default ProfileWalletPage;
