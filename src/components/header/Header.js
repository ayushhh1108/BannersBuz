import React, { useState } from "react";
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
import CartModel from "../Model";
import SideBaar from "../SideBaar";
const Header = ({ upperLineNone, categoryNone, searchNone }) => {
  const [cart, setCart] = useState(false);
  const [sideBaar, setSideBaar] = useState(false);
  const handleClose = () => {
    setCart(false);
  };
  const handleCloseSideBaar = () => {
    setSideBaar(false);
  }
  const menuItems = [
    "Banners",
    "Stands & Displays",
    "Table Covers & Displays",
    "Custom Flags",
    "Compliance Signs",
    "Signs & Decals",
    "Clothing",
    "Marketing Materials",
    "Accessories",
  ];
  const CategoryData = [
    {
      category: "Category 1",
      subcategories: [
        "Subcategory 1.1",
        "Subcategory 1.2",
        "Subcategory 1.3",
        "Subcategory 1.4",
        "Subcategory 1.5",
      ],
    },
    {
      category: "Category 1",
      subcategories: [
        "Subcategory 1.1",
        "Subcategory 1.2",
        "Subcategory 1.3",
        "Subcategory 1.4",
        "Subcategory 1.5",
      ],
    },
    {
      category: "Category 1",
      subcategories: [
        "Subcategory 1.1",
        "Subcategory 1.2",
        "Subcategory 1.3",
        "Subcategory 1.4",
        "Subcategory 1.5",
      ],
    },
    {
      category: "Category 2",
      subcategories: [
        "Subcategory 2.1",
        "Subcategory 2.2",
        "Subcategory 2.3",
        "Subcategory 2.4",
        "Subcategory 2.5",
      ],
    },
    {
      category: "Category 2",
      subcategories: [
        "Subcategory 2.1",
        "Subcategory 2.2",
        "Subcategory 2.3",
        "Subcategory 2.4",
        "Subcategory 2.5",
      ],
    },
    {
      category: "Category 2",
      subcategories: [
        "Subcategory 2.1",
        "Subcategory 2.2",
        "Subcategory 2.3",
        "Subcategory 2.4",
        "Subcategory 2.5",
      ],
    },
    {
      category: "Category 3",
      subcategories: [
        "Subcategory 3.1",
        "Subcategory 3.2",
        "Subcategory 3.3",
        "Subcategory 3.4",
        "Subcategory 3.5",
      ],
    },
  ];
  return (
    <header>
      {!upperLineNone ? (
        <div className="topbar d-flex justify-content-between px-4">
          <div className="toppbar_left d-flex flex-nowrap align-items-center header-first-sec">
            <Link to="" className="text-light font-size-13">
              {" "}
              <img
                src={order_track}
                alt="order-tracking"
                className="tracking-png"
              />{" "}
              Order Tracking
            </Link>
            <div className="quick_links w-fit-content">
              <div className="dropdown show">
                <Link
                  className="dropdown-toggle text-light font-size-13"
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
                  className="dropdown-menu font-size-13"
                  aria-labelledby="dropdownMenuLink"
                >
                  <Link className="dropdown-item px-2" to="#">
                    Action
                  </Link>
                  <Link className="dropdown-item px-2" to="#">
                    Another action
                  </Link>
                  <Link className="dropdown-item px-2" to="#">
                    Something else here
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="topbar_right d-flex font-size-13 right-sideheader w-46 ">
            <div className="text-light font-size-13 d-sm-none" onClick={()=>setSideBaar(true)}>
              <img src={account} alt="account" className="profile-png" /> Hi,
              Vraj
            </div>
            <Link
              className="dropdown-toggle text-light font-size-13 d-none d-md-inline d-sm-inline d-lg-inline d-xl-inline"
              to="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {" "}
              <img src={account} alt="account" className="profile-png" /> Hi,
              Vraj
            </Link>
            <div
              className="dropdown-menu font-size-13 py-0 profile-dropdown"
              aria-labelledby="dropdownMenuLink"
            >
              <Link className="dropdown-item px-3" to="#">
                My Account
              </Link>
              <Link className="dropdown-item px-3" to="#">
                My design
              </Link>
              <Link
                className="dropdown-item px-3 bg-secondary text-light"
                to="#"
              >
                Logout
              </Link>
            </div>
            <Link
              to=""
              className="hover_orange text-light"
              onClick={() => {
                setCart(true);
              }}
            >
              {" "}
              <img src={items} alt="items" className="items-png" /> Item(s){" "}
              <span>$0.00</span>{" "}
            </Link>
            <div className="dropdown show pr-1">
              <Link
                className="dropdown-toggle text-light"
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
                className="dropdown-menu dropdown-menu-end "
                aria-labelledby="dropdownMenuLink"
              >
                <Link className="dropdown-item" to="#">
                  {" "}
                  <img
                    src={uk}
                    alt="uk-map"
                    className="small-png"
                    width={25}
                  />{" "}
                  UK{" "}
                </Link>
                <Link className="dropdown-item" to="#">
                  {" "}
                  <img
                    src={au}
                    alt="au-map"
                    className="small-png"
                    width={25}
                  />{" "}
                  AU{" "}
                </Link>
                <Link className="dropdown-item" to="#">
                  {" "}
                  <img
                    src={nz}
                    alt="nz-map"
                    className="small-png"
                    width={25}
                  />{" "}
                  NZ{" "}
                </Link>
                <Link className="dropdown-item" to="#">
                  {" "}
                  <img
                    src={ca}
                    alt="ca-map"
                    className="small-png"
                    width={25}
                  />{" "}
                  CA{" "}
                </Link>
                <Link className="dropdown-item" to="#">
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
        <div className="header-logo d-flex align-item-center">
          <img src={logo} className="mw-100" alt="logo" />
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
        <div className="d-none d-md-flex w-20 justify-content-around chat-now-box">
          <div className="d-flex align-items-center w-50 callUsBox">
            <img src={callUs} alt="callUs" className="call-us connect" />
            <span className="small-sub-text ml-3">
              Chat now
            </span>
          </div>
          <div className="d-flex align-items-center w-50 callUsBox">
            <img src={callUs} alt="callUs" className="call-us connect" />
            <span className="small-sub-text ml-3">
              Call us
              <p className="mb-0">800-580-4489</p>
            </span>
          </div>
        </div>
      </div>
      {!categoryNone && (
        <div className="main-navbar d-none d-md-flex navbar-color justify-content-around">
          {menuItems.map((item) => (
            <>
              <Link
                className="dropdown-toggle text-light d-flex align-items-center"
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <div className="prl-2 nav-item cursor-pointer">{item}</div>
              </Link>
              <div
                className="dropdown-menu font-size-13 p-2 w-65"
                aria-labelledby="dropdownMenuLink"
              >
                <div className="w-100 d-flex flex-wrap">
                  {CategoryData.map((i) => (
                    <div className="w-20 py-2">
                      <p className="px-3 py-1 mb-0 text-center d-flex justify-content-between cursor-pointer f-size-16 text-primary">
                        {i.category}
                      </p>
                      {i.subcategories.map((sub) => (
                        <p className="text-secondary mb-0 px-3">{sub}</p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>
      )}
      <CartModel open={cart} handleClose={handleClose} />
      <SideBaar open={sideBaar} handleClose={handleCloseSideBaar} categoryData={CategoryData} />
    </header>
  );
};

export default Header;
