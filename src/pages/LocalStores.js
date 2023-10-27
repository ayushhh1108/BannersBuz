import React from "react";
import Header from "../components/header/Header";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import SubscribeSection from "../components/SecoundLast";
import { OnlyBreadCrum } from "../components/breadcrum/breadcrum";

const LocalStoresPage = () => {
  const data = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
  ];

  return (
    <div>
      <Header />
      <Container>
        <OnlyBreadCrum />
        <h2 className="text-center pt-3 heading-color">
          Pay us a visit! We’re not too far away
        </h2>
        <p className="black-color text-center f-size-14 my-2 sub-gray-text">
          Yes, Bannerbuzz not just serves the best-in-class banners and signs,
          they are available across all the 50 States and Canada.
        </p>
        <p className="text-center my-5">
          {data.map((i) => {
            return <span className="p-2">{i}</span>;
          })}
        </p>
        <div className="w-100 d-flex flex-wrap">
          <div className="w-100 d-flex my-4">
            <div className="w-20 f-size-70 heading-color">A</div>
            <div className="w-80 d-flex flex-wrap">
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
            </div>
          </div>
          <div className="w-100 d-flex my-4">
            <div className="w-20 f-size-70 heading-color">B</div>
            <div className="w-80 d-flex flex-wrap">
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
            </div>
          </div>
          <div className="w-100 d-flex my-4">
            <div className="w-20 f-size-70 heading-color">C</div>
            <div className="w-80 d-flex flex-wrap">
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
            </div>
          </div>
          <div className="w-100 d-flex my-4">
            <div className="w-20 f-size-70 heading-color">D</div>
            <div className="w-80 d-flex flex-wrap">
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
            </div>
          </div>
          <div className="w-100 d-flex my-4">
            <div className="w-20 f-size-70 heading-color">D</div>
            <div className="w-80 d-flex flex-wrap">
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
            </div>
          </div>
          <div className="w-100 d-flex my-4">
            <div className="w-20 f-size-70 heading-color">V</div>
            <div className="w-80 d-flex flex-wrap">
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
            </div>
          </div>
          <div className="w-100 d-flex my-4">
            <div className="w-20 f-size-70 heading-color">W</div>
            <div className="w-80 d-flex flex-wrap">
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
              <div className="w-25 mb-4">
                <h6 className="heading-color font-weight-bold">Alabama, US</h6>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
                <p className="black-color f-size-14 my-1 light-grey">
                  Alabama Vinyl Banners
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default LocalStoresPage;
