import React from "react";
import Header from "../components/header/Header";
import { Accordion, Button, Container, Form } from "react-bootstrap";
import badgeIcon from "../assets/badge black.png";
import PriceIcon from "../assets/best-price.png";
import deliveryIcon from "../assets/delivery.png";
import colorPallateIcon from "../assets/color-palette.png";
import googleTrusted from "../assets/google-trust.svg";
import securityBudgeIcon from "../assets/security-badges.jpg";
import SecurityBudgeFooter from "../components/SecurityBudgeFooter";
import Stepper from "../components/Stepper/Step";
import { CartItemBox, ProductBox } from "../components/product-box";

const CheckoutCartPage = () => {
  return (
    <div>
      <Header upperLineNone={true} searchNone={true} categoryNone={true} />
      <Container className="my-5 w-1100 d-flex">
        <div className="w-100 d-flex justify-content-between">
          <div className="w-fit-content light-grey">
            <img src={badgeIcon} alt="icons" className="mw-100 w-24px mr-2" />
            Quality Guarantee
          </div>
          <div className="w-fit-content light-grey">
            <img src={PriceIcon} alt="icons" className="mw-100 w-24px mr-2" />
            Best Prices
          </div>
          <div className="w-fit-content light-grey">
            <img
              src={deliveryIcon}
              alt="icons"
              className="mw-100 w-24px mr-2"
            />
            Free Shipping
          </div>
          <div className="w-fit-content light-grey">
            <img
              src={colorPallateIcon}
              alt="icons"
              className="mw-100 w-24px mr-2"
            />
            Free Design Proofs
          </div>
        </div>
      </Container>
      <Container>
        <h2 className="text-center pt-3 mt-5 heading-color">Shopping Cart</h2>
        <div className="w-75 mx-auto">
          <Stepper />
        </div>
      </Container>
      <div className="d-flex w-90 mx-auto mb-3">
        <div className="w-80 px-3 ">
          <div className="w-100 height-fitcontant d-flex justify-content-between">
            <h3 className="text-left height-fitcontant heading-color">
              Your Cart: 2 Items
            </h3>
            <span className="height-fitcontant cursor-pointer">
              Continue Shopping
            </span>
          </div>
          <div>
            <CartItemBox />
            <CartItemBox />
            <CartItemBox />
          </div>
        </div>
        <div
          className="w-20 mx-auto p-3"
          style={{ backgroundColor: "aliceblue" }}
        >
          <Form.Check
            type="checkbox"
            id={`default-checkbox`}
            label={`Proof Request`}
            className="f-size-14 my-2"
          />
          <p class="lead fw-bold mb-1 f-size-16">Apply Discount Code</p>
          <div class="input-group my-3">
            {" "}
            <input
              type="text"
              class="form-control coupon"
              name=""
              placeholder="Coupon code"
            />{" "}
            <span class="input-group-append">
              {" "}
              <button class="btn btn-primary btn-apply coupon">
                Apply
              </button>{" "}
            </span>{" "}
          </div>
          <Accordion className="bg-transparent">
            <Accordion.Item eventKey="1" className="bg-transparent border-0">
              <Accordion.Header className="bg-transparent">
                Estimate Shipping
              </Accordion.Header>
              <Accordion.Body className="px-0 py-1">
                <span class="text-muted f-size-12 d-block py-2">
                  Delivery to
                </span>
                <Form.Select className="py-1 rounded-0">
                  <option>Poland</option>
                </Form.Select>
                <span class="text-muted f-size-12 d-block py-2">State</span>
                <Form.Select className="py-1 rounded-0">
                  <option>Dolnoslaskie</option>
                </Form.Select>
                <div class="input-group my-3">
                  {" "}
                  <input
                    type="text"
                    class="form-control coupon rounded-0"
                    name=""
                    placeholder="Coupon code"
                  />{" "}
                  <span class="input-group-append">
                    {" "}
                    <button class="btn btn-primary rounded-0 text-primary bg-white btn-apply coupon">
                      Check
                    </button>{" "}
                  </span>{" "}
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <div className="d-flex flex-wrap mb-3">
                    <label
                      class="form-check-label f-size-14 w-80"
                      for="flexRadioDefault1"
                    >
                      Priority
                    </label>
                    <span className="w-20 light-grey">$60.82</span>
                    <span class="text-muted f-size-12 light-grey d-block">
                      Estimated delivery Mon, Nov 6th 2023
                    </span>
                  </div>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <div className="d-flex flex-wrap mb-3">
                    <label
                      class="form-check-label f-size-14 w-80"
                      for="flexRadioDefault1"
                    >
                      Express
                    </label>
                    <span className="w-20 light-grey">$40.57</span>
                    <span class="text-muted f-size-12 light-grey d-block">
                      Estimated delivery Wed, Nov 8th 2023
                    </span>
                  </div>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <div className="d-flex flex-wrap mb-3">
                    <label
                      class="form-check-label f-size-14 w-80"
                      for="flexRadioDefault1"
                    >
                      Super Saver
                    </label>
                    <span className="w-20 light-grey">$00.00</span>
                    <span class="text-muted f-size-12 light-grey d-block">
                      Estimated delivery Tue, Nov 14th 2023
                    </span>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div className="d-flex flex-wrap mt-3">
            <label
              class="form-check-label f-size-14 w-80"
              for="flexRadioDefault1"
            >
              Subtotal
            </label>
            <span className="w-20">$505.70</span>
          </div>
          <div className="d-flex flex-wrap mt-3">
            <label
              class="form-check-label f-size-14 w-80"
              for="flexRadioDefault1"
            >
              Shipping
            </label>
            <span className="w-20 text-decoration-line-through light-grey">
              $505.70
            </span>
            <span class="text-muted f-size-12 light-grey d-block">
              (Estimated delivery Tue, Nov 14th 2023 - Super Saver)
            </span>
          </div>
          <div className="d-flex flex-wrap mt-3 bb-grey pb-2">
            <label
              class="form-check-label f-size-14 w-80"
              for="flexRadioDefault1"
            >
              Exceptional Courier Charges
            </label>
            <span className="w-20">$505.70</span>
          </div>
          <div className="d-flex flex-wrap mt-3 bb-grey pb-2 justify-content-between">
            <h4 className="text-left height-fitcontant light-grey d-inline-block">
              Grand Total:
            </h4>
            <h4 className="text-left height-fitcontant light-grey d-inline-block">
              $505.70
            </h4>
          </div>
          <Button
            className="rounded-0 f-size-14 px-4 mx-auto w-100 d-flex align-items-center my-3 border-0 justify-content-center"
          >
            PROCEED TO CHECKOUT
          </Button>
          <h6 className="text-center height-fitcontant light-grey">OR</h6>
          <Button
            className="f-size-14 px-4 mx-auto w-100 d-flex align-items-center my-3 border-0 justify-content-center"
            style={{ backgroundColor: "#5d6268" }}
          >
            PAY WITH AMAZON
          </Button>
          
          <img src={securityBudgeIcon} alt="security" className="mw-100 my-3 mt-4" />
          <img src={googleTrusted} alt="security" className="mw-100 my-3" />
        </div>
      </div>
      <Container className="text-center mt-5">
      <h3 className="text-center w-100 mt-3">Recommended Categories</h3>
          <span className="text-center w-100 sub-gray-text ">
          More Trending Custom-Built Category by BannerBuzz
          </span>
          <div className="my-5 d-flex flex-wrap justify-content-around">
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
          </div>
      </Container>
      <SecurityBudgeFooter IsCard={true} />
    </div>
  );
};

export default CheckoutCartPage;
