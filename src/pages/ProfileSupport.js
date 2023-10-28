import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import SubscribeSection from "../components/SecoundLast";
import DashboardSideBaar from "../components/DashboardSidebaar";
import ProfileBox from "../components/ProfileCard";
import supportImg from "../assets/Active Support-amico.svg";
import { Button } from "react-bootstrap";

const ProfileSupportPage = () => {
  return (
    <div>
      <Header upperLineNone={true} />
      <div className="my-5 w-90 d-flex mx-auto justify-content-around">
        <div className="w-15 d-flex flex-wrap">
          <DashboardSideBaar active={7} />
        </div>
        <div className="w-75 text-center">
          <ProfileBox />
          <h2 className="text-left pt-3 mt-5 heading-color mb-4">
            HELP & SUPPORT
          </h2>
          <img src={supportImg} alt="supportImg" className="w-75" />
          <div className="w-50 d-flex mx-auto">
            <Button
              className="f-size-12 px-4 mx-auto w-fit-content"
              variant="primary"
              style={{ backgroundColor: "#4383b8" }}
            >
              HELP WITH MY ORDER
            </Button>
            <Button
              style={{ backgroundColor: "#4383b8" }}
              className="f-size-12 px-4 mx-auto w-fit-content"
              variant="primary"
            >
              TRACK MY ORDER
            </Button>
          </div>
        </div>
      </div>
      <SubscribeSection />
      <Footer />
    </div>
  );
};

export default ProfileSupportPage;
