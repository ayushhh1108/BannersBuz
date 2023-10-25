import React from "react";
import Header from "../components/header/Header";
import { Accordion, Button, Container, Tab, Tabs } from "react-bootstrap";
import Footer from "../components/Footer";
import SubscribeSection from "../components/SecoundLast";
import checkIcon from "../assets/checked.png";
import posterBlog from "../assets/shutterstock_108294335.jpg";
import Banner from "../assets/banner.png";
import { OnlyBreadCrum } from "../components/breadcrum/breadcrum";

const AffiliateProgram = () => {
  const featuresData = [
    "6% Tiered Commission Rate",
    "$162 Average Order Size",
    "Weekly Promotions & Season Sales sent to your inbox",
    "Banner Ads, Text Links, & more available for advertising",
    "15 Day Cookie & Unlimited Action Occurrences",
    "Live on ShareASale",
  ];
  return (
    <div>
      <Header />
      <div className="w-100">
        <Container>
          <OnlyBreadCrum />
        </Container>
        <div style={{ backgroundColor: "#dcebf9" }}>
          <img
            src={Banner}
            alt="slider"
            style={{ display: "inherit" }}
            className="mw-100 mx-auto"
          />
        </div>
      </div>
      <Container className="border-bottom">
        <p className="my-5">
          10%. Yes, by being a BB affiliate you can earn up to 10% on every
          order generated on your website. One of the highest commission payers
          in the industry, BB also offers support at all times, and quality
          products your customers will appreciate.
        </p>
      </Container>
      <Container className="text-center py-5">
        <h2 className="text-center py-3">Sign up & Start Earning today!</h2>
        <Button variant="info" className="px-4 white-color">
          SIGN ME UP NOW
        </Button>
        <div className="w-75 py-5 mx-auto">
          <Tabs
            defaultActiveKey="highLight"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab
              eventKey="highLight"
              className="text-left"
              title="Affiliate Program Highlights"
            >
              <h4 className="heading-color my-3 py-4">
                The Affiliate Program has a lot to offer!
              </h4>
              {featuresData.map((i) => {
                return (
                  <p className="mb-1">
                    <img
                      src={checkIcon}
                      style={{ width: "15px" }}
                      className="mr-2 "
                      alt="check"
                    />
                    {i}
                  </p>
                );
              })}
            </Tab>
            <Tab eventKey="works" title="How it Works" className="text-left">
              <h4 className="heading-color my-3 py-4">How it works</h4>
              {featuresData.map((i, index) => {
                return (
                  <p className="mb-1">
                    {index + 1}. {i}
                  </p>
                );
              })}
            </Tab>
            <Tab eventKey="offer" title="Example Offer" className="text-left">
              <h4 className="heading-color my-3 py-4">Example Offer</h4>
              <p className="black-color f-size-14 my-4">
                which are placed on walls as per the customer requirement and
                are easily removable. However, once removed, they cannot be
                repositioned, but the process is mess free and doesn’t hurt the
                walls.
              </p>
              <img src={posterBlog} alt="poster" className="mw-100" />
              <p className="black-color f-size-14 my-4">
                Wall letters personalise the space completely and can be used in
                the walls of bedroom or kids’ room. Vinyl Wall Lettering is also
                used as an interior decoration option as it gives the space a
                complete makeover. Whether it’s a personal message or a quote or
                a monogram or even your company’s name or logo on office walls,
                Wall lettering is the best solution. At BannerBuzz, getting your
                vinyl wall lettering is easy. If you have a print ready design
                then we’ll print it for you or you can use our user-friendly
                design tool to design your wall lettering. You can also take the
                help of our designers to design the right wall lettering for
                you.
              </p>
            </Tab>
            <Tab
              eventKey="Questions"
              title="Frequently Asked Questions"
              className="text-left"
            >
              <h4 className="heading-color my-3 py-4">
                Frequently Asked Questions
              </h4>
              <p className="black-color f-size-14 my-4">
                which are placed on walls as per the customer requirement and
                are easily removable. However, once removed, they cannot be
                repositioned, but the process is mess free and doesn’t hurt the
                walls.
              </p>
              <Accordion className="py-3">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    What is the BannerBuzz' Quality Guarantee?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our 120-day promise guarantees that products do not contain
                    manufacturing defects, and, if the product fails, breaks, or
                    has ink issue due to a manufacturing defect during that time
                    period, we will either replace the product or issue you a
                    credit equal to the value of the failed product. Bannerbuzz
                    reserves the right to investigate the claim and determine
                    whether or not the failed product is covered by our
                    guarantee.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How can BannerBuzz offer such low prices without
                    compromising quality?
                  </Accordion.Header>
                  <Accordion.Body>
                    As one of the largest wholesale printers in the industry, we
                    can order the materials and supplies directly from the
                    manufacturers. BannerBuzz also manages orders within and
                    outside of the United States, which lowers our overall cost
                    of shipping and design. Since we are saving money from these
                    high-quality products, we believe the savings should be
                    passed along to you
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Do you print neon colours?
                  </Accordion.Header>
                  <Accordion.Body>
                    We can make the closest possible match to the colors you
                    specify when placing orders.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Does BannerBuzz give bigger discounts to commercial orders?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, please contact our sales department at
                    sales@bannerbuzz.com or call us at 800-580-4489 for more
                    information on how we can process your bulk order.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    How much is the shipping cost?
                  </Accordion.Header>
                  <Accordion.Body>
                    All of the shipping calculations are done based on the
                    product you will order from us. On the cart page, you will
                    see the exact amount for shipping.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    What if my order is not delivered within the guaranteed time
                    frame?
                  </Accordion.Header>
                  <Accordion.Body>
                    BannerBuzz's website displays an estimated delivery date for
                    your product based on the selected shipping method. Please
                    use the correct payment option when you reach the checkout.
                    Unless there were issues with the shipping company, we have
                    fulfilled over 85% of orders by the expected delivery date.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Tab>
          </Tabs>
        </div>
      </Container>
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default AffiliateProgram;
