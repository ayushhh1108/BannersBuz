import { Button } from "react-bootstrap";
import RightSideArrowIcon from "../../assets/RightSideArrow";

const RightArrowbtn = ({ text }) => {
  return (
    <a
      href="#"
      className="d-flex card-title align-items-center px-4 rounded py-2 justify-content-around w-fit-content text-light bg-blue-btn"
    >
      <span className="pr-2">{text}</span> <RightSideArrowIcon />
    </a>
  );
};

const OrangeButton = ({ text }) => {
  return (
    <Button variant="outline-primary outline-primary bg-orange border-0 py-1 text-light">
      {text}
    </Button>
  );
};
export { RightArrowbtn, OrangeButton };
