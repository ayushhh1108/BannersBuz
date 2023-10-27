import React from "react";
import { Link } from "react-router-dom";
import usa from "../../assets/usa.svg";
import account from "../../assets/account.svg";
import items from "../../assets/items.svg";
import uk from "../../assets/uk.svg";
import ca from "../../assets/ca.svg";
import au from "../../assets/au.svg";
import nz from "../../assets/nz.svg";
import ind from "../../assets/ind.svg";
import chat from "../../assets/chat-now.svg";
import callUs from "../../assets/call-us.svg";
import order_track from "../../assets/order-tracking.svg";
import logo from "../../assets/logo.svg";
import searchIcon from "../../assets/search.svg";
import "../../css/style.css";
import CreatableSelect from "react-select/creatable";
const Header = ({ upperLineNone, categoryNone, searchNone }) => {
  return (
    <header>
      {!upperLineNone ? (
        <div className="topbar d-flex justify-content-between">
          <div className="toppbar_left d-flex align-items-center header-first-sec">
            <p className="mb-0 free-shiping">
              Free Super Saver shipping for orders over $99.00
            </p>
            <div className="quick_links">
              <div class="dropdown show">
                <Link
                  class="dropdown-toggle text-muted font-size-13"
                  to="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Quick links
                </Link>
                <div
                  class="dropdown-menu font-size-13"
                  aria-labelledby="dropdownMenuLink"
                >
                  <Link class="dropdown-item" to="#">
                    Action
                  </Link>
                  <Link class="dropdown-item" to="#">
                    Another action
                  </Link>
                  <Link class="dropdown-item" to="#">
                    Something else here
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="topbar_right d-flex font-size-13 right-sideheader w-46">
            <Link to="" className="text-muted">
              {" "}
              <img
                src={order_track}
                alt="order-tracking"
                className="tracking-png"
              />{" "}
              Order Tracking
            </Link>
            <Link to="" className="text-muted">
              {" "}
              <img src={account} alt="account" className="profile-png" /> Hi,
              Vraj
            </Link>
            <Link to="" className="hover_orange text-muted">
              {" "}
              <img src={items} alt="items" className="items-png" /> Item(s){" "}
              <span>$0.00</span>{" "}
            </Link>
            <div class="dropdown show pr-1">
              <Link
                class="dropdown-toggle text-muted"
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src={usa} alt="usa-map" className="small-png" />
              </Link>
              <div
                class="dropdown-menu dropdown-menu-end "
                aria-labelledby="dropdownMenuLink"
              >
                <Link class="dropdown-item" to="#">
                  {" "}
                  <img
                    src={uk}
                    alt="uk-map"
                    className="small-png"
                    width={25}
                  />{" "}
                  UK{" "}
                </Link>
                <Link class="dropdown-item" to="#">
                  {" "}
                  <img
                    src={au}
                    alt="au-map"
                    className="small-png"
                    width={25}
                  />{" "}
                  AU{" "}
                </Link>
                <Link class="dropdown-item" to="#">
                  {" "}
                  <img
                    src={nz}
                    alt="nz-map"
                    className="small-png"
                    width={25}
                  />{" "}
                  NZ{" "}
                </Link>
                <Link class="dropdown-item" to="#">
                  {" "}
                  <img
                    src={ca}
                    alt="ca-map"
                    className="small-png"
                    width={25}
                  />{" "}
                  CA{" "}
                </Link>
                <Link class="dropdown-item" to="#">
                  {" "}
                  <img
                    src={ind}
                    alt="ind-map"
                    className="small-png"
                    width={25}
                  />{" "}
                  IND{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="main_wrapper">
        <div>
          <img src={logo} className="" alt="logo" />
        </div>
        <div className="search-select-box d-flex align-items-center">
          {!searchNone ? (
            <CreatableSelect
              components={{
                DropdownIndicator: () => (
                  <img src={searchIcon} className="pr-3" />
                ),
                IndicatorSeparator: () => null,
              }}
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                }),
              }}
              placeholder="Search for "
              className="w-100"
            />
          ) : (
            ""
          )}
        </div>
        <div className="d-flex w-25 justify-content-around">
          <div className="d-flex justify-content-between align-items-center w-35">
            <img src={chat} alt="chat" className="chat-now connect" />
            <span className="small-sub-text">Chat now</span>
          </div>
          <div className="d-flex justify-content-between align-items-center w-45">
            <img src={callUs} alt="callUs" className="call-us connect" />
            <span className="small-sub-text">
              Call us
              <p className="mb-0">800-580-4489</p>
            </span>
          </div>
        </div>
      </div>
      {!categoryNone&&<div className="main-navbar d-flex navbar-color justify-content-around">
        <div className="prl-2 nav-item"> Banners </div>
        <div className="prl-2 nav-item"> Stands & Displays </div>
        <div className="prl-2 nav-item"> Table Covers & Displays </div>
        <div className="prl-2 nav-item"> Custom Flags </div>
        <div className="prl-2 nav-item"> Compliance Signs </div>
        <div className="prl-2 nav-item"> Signs & Decals </div>
        <div className="prl-2 nav-item"> Clothing </div>
        <div className="prl-2 nav-item"> Marketing Materials </div>
        <div className="prl-2 nav-item"> Accessories </div>
      </div>}
    </header>
  );
};

export default Header;
