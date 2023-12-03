import { Button } from "react-bootstrap";
import RightSideArrowIcon from "../../assets/RightSideArrow";

const RightArrowbtn = ({ text }) => {
  return (
    <a
      href="#"
      className="d-flex card-title align-items-center px-3 rounded py-2 justify-content-around w-fit-content text-light bg-blue-btn"
    >
      <span className="pr-2 f-size-16">{text}</span> <RightSideArrowIcon />
    </a>
  );
};

const OrangeButton = ({ text }) => {
  return (
    <Button
      variant="outline-primary outline-primary bg-orange border-0 text-light shop-now-btn"
      style={{ padding: "10px 20px" }}
    >
      {text}
    </Button>
  );
};
export { RightArrowbtn, OrangeButton };
