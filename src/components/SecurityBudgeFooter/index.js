import { Container } from "react-bootstrap";
import securityBudgeIcon from "../../assets/security-badges.jpg";
import cardsIcon from "../../assets/credit-card-logo-clipart.png";

const SecurityBudgeFooter = ({IsCard,mainFooter}) => {
    return (
      <div className={mainFooter?"container mw-100 mt-0 mb-2 p-0":"container mw-100 mt-5 mb-2 p-0"}>
        <footer className=" text-center text-lg-start  w-100 ">
          <Container
            className={mainFooter?"text-center p-3 pt-0":"text-center p-3"}
            style={{ backgroundColor: "gba(0, 0, 0, 0.2)" }}
          >{IsCard?
            <img src={cardsIcon} alt="security" style={{maxWidth:"200px"}} className="" />:
            <img src={securityBudgeIcon} alt="security" className="" />}
            <p className="f-size-12 py-3">© 2009-2023 bannerbuzz.com All rights reserved.</p>
          </Container>
        </footer>
      </div>
    );
  };
  export default SecurityBudgeFooter;
  