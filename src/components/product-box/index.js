import products from "../../assets/468.jpg";

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
export default ProductBox;