import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import SubscribeSection from "../components/SecoundLast";
import ProfileBox from "../components/ProfileCard";
import { Container } from "react-bootstrap";

const OrdersStatusPage = () => {
  return (
    <div>
      <Header />
      <div className="main-container w-cm">
        <div className="carosal-box d-flex flex-wrap mb-5">
          <ProfileBox />
          <Container>
            <h2 className="text-left pt-3 heading-color mb-4 w-100">Orders</h2>
            <p className="text-muted black-color light-grey text-left f-size-15 my-4 sub-gray-text w-100">
              You have placed no orders.
            </p>
          </Container>
          <SubscribeSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default OrdersStatusPage;
