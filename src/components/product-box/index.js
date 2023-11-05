import products from "../../assets/468.jpg";
import product2 from "../../assets/470.png";
import tipsImg from "../../assets/Untitled.webp";
import rightArrow from "../../assets/right-arrow.png";
import logo from "../../assets/logo.svg";
import { Button } from "react-bootstrap";
import facebookIcon from "../../assets/facebook.png";
import tweeterIcon from "../../assets/twitter-icon.png";
import mailIcon from "../../assets/mail.png";
import categoryPoster from "../../assets/custom-vinyl.jpg";
import CrossIcon from "../../assets/crossIcon";
import PlusIcon from "../../assets/Plus";
import MinusIcon from "../../assets/Minus";
import { OrangeButton } from "../RightArrowBTN";
import { Link } from "react-router-dom";

const ProductBox = () => {
  return (
    <div className="w-18 cursor-pointer product-box my-3">
      <Link to='/stands-and-displays'>
        <div className="border rounded product-img-box">
          <img src={products} alt="alt" className="w-100" />
        </div>
        <p className="text-center text-dark py-3 f-size-18 mb-0 product-label">
          Custom Flags
        </p>
      </Link>
    </div>
  );
};

const OnHBorderBtnCard = ({ secound }) => {
  return (
    <div className="cursor-pointer product-h-box">
      <div
        className={secound ? "border rounded " : "border rounded card-img-box"}
      >
        <img src={secound ? product2 : products} alt="alt" className="w-100" />
      </div>
      <p className="all-titles text-center py-3 px-1 f-size-16 mb-0 product-label">
        Address Labels / Return Address Labels
      </p>
      <span className="f-size-14 sub-gray-text text-decoration-line-through">
        $7.59
      </span>
      <span className="f-size-18 font-weight-bolder"><strong> $5.42</strong></span>
      <Link to='/stands-and-displays'
        className="d-flex card-title w-100 justify-content-center p-3 costomize-text"
      >
        View Details{" "}
        <img
          src={rightArrow}
          alt="right-arrow"
          className="pl-2 right-arrows"
          style={{ width: "36px" }}
        />
      </Link>
    </div>
  );
};

const TipsSuggetionCard = ({ width }) => {
  return (
    <div
      className={"cursor-pointer text-center " + width}
    >
      <div className={"text-center pt-3"}>
        <img src={tipsImg} alt="alt" className="w-90" />
      </div>
      <p className="text-left pt-3 pb-1 px-1 f-size-16 mb-0 product-label w-90 mx-auto sub-gray-text font-weight-bolder">
        Halloween Is Almost Here: 5 Creative Ways to Celebrate
      </p>
      <p className="w-90 mb-0 f-size-14 text-left mx-auto px-1 font-weight-lighter light-grey">
        Halloween ranks as one of the most consumer-driven holidays in the
        calendar year, second in prominence only to Christmas. Families and
      </p>
      <div className="w-90 d-flex justify-content-between align-items-center mx-auto px-1 my-2 py-2">
        <Link to='/blogs/category/:id'>
          <OrangeButton text="Read more" />
        </Link>
        <span className="f-size-12">SEPTEMBER 15TH, 2023</span>
      </div>
    </div>
  );
};

const AboutBannerCard = () => {
  return (
    <div className="py-1 mt-5">
      <h5 className="py-1 mx-4 light-grey bb-grey mb-4">ABOUT BANNER BUZZ</h5>
      <img src={logo} className="mx-auto w-225px d-block mt-4" alt="logo" />
      <p className="py-1 mx-4 mb-1 sub-gray-text f-size-12 text-center p-2 my-3">
        Design Print Banner, LLC (DBA: bannerbuzz.com) was established with a
        vision to capture online retail markets. With our parent company’s 20+
        years of experience in the sign business and our…
      </p>
      <span
        className="f-size-12 text-center d-block my-2 cursor-pointer"
        style={{ color: "blue" }}
      >
        Read more
      </span>
    </div>
  );
};

const NewsLatterBox = () => {
  return (
    <div
      className="py-3 mt-5 mx-4 text-center rounded"
      style={{ backgroundColor: "aliceblue" }}
    >
      <h5 className="py-1 light-grey bb-grey mb-4 d-inline">Newsletter</h5>
      <p className="py-1 mx-4 mb-1 sub-gray-text f-size-12 text-center px-4 my-3">
        Get Latest News and Updates From BannerBuzz Enter YourEmail Address
      </p>
      <input type="text" className="my-2 d-block mx-auto" />
      <Button variant="primary my-2">SUBSCRIBE</Button>
    </div>
  );
};

const ShopCategoryBox = () => {
  return (
    <div className="mx-4 py-2 mb-1">
      <img src={categoryPoster} className="w-100" alt="img" />
      <p className="py-2 mb-1 light-grey">Vinyl Banners</p>
    </div>
  );
};

const SocialMediaShareBox = () => {
  return (
    <div className="d-flex my-5">
      <span
        className="px-2 py-1 rounded d-flex w-fit-content mr-2 cursor-pointer"
        style={{ backgroundColor: "#1877f2", color: "#fff" }}
      >
        <img
          src={facebookIcon}
          alt="facebook"
          className="mr-1"
          style={{ width: "15px" }}
        />{" "}
        Share 0
      </span>
      <span
        className="px-2 py-1 rounded d-flex w-fit-content mx-2 cursor-pointer"
        style={{ backgroundColor: "#55acee", color: "#fff" }}
      >
        <img
          src={tweeterIcon}
          alt="facebook"
          className="mr-1"
          style={{ width: "20px" }}
        />
        Tweet
      </span>
      <span className="px-2 py-1 rounded d-flex w-fit-content border mx-2 cursor-pointer">
        <img
          src={mailIcon}
          alt="mail"
          className="mr-1"
          style={{ width: "20px" }}
        />{" "}
        Email
      </span>
    </div>
  );
};

const CartItemBox = ({ cartModel }) => {
  return (
    <div className="card rounded-3 mb-4">
      <div className="card-body p-3">{console.log(cartModel, "cartModel")}
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-2 col-lg-2 col-xl-2">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
              className="img-fluid rounded-3"
              alt="Cotton T-shirt"
            />
          </div>
          <div className="col-md-5 col-lg-5 col-xl-5">
            <p className="lead fw-normal mb-1 f-size-16">
              8 ft x 8 ft Step and Repeat Straight Pillow Case Backdrop -
              Graphic
            </p>
            <p>
              <span className="text-muted f-size-12 d-block">
                Size (W X H) : 8 Ft x 8 Ft (FT) | $280.70
              </span>
              <span className="text-muted f-size-12 d-block">
                Side: Single Sided
              </span>
              <span className="text-muted f-size-12 d-block">
                Patterns: 1 Logo Basic
              </span>
            </p>
            {!cartModel ? <table className="w-100 f-size-12">
              <tr>
                <th>Qty:</th>
                <td>2 - 5</td>
                <td>6 - 10</td>
                <td>11 - 15</td>
                <td>16 - 20</td>
                <td>{`> 20`}</td>
              </tr>
              <tr>
                <th>Price:</th>
                <td>$210.53</td>
                <td>$110.53</td>
                <td>$90.53</td>
                <td>$50.53</td>
                <td>$200.53</td>
              </tr>
            </table> : ""}
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 d-flex flex-wrap justify-content-center">
            <p className="w-100 text-center mb-2">Qty</p>
            <button
              className="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
            >
              <MinusIcon />
            </button>

            <input
              id="form1"
              min="0"
              name="quantity"
              value="2"
              type="number"
              className="form-control form-control-sm w-50 text-center"
            />

            <button
              className="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
            >
              <PlusIcon />
            </button>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 text-right">
            <p className="lead fw-normal mb-1 f-size-18">$499.00</p>
            <span className="text-muted f-size-12 d-block">
              Estimated delivery Wed, Nov 8th 2023
            </span>
          </div>
          <div className="text-end w-fit-content">
            <a href="#!" className="text-danger">
              <CrossIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export {
  ProductBox,
  OnHBorderBtnCard,
  TipsSuggetionCard,
  AboutBannerCard,
  NewsLatterBox,
  ShopCategoryBox,
  SocialMediaShareBox,
  CartItemBox
};
