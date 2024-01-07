import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import dashboardIcon from "../../assets/dashboard-svgrepo-com.svg";
import profileIcon from "../../assets/profile-1341-svgrepo-com.svg";
import addressbookIcon from "../../assets/address-book-svgrepo-com.svg";
import orderIcon from "../../assets/cart-large-minimalistic-svgrepo-com.svg";
import wallateIcon from "../../assets/wallet-money-svgrepo-com.svg";
import creditIcon from "../../assets/money-check-dollar-svgrepo-com.svg";
import quotesIcon from "../../assets/quote-bubble-svgrepo-com.svg";
import ticketsIcon from "../../assets/register-svgrepo-com.svg";
import designIcon from "../../assets/computer-and-house-svgrepo-com.svg";
import { DownArrow } from "../../assets/downArrow";
import "../../css/style.css";
const DashboardSideBaar = ({ active }) => {
    const navigate = useNavigate();
    const [isDropdown, setIsDropdown] = useState(false);
    const isMobileScreen = window.innerWidth < 600;
    const hadleToggle = () => {
        setIsDropdown(!isDropdown);
    }
    const css = "w-100 border-1 d-flex flex-wrap justify-content-center mt-2 px-1 py-3 cursor-pointer dashboard-shadow";
    const activeCss = "w-100 border-1 d-flex flex-wrap justify-content-center mt-2 px-1 py-3 cursor-pointer active-box";
    const SideBaar = () => {
        return (
            <div className="w-90 account-sidebaar">
                <div className={active === 0 ? activeCss : css} onClick={() => navigate("/customer/account")}>
                    <img src={dashboardIcon} alt="dashboardIcon" className="w-35px" />
                    <p className="w-100 text-center f-size-13 py-1 mb-0">Dashboard</p>
                </div>
                <div className={active === 1 ? activeCss : css} onClick={() => navigate("/customer/account/edit")}>
                    <img src={profileIcon} alt="dashboardIcon" className="w-35px" />
                    <p className="w-100 text-center py-1 f-size-13 mb-0">Profile</p>
                </div>
                <div className={active === 2 ? activeCss : css} onClick={() => navigate("/customer/address")}>
                    <img src={addressbookIcon} alt="dashboardIcon" className="w-35px" />
                    <p className="w-100 text-center py-1 f-size-13 mb-0">Address Book</p>
                </div>
                <div className={active === 3 ? activeCss : css} onClick={() => navigate("/customer/order")}>
                    <img src={orderIcon} alt="dashboardIcon" className="w-35px" style={{ fill: "#000" }} />
                    <p className="w-100 text-center py-1 f-size-13 mb-0">Orders</p>
                </div>
                <div className={active === 4 ? activeCss : css} onClick={() => navigate("/customer/wallet")}>
                    <img src={wallateIcon} alt="dashboardIcon" className="w-35px" />
                    <p className="w-100 text-center py-1 f-size-13 mb-0">wallet</p>
                </div>
                <div className={active === 5 ? activeCss : css} onClick={() => navigate("/customer/credit")}>
                    <img src={creditIcon} alt="dashboardIcon" className="w-35px" />
                    <p className="w-100 text-center py-1 f-size-13 mb-0">Credits</p>
                </div>
                <div className={active === 6 ? activeCss : css} onClick={() => navigate("/customer/quotations")}>
                    <img src={quotesIcon} alt="dashboardIcon" className="w-35px" />
                    <p className="w-100 text-center py-1 f-size-13 mb-0">Quotes</p>
                </div>
                <div className={active === 7 ? activeCss : css} onClick={() => navigate("/customer/tickets")}>
                    <img src={ticketsIcon} alt="dashboardIcon" className="w-35px" />
                    <p className="w-100 text-center py-1 f-size-13 mb-0">Tickets</p>
                </div>
                <div className={active === 8 ? activeCss : css} onClick={() => navigate("/customer/design")}>
                    <img src={designIcon} alt="dashboardIcon" className="w-35px" />
                    <p className="w-100 text-center py-1 f-size-13 mb-0">Designs</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-15 d-flex flex-wrap account-side-baar">
            <div className="dropdown-sidebar d-flex flex-wrap align-items-center justify-content-between w-90 mx-auto border rounded p-1 cursor-pointer d-none" onClick={hadleToggle}><span>Account Dashbord</span><DownArrow /></div>
            {isMobileScreen && !isDropdown ? "" : <SideBaar />}
        </div>
    )
};

export default DashboardSideBaar;
