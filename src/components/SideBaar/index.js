import { Accordion, Offcanvas } from "react-bootstrap";
import scale from "../../assets/scale.png";
import callUs from "../../assets/call-us.svg";
import { Link } from "react-router-dom";
import uk from "../../assets/uk.svg";
import ca from "../../assets/ca.svg";
import au from "../../assets/au.svg";
import nz from "../../assets/nz.svg";
import ind from "../../assets/ind.svg";
import usa from "../../assets/usa.svg";

const SideBaar = ({ open, handleClose, categoryData }) => {
  return (
    <Offcanvas show={open} onHide={handleClose} className="sidebaar-canvas">
      <Offcanvas.Header className="pt-2 pb-1 my-1">
        <div className="d-flex justify-content-between align-items-center w-100">
          <span className="small-sub-text d-flex justify-content-around">
            <img src={callUs} alt="callUs" className="" />
            <p className="mb-0 ml-2">800-580-4489</p>
          </span>
          <div className="dropdown show pr-1">
            <Link
              className="dropdown-toggle text-light"
              to="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src={usa} alt="usa-map" className="small-png" />
            </Link>
            <div
              className="dropdown-menu dropdown-menu-end "
              aria-labelledby="dropdownMenuLink"
              style={{zIndex:9999}}
            >
              <Link className="dropdown-item" to="#">
                {" "}
                <img
                  src={uk}
                  alt="uk-map"
                  className="small-png"
                  width={25}
                />{" "}
                UK{" "}
              </Link>
              <Link className="dropdown-item" to="#">
                {" "}
                <img
                  src={au}
                  alt="au-map"
                  className="small-png"
                  width={25}
                />{" "}
                AU{" "}
              </Link>
              <Link className="dropdown-item" to="#">
                {" "}
                <img
                  src={nz}
                  alt="nz-map"
                  className="small-png"
                  width={25}
                />{" "}
                NZ{" "}
              </Link>
              <Link className="dropdown-item" to="#">
                {" "}
                <img
                  src={ca}
                  alt="ca-map"
                  className="small-png"
                  width={25}
                />{" "}
                CA{" "}
              </Link>
              <Link className="dropdown-item" to="#">
                {" "}
                <img
                  src={ind}
                  alt="ind-map"
                  className="small-png"
                  width={25}
                />{" "}
                IND{" "}
              </Link>
            </div>
          </div>
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
                  <p className="primary-hover mb-1 f-size-14 pl-4 small-sub-text">
                    {subCat}
                  </p>
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
