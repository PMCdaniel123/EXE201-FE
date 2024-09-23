import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import { CommentOutlined } from "@ant-design/icons";
import { Rate, Spin } from "antd";
import useGetProductByID from "../hooks/useGetProductByID";

const Product = () => {
  const { productId } = useParams();
  const { currency, addToCart } = useContext(ShopContext);
  const [size, setSize] = useState("");
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const { data: product } = useGetProductByID(productId);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ rating, content });
    setRating(0);
    setContent("");
  };

  console.log(product);

  return (
    <div className="border-t border-gray-400 pt-10">
      <div className=" transition-opacity ease-in duration-500 opacity-100">
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          {/* <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {product.images.map((item, index) => (
                <img
                  src={item}
                  key={index}
                  alt=""
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  onClick={() => setImage(item)}
                />
              ))}
            </div>
            <div className="w-full sm:w-[80%]">
              <img src={image} alt="" className="w-full h-auto" />
            </div>
          </div> */}

          <div className="flex-1">
            <h1 className="font-medium text-2xl mt-2">
              {product?.product_name}
            </h1>
            <div className="flex items-center gap-1 mt-2">
              <img src={assets.star_icon} alt="" className="w-3" />
              <img src={assets.star_icon} alt="" className="w-3" />
              <img src={assets.star_icon} alt="" className="w-3" />
              <img src={assets.star_icon} alt="" className="w-3" />
              <img src={assets.star_dull_icon} alt="" className="w-3" />
              <p className="pl-2">(122)</p>
            </div>
            <p className="mt-5 text-3xl font-medium">
              {currency}
              {product?.price}
            </p>
            <p className="mt-5 text-gray-500 md:w-4/5">
              {product?.description}
            </p>
            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {["S", "M", "L"].map((item, index) => (
                  <button
                    key={index}
                    className={`border py-2 px-4 bg-gray-100 ${
                      item === size ? "border-[#9d905a]" : ""
                    }`}
                    onClick={() => setSize(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <button
              className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white px-8 py-3 text-sm active:bg-gray-700"
              onClick={() => addToCart(product?.id, size)}
            >
              ADD TO CART
            </button>

            <hr className="mt-8 sm:w-4/5" />

            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original Product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex">
            <b className="border px-5 py-3 text-sm">Description</b>
            <p className="border px-5 py-3 text-sm">Reviews (122)</p>
          </div>
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              inventore esse nisi aliquam, quis, dicta aut consectetur velit
              sit, ex quos iure eaque quaerat obcaecati id totam consequuntur
              quod! Est.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              inventore esse nisi aliquam, quis, dicta aut consectetur velit
              sit, ex quos iure eaque quaerat obcaecati id totam consequuntur
              quod! Est.
            </p>
          </div>
        </div>

        <div className="p-6 border mt-10">
          <p className="text-base font-bold mb-6 flex gap-2">
            Comment <CommentOutlined />
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center mt-6 gap-8">
              <p className="text-sm text-gray-500 w-16">Rating:</p>
              <Rate count={5} onChange={setRating} value={rating} />
            </div>
            <div className="flex items-center my-6 gap-8">
              <p className="text-sm text-gray-500 w-16">Review:</p>
              <textarea
                rows={1}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your review here"
                className="p-2 border border-gray-300 focus:outline-none w-full text-sm"
              />
            </div>
            <button
              className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white px-16 py-3 text-sm"
              type="submit"
            >
              POST
            </button>
          </form>
        </div>

        {/* <RelatedProducts
          category={product.category}
          subcategory={product.sub_category}
        /> */}
      </div>
    </div>
  );
};

export default Product;
