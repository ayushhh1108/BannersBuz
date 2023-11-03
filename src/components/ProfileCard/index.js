import React from "react";
import { Link } from "react-router-dom";
import dashboardIcon from "../../assets/dashboard-svgrepo-com.svg";
import profileIcon from "../../assets/profile-1341-svgrepo-com.svg";
import addressbookIcon from "../../assets/address-book-svgrepo-com.svg";
import orderIcon from "../../assets/cart-large-minimalistic-svgrepo-com.svg";
import wallateIcon from "../../assets/wallet-money-svgrepo-com.svg";
import creditIcon from "../../assets/money-check-dollar-svgrepo-com.svg";
import quotesIcon from "../../assets/quote-bubble-svgrepo-com.svg";
import ticketsIcon from "../../assets/register-svgrepo-com.svg";
import designIcon from "../../assets/computer-and-house-svgrepo-com.svg";
import "../../css/style.css";
const ProfileBox = () => {
  return (
    <div class="container d-flex">
      <div class="card-profile p-3">
        <div class="media flex-wrap w-100">
          <img src="https://imgur.com/ZnxJ2SY.png" class="mr-3" />
          <div class="media-body w-100 d-flex flex-wrap">
            <h4 class="mt-2 mb-0 w-fit-content">
              Hey there, Marry Hanerry
            </h4>
            <span class="cursor-pointer f-size-14 w-10 mt-3 ml-3">Edit</span>
            <div class="d-flex flex-row align-text-center">
              <small class="text-muted cursor-pointer mr-3">
                ayushhirapara1108@gmail.com | Log out
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
