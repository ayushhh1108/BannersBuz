import products from "../../assets/468.jpg";
import product2 from "../../assets/470.png";
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

const OnHBorderBtnCard = ({secound}) => {
  return (
    <div className="cursor-pointer product-h-box">
      <div className={secound?"border rounded ":"border rounded card-img-box"}>
        <img src={secound?product2:products} alt="alt" className="w-100" />
      </div>
      <p className="text-center py-3 px-1 f-size-18 mb-0 product-label">
      Address Labels / Return Address Labels
      </p>
      <span className="f-size-14 sub-gray-text text-decoration-line-through">$7.59</span><span className="f-size-18 font-weight-bolder"> $5.42</span>
      <a href="#" className="d-flex card-title w-100 justify-content-center p-3 invisible costomize-text">
        View Details{" "}
        <img src={rightArrow} alt="right-arrow" className="pl-2" style={{width:"36px"}} />
      </a>
    </div>
  );
};

export { ProductBox, OnHBorderBtnCard };
