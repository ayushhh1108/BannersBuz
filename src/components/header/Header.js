import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import usa from "../../assets/usa.svg";
import account from "../../assets/user.png";
import items from "../../assets/items.svg";
import uk from "../../assets/uk.svg";
import ca from "../../assets/ca.svg";
import au from "../../assets/au.svg";
import nz from "../../assets/nz.svg";
import ind from "../../assets/ind.svg";
import chat from "../../assets/chat-now.svg";
import callUs from "../../assets/call-us.svg";
import order_track from "../../assets/order-tracking.svg";
import logo from "../../assets/redesign/xaraprint.svg";
import sidebaarIcon from "../../assets/menu-button-header.png";
import searchIcon from "../../assets/search.svg";
import "../../css/style.css";
import CreatableSelect from "react-select/creatable";
import CartModel from "../Model";
import SideBaar from "../SideBaar";
import BagIcon from "../../assets/BagIcon";
import ProfileIcon from "../../assets/ProfileIcon";
import { getUser, removeUser } from "../../utils/localStorage";
import { useRequest } from "../../hook/useRequest";
import { DataContext } from "../../context/dataContext";
import rightArrow from '../../assets/rightArrow.svg';
const Header = ({ upperLineNone, categoryNone, searchNone }) => {
  const [cart, setCart] = useState(false);
  const [sideBaar, setSideBaar] = useState(false);
  const [subCategories, setSubCategories] = useState([]);
  const data = useContext(DataContext);
  const { getCategories } = useRequest();
  useEffect(() => {
    getCategories();
  }, []);
  const navigate = useNavigate();
  const handleClose = () => {
    setCart(false);
  };
  const handleCloseSideBaar = () => {
    setSideBaar(false);
  };

  const handleOnHover = (category) => {
    const subCat = CategoryData.find((i) => i.category === category).subcategories;
    setSubCategories(chunk(subCat, 5))
  }

  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  const menuItems = [
    "Banners",
    "Stands & Displays",
    "Table Covers & Displays",
    "Custom Flags",
    "Compliance Signs",
    "Signs & Decals",
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
        "Subcategory 1.1",
        "Subcategory 1.2",
        "Subcategory 1.3",
        "Subcategory 1.4",
        "Subcategory 1.5",
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
  const user = getUser();
  return (
    <header className="">
      {!upperLineNone ? (
        <div className="topbar d-flex justify-content-between px-4">
          <div className="toppbar_left d-flex flex-nowrap align-items-center header-first-sec">
            <Link to="/orderstatus" className="text-light font-size-13 d-flex align-items-center">
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
                  className="dropdown-toggle text-light font-size-13 d-flex align-items-center"
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
                  <Link className="dropdown-item px-2" to="/photo-magnets">
                    Vectorization
                  </Link>
                  <Link className="dropdown-item px-2" to="/quickrfq">
                    Instant Quote
                  </Link>
                  <Link
                    className="dropdown-item px-2"
                    to="/dealer-registration"
                  >
                    Dealer Registration
                  </Link>
                  <Link className="dropdown-item px-2" to="/free-charity-banner">
                    Banners for a Cause
                  </Link>
                  <Link className="dropdown-item px-2" to="/sampal-kit">
                    Sample Kit
                  </Link>
                  <Link className="dropdown-item px-2" to="/blogs">
                    Blogs
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="topbar_right d-flex font-size-13 right-sideheader w-46 ">
            <div className="text-light font-size-13 d-sm-none" onClick={() => setSideBaar(true)}>
              <img src={account} alt="account" className="profile-png" /> Hi,
              {user ? " " + user?.first_name : " User"}
            </div>
            <Link
              className="dropdown-toggle text-light font-size-13 d-none d-sm-flex align-items-center"
              to="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {" "}
              <img src={account} alt="account" className="profile-png" /> Hi,
              {user ? " " + user?.first_name : " User"}
            </Link>
            <div
              className="dropdown-menu font-size-13 py-0 profile-dropdown"
              aria-labelledby="dropdownMenuLink"
            >
              <Link className="dropdown-item px-3" to="/customer/account">
                My Account
              </Link>
              <Link className="dropdown-item px-3" to="#">
                My design
              </Link>
              <Link
                className="dropdown-item px-3 bg-secondary text-light"
                to="#"
                onClick={() => removeUser()}
              >
                Logout
              </Link>
            </div>
            <Link
              to=""
              className="hover_orange text-light d-flex align-items-center"
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
        <div className="header-logo d-flex align-items-center">
          <img
            src={sidebaarIcon}
            className=" d-none side-baar-icon"
            onClick={() => setSideBaar(true)}
            alt="logo"
          />
          <img src={logo} className="mw-90 cursor-pointer" alt="logo" onClick={() => navigate("/")} />
        </div>
        <div className="search-select-box d-flex align-items-center ">
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
        <div className="d-flex w-20 justify-content-around chat-now-box">
          <div className="d-flex align-items-center w-50 callUsBox">
            <div className="connect">
              <img src={chat} alt="callUs" className="call-us" />
            </div>
            <span className="small-sub-text ml-3">Chat now</span>
          </div>
          <div className="d-flex align-items-center w-50 callUsBox">
            <div className="connect">
              <img src={callUs} alt="callUs" className="call-us" />
            </div>
            <span className="small-sub-text ml-3">
              Call us
              <p className="mb-0">800-580-4489</p>
            </span>
          </div>
          <div className="Icons-header">
            <Link
              className="dropdown-toggle text-dark "
              to="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <ProfileIcon />
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
            <div
              onClick={() => {
                setCart(true);
              }}
            >
              <BagIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="search-select-box-mobile d-none align-items-center ">
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
      {!categoryNone && (
        <div className="main-navbar navbar-color">
          <div className=" d-none d-md-flex header-navigation-width justify-content-center">
            {menuItems.map((item) => (
              <>
                <Link
                  className="dropdown-toggle text-light d-flex align-items-center w-fit-content mx-2"
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
                    <div className="w-12">
                      {CategoryData.map((i) => (
                        <div className="w-100 m-1 d-flex flex-wrap justify-content-between cursor-pointer" onMouseOver={() => { handleOnHover(i.category) }} >
                          <p className="m-0 text-center d-flex justify-content-between f-size-12 primary-color" onClick={() => navigate("/stands-and-displays")}>
                            {i.category}
                          </p>
                          <img src={rightArrow} alt="rightArrow" />
                        </div>
                      ))}
                    </div>
                    <div className="w-80 d-flex">
                      {subCategories?.map((mainn) => {
                        return <div className="w-20 ml-4 mt-1">
                          {mainn?.map((itemss) => {
                            return <p className="text-secondary f-size-11 cursor-pointer mb-0" onClick={() => navigate("/banner")}>{itemss}</p>
                          })}
                        </div>
                      })}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      )}
      <CartModel open={cart} handleClose={handleClose} />
      <SideBaar
        open={sideBaar}
        handleClose={handleCloseSideBaar}
        categoryData={CategoryData}
      />
    </header>
  );
};

export default Header;
