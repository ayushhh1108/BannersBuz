import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import SubscribeSection from "../components/SecoundLast";
import { Card, Container } from "react-bootstrap";

const CheckoutSuccessPage = () => {
  return (
    <div>
      <Header />
      <div className="main-container w-cm">
        <div className="carosal-box d-flex flex-wrap mb-5">
          <Container className="my-5 text-center">
            <Card className="col-12 col-lg-9 mx-auto">
              <Card.Body className="py-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="#60ba5f"
                  class="bi bi-check2-circle my-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                </svg>
                <h3 className="fw-bold my-1 py-2">Awesome Purchase!</h3>
                <Card.Subtitle className="mb-2 my-2 text-muted">
                  Order Placed! Cool Choice By The Way.
                </Card.Subtitle>
                <Card.Text className="f-size-18 my-2">
                  {" "}
                  Thanks A Lot For Your Order!{" "}
                </Card.Text>
                <Card.Subtitle className=" my-2 py-2 px-3">
                  Your Order Number is :{" "}
                  <Card.Link href="#">US30334451419876537</Card.Link>
                </Card.Subtitle>
                <p className="black-color f-size-13 my-2 sub-gray-text">
                  <strong>NOTE:</strong> We'll keep you informed about your order on email.
                </p>
                <Card.Link href="#">Review Your Order</Card.Link>
              </Card.Body>
            </Card>
          </Container>
          <SubscribeSection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
