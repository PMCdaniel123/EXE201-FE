import { Suspense, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import RelatedProducts from "../components/RelatedProducts";
import { Image, Spin } from "antd";
import useGetProductByID from "../hooks/useGetProductByID";
import { toast } from "react-toastify";
import axiosInstance from "../utils/axiosInstance";
import { assets } from "../assets/assets";
import { useForm } from "react-hook-form";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { REMModel } from "../../public/REM.jsx";
import { EllaModel } from "../../public/Ella.jsx";
import { ShifaModel } from "../../public/Shifa.jsx";
import { MaxModel } from "../../public/Max.jsx";
import { JohnModel } from "../../public/John.jsx";
import { BarryModel } from "../../public/Barry.jsx";
import Title from "../components/Title";

const Product = () => {
  const { productId } = useParams();
  const { data: product } = useGetProductByID(productId);
  const { currency, userInfo, setCart } = useContext(ShopContext);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading1, setIsLoading1] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userFeatures, setUserFeatures] = useState([]);

  useEffect(() => {
    if (userInfo) {
      setUserFeatures(userInfo?.user_feature);
    }
  }, [userInfo]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setImage(product.images[0].image_url);
    }
  }, [product]);

  if (!product || Object.keys(product).length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin />
      </div>
    );
  }

  const handleAddToCart = async (e) => {
    e.preventDefault();
    try {
      if (!size) {
        toast.error("Please select a size");
        return;
      }
      if (!color) {
        toast.error("Please select a color");
        return;
      }

      setIsLoading(true);
      const response = await axiosInstance.post("/carts", {
        user_id: userInfo.id,
        product_id: productId,
        size: size,
        color: color,
        quantity: "1",
      });

      setCart((prevCart) => [...prevCart, response.data]);
      toast.success("Product added to cart");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  const handleCreate3D = async (data) => {
    const submittedData = {
      bust: Number(data.bust),
      waist: Number(data.waist),
      hips: Number(data.hips),
      weight: Number(data.weight),
      height: Number(data.height),
      user_id: userInfo.id + "",
      product_id: productId,
    };
    try {
      setIsLoading1(true);
      await axiosInstance.post("/model-3d", submittedData);
      setIsLoading1(false);
      reset();
      toast.success(
        "3D model created successfully. Please check your email after 24 hours"
      );
    } catch (error) {
      console.log(error);
      setIsLoading1(false);
    }
  };

  return (
    <div className="border-t border-gray-400 pt-10 px-6 md:px-10">
      <div className=" transition-opacity ease-in duration-500 opacity-100">
        <div className="flex gap-12 sm:gap-12 flex-col lg:flex-row">
          <div className="flex-1 flex flex-col-reverse gap-3 lg:flex-row">
            <div className="flex flex-row lg:flex-col lg:w-1/5 lg:h-[640px] overflow-x-scroll lg:overflow-x-auto lg:overflow-y-scroll justify-start gap-2 lg:gap-0 lg:justify-normal">
              {product?.images.map((item, index) => (
                <img
                  src={item.image_url}
                  key={index}
                  alt={product.product_name}
                  className="lg:w-[100%] w-24 md:h-40 lg:h-32 sm:mb-3 flex-shrink-0 cursor-pointer object-cover"
                  onClick={() => setImage(item.image_url)}
                />
              ))}
            </div>
            <div className="w-full lg:w-4/5 h-auto">
              <Image
                width={"100%"}
                height={"auto"}
                src={image}
                className="object-cover"
              />
              {userFeatures.filter((item) => item.feature_id === 3).length >
                0 && (
                <button
                  className={`${
                    !userInfo
                      ? "bg-gray-400"
                      : "bg-gradient-to-br from-[#4A5942] to-[#9d905a]"
                  } text-white px-8 py-3 text-sm md:text-xl mt-2 w-full`}
                  onClick={() => setShowModal(!showModal)}
                  disabled={!userInfo}
                >
                  CREATE 3D MODEL
                </button>
              )}
            </div>
          </div>

          <div className="flex-1">
            {product?.sale && (
              <div className="mb-6 mt-2">
                <span className="text-white top-2 left-2 py-3 px-5 text-sm bg-gradient-to-br from-[#4A5942] to-[#9d905a] rounded-lg">
                  {Number(product?.sale)
                    ? Number(product?.sale).toFixed(0)
                    : "0"}
                  % OFF
                </span>
              </div>
            )}
            <h1 className="font-medium text-2xl md:text-3xl mt-2">
              {product?.product_name}
            </h1>
            <div className="flex items-center gap-1 mt-2">
              <img src={assets.star_icon} alt="" className="w-3" />
              <img src={assets.star_icon} alt="" className="w-3" />
              <img src={assets.star_icon} alt="" className="w-3" />
              <img src={assets.star_icon} alt="" className="w-3" />
              <img src={assets.star_dull_icon} alt="" className="w-3" />
            </div>
            <Link
              to={`/designer-info/${product?.designer.id}`}
              className="flex items-center gap-2 mt-5 cursor-pointer"
            >
              <img
                src={assets.default_blog_image}
                alt="avatar"
                className="w-8 h-8 rounded-full"
              />
              <p>{product?.designer.full_name}</p>
            </Link>
            {product?.sale ? (
              <div className="flex items-center gap-2 md:px-2 pb-2 mt-5">
                <span className="text-xl md:text-3xl font-medium text-black">
                  {currency}
                  {product?.price}
                </span>
                <span className="text-base md:text-xl text-gray-400 line-through decoration-[#FF0909]">
                  {currency}
                  {(
                    product?.price *
                    ((100 + Number(product?.sale)) / 100)
                  ).toFixed(2)}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2 md:px-2 pb-2 mt-5">
                <span className="text-2xl md:text-3xl font-medium text-black">
                  {currency}
                  {product?.price}
                </span>
              </div>
            )}
            <p className="mt-5 text-gray-500 md:w-4/5 w-full text-sm">
              {product?.description}
            </p>
            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>
              <div className="flex gap-2">
                {product?.sizes.map((item, index) => (
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
                {product?.colors.map((item, index) => (
                  <button
                    key={index}
                    className={`border-2 w-10 h-10 py-2 px-4 ${
                      item.color_name === color ? "border-[#9d905a]" : ""
                    }`}
                    onClick={() =>
                      setColor(item.color_name === color ? "" : item.color_name)
                    }
                    style={{ backgroundColor: item.color_name }}
                  ></button>
                ))}
              </div>
            </div>
            {isLoading ? (
              <Spin />
            ) : (
              <button
                className={`${
                  !userInfo
                    ? "bg-gray-400"
                    : "bg-gradient-to-br from-[#4A5942] to-[#9d905a]"
                } text-white px-8 py-3 text-sm `}
                onClick={handleAddToCart}
                disabled={!userInfo}
              >
                ADD TO CART
              </button>
            )}

            <hr className="mt-14 sm:w-4/5 bg-gray-400 h-[2px]" />

            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original Product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 30 days.</p>
            </div>
          </div>
        </div>

        {showModal && (
          <div className="max-w-md mx-auto mt-20 p-6 bg-inherit shadow-lg rounded-md">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-center">
                Enter Your Measurements
              </h2>
              <form
                onSubmit={handleSubmit(handleCreate3D)}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="bust"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Bust (cm)
                  </label>
                  <input
                    id="bust"
                    type="number"
                    {...register("bust", {
                      required: "Bust is required",
                      min: {
                        value: 0,
                        message: "Bust measurement must be at least 0 cm",
                      },
                    })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="Bust"
                  />
                  {errors.bust && (
                    <span className="text-red-500 text-sm">
                      {errors.bust.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="waist"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Waist (cm)
                  </label>
                  <input
                    id="waist"
                    type="number"
                    {...register("waist", {
                      required: "Waist is required",
                      min: {
                        value: 0,
                        message: "Waist measurement must be at least 0 cm",
                      },
                    })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="Waist"
                  />
                  {errors.waist && (
                    <span className="text-red-500 text-sm">
                      {errors.waist.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="hips"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Hips (cm)
                  </label>
                  <input
                    id="hips"
                    type="number"
                    {...register("hips", {
                      required: "Hips are required",
                      min: {
                        value: 0,
                        message: "Hips measurement must be at least 0 cm",
                      },
                    })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="Hips"
                  />
                  {errors.hips && (
                    <span className="text-red-500 text-sm">
                      {errors.hips.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="weight"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Weight (kg)
                  </label>
                  <input
                    id="weight"
                    type="number"
                    {...register("weight", {
                      required: "Weight is required",
                      min: {
                        value: 0,
                        message: "Weight measurement must be at least 0 cm",
                      },
                    })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="Weight"
                  />
                  {errors.weight && (
                    <span className="text-red-500 text-sm">
                      {errors.weight.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="height"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Height (cm)
                  </label>
                  <input
                    id="height"
                    type="number"
                    {...register("height", {
                      required: "Height is required",
                      min: {
                        value: 0,
                        message: "Height measurement must be at least 0 cm",
                      },
                    })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="Height"
                  />
                  {errors.height && (
                    <span className="text-red-500 text-sm">
                      {errors.height.message}
                    </span>
                  )}
                </div>

                {isLoading1 ? (
                  <Spin />
                ) : (
                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full py-2 px-4 bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white font-semibold rounded-md"
                    >
                      Submit
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        )}

        {userFeatures.filter((item) => item.feature_id === 3).length > 0 &&
          size.length > 0 && (
            <div className="w-full my-40 flex flex-col items-center gap-10">
              <div className="text-2xl md:text-4xl lg:text-6xl uppercase">
                <Title text1={"DIGITAL"} text2={"ON YOU"} />
              </div>
              <div className="flex w-full my-20">
                <Canvas camera={{ near: 0.01, far: 50 }}>
                  <ambientLight />
                  <OrbitControls />
                  <Suspense fallback={null}>
                    {userInfo.gender === "Men" && size === "M" && (
                      <JohnModel position={[0, -1, 0]} />
                    )}
                    {userInfo.gender === "Men" && size === "L" && (
                      <MaxModel position={[0, -1, 0]} />
                    )}
                    {userInfo.gender === "Men" && size === "XL" && (
                      <BarryModel position={[0, -1, 0]} />
                    )}
                    {userInfo.gender === "Women" && size === "M" && (
                      <EllaModel position={[0, -1, 0]} />
                    )}
                    {userInfo.gender === "Women" && size === "L" && (
                      <REMModel position={[0, -1, 0]} />
                    )}
                    {userInfo.gender === "Women" && size === "XL" && (
                      <ShifaModel position={[0, -1, 0]} />
                    )}
                  </Suspense>
                  <Environment preset="sunset" />
                  <ContactShadows
                    position={[0, -1, 0]}
                    opacity={0.5}
                    scale={50}
                    blur={1}
                    far={10}
                    resolution={256}
                    color="#000000"
                  />
                </Canvas>
              </div>
            </div>
          )}

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

        <RelatedProducts
          category={product?.category}
          subcategory={product?.sub_category}
        />
      </div>
    </div>
  );
};

export default Product;
