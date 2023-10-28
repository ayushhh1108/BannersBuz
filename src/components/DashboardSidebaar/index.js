import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
const DashboardSideBaar = ({active}) => {
    const navigate = useNavigate();
    const css = "w-100 border-1 d-flex flex-wrap justify-content-center mt-2 px-3 py-2 cursor-pointer dashboard-shadow";
    const activeCss = "w-100 border-1 d-flex flex-wrap justify-content-center mt-2 px-3 py-2 cursor-pointer active-box";

  return (
    <div className="w-100">
        <div className={active===0?activeCss:css} onClick={()=>navigate("/customer/account")}>
            <img src={dashboardIcon} alt="dashboardIcon" className="w-35" />
            <p className="w-100 text-center py-1">Dashboard</p>
        </div>
        <div className={active===1?activeCss:css} onClick={()=>navigate("/customer/account/edit")}>
            <img src={profileIcon} alt="dashboardIcon" className="w-35" />
            <p className="w-100 text-center py-1">Profile</p>
        </div>
        <div className={active===2?activeCss:css} onClick={()=>navigate("/customer/address")}>
            <img src={addressbookIcon} alt="dashboardIcon" className="w-35" />
            <p className="w-100 text-center py-1">Address Book</p>
        </div>
        <div className={active===3?activeCss:css} onClick={()=>navigate("/customer/order")}>
            <img src={orderIcon} alt="dashboardIcon" className="w-50" style={{fill:"#000"}} />
            <p className="w-100 text-center py-1">Orders</p>
        </div>
        <div className={active===4?activeCss:css} onClick={()=>navigate("/customer/wallet")}>
            <img src={wallateIcon} alt="dashboardIcon" className="w-35" />
            <p className="w-100 text-center py-1">wallet</p>
        </div>
        <div className={active===5?activeCss:css} onClick={()=>navigate("/customer/credit")}>
            <img src={creditIcon} alt="dashboardIcon" className="w-35" />
            <p className="w-100 text-center py-1">Credits</p>
        </div>
        <div className={active===6?activeCss:css} onClick={()=>navigate("/customer/quotations")}>
            <img src={quotesIcon} alt="dashboardIcon" className="w-35" />
            <p className="w-100 text-center py-1">Quotes</p>
        </div>
        <div className={active===7?activeCss:css} onClick={()=>navigate("/customer/tickets")}>
            <img src={ticketsIcon} alt="dashboardIcon" className="w-35" />
            <p className="w-100 text-center py-1">Tickets</p>
        </div>
        <div className={active===8?activeCss:css} onClick={()=>navigate("/customer/design")}>
            <img src={designIcon} alt="dashboardIcon" className="w-35" />
            <p className="w-100 text-center py-1">Designs</p>
        </div>
    </div>
  );
};

export default DashboardSideBaar;
