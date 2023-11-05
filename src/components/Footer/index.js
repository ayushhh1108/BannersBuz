import { Link } from "react-router-dom";
import FacebookIcon from "../../assets/facebookSvg";
import InstagramIcon from "../../assets/instaSvg";
import YoutubeIcon from "../../assets/youtubeSvg";
import SecurityBudgeFooter from "../SecurityBudgeFooter";

const Footer = () => {
  return (
    <div className="container mw-100 m-0 p-0 w-cm mx-auto">
      <footer className=" text-center text-lg-start  w-100 ">
        <div className="container mw-100 p-4 pb-0">
          <div className="row my-4 justify-content-between">
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 f-size-18">Get in touch</h5>
              <ul className="list-unstyled">
                <li>
                  <p>Need help?</p>
                </li>
                <li>
                  <p>800-580-4489</p>
                </li>
                <li>
                  <p>contact@example.com</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 f-size-18">Category</h5>

              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to='/stands-and-displays' className="text-dark f-size-14">
                    Flags
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to='/stands-and-displays' className="text-dark f-size-14">
                    Step and Repeat Displays
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to='/stands-and-displays' className="text-dark f-size-14">
                    Banners
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to='/stands-and-displays' className="text-dark f-size-14">
                    Canopies
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to='/stands-and-displays' className="text-dark f-size-14">
                    Table Covers and Throws
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 f-size-18">Information</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/orderstatus" className="text-dark f-size-14">
                    Order Tracking
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/country" className="text-dark f-size-14">
                    International Shipping
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/reviews" className="text-dark f-size-14">
                    Customer Reviews
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/coupons" className="text-dark f-size-14">
                    Special Offers
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-dark f-size-14">
                    Sitemap
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/stands-and-displays" className="text-dark f-size-14">
                    Safety Signs & Banners
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 f-size-18">Information</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/contact-us" className="text-dark f-size-14">
                    Contact us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/privacy-policy" className="text-dark f-size-14">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/terms-and-conditions" className="text-dark f-size-14">
                    Terms of Use
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/affiliate-program" className="text-dark f-size-14">
                    Affiliate Program
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/local" className="text-dark f-size-14">
                    Areas of Service
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/" className="text-dark f-size-14">
                    Safety Signs & Banners
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 f-size-18">Information</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link to="/faqs" className="text-dark f-size-14">
                    FAQs
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/faqs" className="text-dark f-size-14">
                    Return Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/faqs" className="text-dark f-size-14">
                    Free Design Proofs
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/faqs" className="text-dark f-size-14">
                    Shipping
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/sampal-kit" className="text-dark f-size-14">
                    Sample Kit
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
              <div
                className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
                style={{ width: "150px", height: "150px" }}
              >
                <img
                  src="https://mdbootstrap.com/img/Photos/new-templates/animal-shelter/logo.png"
                  height="70"
                  alt=""
                  loading="lazy"
                />
              </div>

              <p className="text-center">
                Homless animal shelter The budgetary unit of the Capital City of
                Warsaw
              </p>

              <ul className="list-unstyled d-flex flex-row justify-content-center">
                <li>
                  <Link className=" px-2" to="/">
                    <FacebookIcon />
                  </Link>
                </li>
                <li>
                  <Link className=" px-2" to="/">
                    <InstagramIcon />
                  </Link>
                </li>
                <li>
                  <Link className=" ps-2" to="/">
                    <YoutubeIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="text-center p-3 d-flex pt-0"
          style={{ backgroundColor: "gba(0, 0, 0, 0.2)" }}
        >
          <div className="w-25"><SecurityBudgeFooter mainFooter IsCard={true} /></div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
