import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import { CommentOutlined } from "@ant-design/icons";
import { Rate, Spin } from "antd";
import useGetProductByID from "../hooks/useGetProductByID";
import useAddToCart from "../hooks/useAddToCart";
import { toast } from "react-toastify";

const Product = () => {
  const { productId } = useParams();
  const { data: product } = useGetProductByID(productId);
  const { currency, role, user, setUser } = useContext(ShopContext);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const addToCart = useAddToCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    setRating(0);
    setContent("");
  };

  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setImage(product.images[0].image_url);
    }
  }, [product]);

  if (!product || Object.keys(product).length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  const handleAddToCart = () => {
    try {
      addToCart.mutate({
        user_id: user.id,
        product_id: productId,
        size: size,
        color: color,
        quantity: "1",
      });
      setUser((prevUser) => ({
        ...prevUser,
        cart: [
          ...prevUser.cart,
          {
            user_id: user.id,
            product_id: productId,
            size: size,
            color: color,
            quantity: "1",
          },
        ],
      }));
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="border-t border-gray-400 pt-10">
      <div className=" transition-opacity ease-in duration-500 opacity-100">
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {product?.images.map((item, index) => (
                <img
                  src={`/src/assets/frontend_assets/${item.image_url}.png`}
                  key={index}
                  alt={product.product_name}
                  className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                  onClick={() => setImage(item.image_url)}
                />
              ))}
            </div>
            <div className="w-full sm:w-[80%]">
              <img
                src={`/src/assets/frontend_assets/${image}.png`}
                alt={product.product_name}
                className="w-full h-auto"
              />
            </div>
          </div>

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
                {product.sizes.map((item, index) => (
                  <button
                    key={index}
                    className={`border-2 py-2 px-4 bg-gray-100 ${
                      item.size === size ? "border-[#9d905a]" : ""
                    }`}
                    onClick={() => setSize(item.size === size ? "" : item.size)}
                  >
                    {item.size}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 my-8">
              <p>Select Color</p>
              <div className="flex gap-2">
                {product.colors.map((item, index) => (
                  <button
                    key={index}
                    className={`border-2 w-10 h-10 py-2 px-4 ${
                      item.color_template === color ? "border-[#9d905a]" : ""
                    }`}
                    onClick={() =>
                      setColor(
                        item.color_template === color ? "" : item.color_template
                      )
                    }
                    style={{ backgroundColor: item.color_template }}
                  ></button>
                ))}
              </div>
            </div>
            <button
              className={`${
                role.length <= 0
                  ? "bg-gray-400"
                  : "bg-gradient-to-br from-[#4A5942] to-[#9d905a]"
              } text-white px-8 py-3 text-sm `}
              onClick={handleAddToCart}
              disabled={role.length <= 0}
            >
              ADD TO CART
            </button>

            <hr className="mt-14 sm:w-4/5 bg-gray-400 h-[2px]" />

            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original Product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex">
            <b className="border border-gray-400 px-5 py-3 text-sm">
              Description
            </b>
            <p className="border border-gray-400 px-5 py-3 text-sm">
              Reviews (122)
            </p>
          </div>
          <div className="flex flex-col gap-4 border border-gray-400 px-6 py-6 text-sm text-gray-500">
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

        <div className="p-6 border border-gray-400 mt-10">
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
                className="p-2 border border-gray-400 focus:outline-none w-full text-sm"
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

        <RelatedProducts
          category={product?.category}
          subcategory={product?.sub_category}
        />
      </div>
    </div>
  );
};

export default Product;
