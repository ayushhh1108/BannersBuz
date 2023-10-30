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
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const Header = ({ upperLineNone, categoryNone, searchNone }) => {
  return (
    <header>
      {!upperLineNone ? (
        <div className="topbar d-flex justify-content-between">
          <div className="toppbar_left d-flex align-items-center header-first-sec">
            <p className="mb-0 free-shiping f-size-13">
              Free Super Saver shipping for orders over $99.00
            </p>
            <div className="quick_links">
              <div className="dropdown show">
                <Link
                  className="dropdown-toggle text-muted font-size-13"
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
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                  <Link className="dropdown-item" to="#">
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
            <div className="dropdown show pr-1">
              <Link
                className="dropdown-toggle text-muted"
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
        <div>
          <img src={logo} className="" alt="logo" />
        </div>
        <div className="search-select-box d-none d-md-flex align-items-center">
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
        <div className="d-none d-md-flex w-25 justify-content-around chat-now-box">
          <div className="d-flex justify-content-between align-items-center w-35 chatBox">
            <img src={chat} alt="chat" className="chat-now connect" />
            <span className="small-sub-text">Chat now</span>
          </div>
          <div className="d-flex justify-content-between align-items-center w-45 callUsBox">
            <img src={callUs} alt="callUs" className="call-us connect" />
            <span className="small-sub-text">
              Call us
              <p className="mb-0">800-580-4489</p>
            </span>
          </div>
        </div>

        {/* <Navbar key={false} expand={false} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${false}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar> */}
      </div>
      {!categoryNone && <div className="main-navbar d-none d-md-flex navbar-color justify-content-around">
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
