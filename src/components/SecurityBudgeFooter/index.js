import { Container } from "react-bootstrap";
import securityBudgeIcon from "../../assets/security-badges.jpg";

const SecurityBudgeFooter = () => {
    return (
      <div className="container mw-100 mt-5 mb-2 p-0">
        <footer className=" text-center text-lg-start  w-100 ">
          <Container
            className="text-center p-3"
            style={{ backgroundColor: "gba(0, 0, 0, 0.2)" }}
          >
            <img src={securityBudgeIcon} alt="security" className="" />
            <p className="f-size-12 py-3">© 2009-2023 bannerbuzz.com All rights reserved.</p>
          </Container>
        </footer>
      </div>
    );
  };
  export default SecurityBudgeFooter;
  