import products from "../../assets/468.jpg";
import product2 from "../../assets/470.png";
import tipsImg from "../../assets/Untitled.webp";
import rightArrow from "../../assets/right-arrow.png";

const ProductBox = () => {
  return (
    <div className="w-18 cursor-pointer product-box my-3">
      <div className="border rounded">
        <img src={products} alt="alt" className="w-100" />
      </div>
      <p className="text-center py-3 f-size-18 mb-0 product-label">
        Custom Flags
      </p>
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
      <p className="text-center py-3 px-1 f-size-18 mb-0 product-label">
        Address Labels / Return Address Labels
      </p>
      <span className="f-size-14 sub-gray-text text-decoration-line-through">
        $7.59
      </span>
      <span className="f-size-18 font-weight-bolder"> $5.42</span>
      <a
        href="#"
        className="d-flex card-title w-100 justify-content-center p-3 invisible costomize-text"
      >
        View Details{" "}
        <img
          src={rightArrow}
          alt="right-arrow"
          className="pl-2"
          style={{ width: "36px" }}
        />
      </a>
    </div>
  );
};

const TipsSuggetionCard = () => {
  return (
    <div className="cursor-pointer w-24 text-center" style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}>
      <div className={"text-center pt-3"}>
        <img src={tipsImg} alt="alt" className="w-90" />
      </div>
      <p className="text-left pt-3 pb-1 px-1 f-size-16 mb-0 product-label w-90 mx-auto sub-gray-text font-weight-bolder">
        Halloween Is Almost Here: 5 Creative Ways to Celebrate
      </p>
      <p className="w-90 mb-0 f-size-14 text-left mx-auto px-1 font-weight-lighter light-grey">Halloween ranks as one of the most consumer-driven holidays in the calendar year, second in prominence only to Christmas. Families and</p>
      <div className="w-90 d-flex justify-content-between mx-auto px-1 my-2 py-2">
        <span className="f-size-12" style={{color:"blue"}}>Read more</span><span className="f-size-12">SEPTEMBER 15TH, 2023</span>
      </div>
    </div>
  );
};

export { ProductBox, OnHBorderBtnCard, TipsSuggetionCard };
