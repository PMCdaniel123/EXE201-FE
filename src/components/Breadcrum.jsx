import { assets } from "../assets/frontend_assets/assets";

const Breadcrum = ({ product }) => {
  return (
    <div className="md:flex text-gray-500 mb-8 hidden">
      Home <img src={assets.breadcrum_icon} alt="" className="mx-2" />{" "}
      Collection <img src={assets.breadcrum_icon} alt="" className="mx-2" />{" "}
      {product.category}{" "}
      <img src={assets.breadcrum_icon} alt="" className="mx-2" /> {product.name}
    </div>
  );
};

export default Breadcrum;
