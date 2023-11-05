import { Accordion, Offcanvas } from "react-bootstrap";
import scale from "../../assets/scale.png";
import callUs from "../../assets/call-us.svg";

const SideBaar = ({ open, handleClose, categoryData }) => {
  return (
    <Offcanvas show={open} onHide={handleClose} style={{ width: "75%" }}>
      <Offcanvas.Header closeButton className="pt-2 pb-1 my-1">
        <div className="d-flex justify-content-between align-items-center w-50 callUsBox">
          <img src={callUs} alt="callUs" className="call-us connect" />
          <span className="small-sub-text">
            Call us
            <p className="mb-0">800-580-4489</p>
          </span>
        </div>
      </Offcanvas.Header>
      <Offcanvas.Body className="pt-0 pb-2 px-0">
        <Accordion className="top-0 sticky-top">
          {categoryData.map((item, index) => (
            <Accordion.Item eventKey={index} className="bb-grey acc-items py-1">
              <Accordion.Header className="mb-1">
                <img
                  src={scale}
                  alt="cat-image"
                  className="mw-100 mx-2"
                  style={{ width: "20px" }}
                />{" "}
                {item.category}
              </Accordion.Header>
              <Accordion.Body>
                {item.subcategories.map((subCat) => (
                  <p className="primary-hover mb-1 f-size-14 pl-4 small-sub-text">{subCat}</p>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
export default SideBaar;
