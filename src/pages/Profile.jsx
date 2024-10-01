import { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import Premium from "../components/Premium";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

const Profile = () => {
  const { user, role } = useContext(ShopContext);

  const onSubmitHandle = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t border-gray-400">
        <Title text1={"MY"} text2={"PROFILE"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row justify-center items-center gap-10 mb-20">
        <div className="w-1/2 flex justify-center">
          <img
            src={assets.contact_img}
            alt=""
            className="w-full md:max-w-[480px]"
          />
        </div>
        <div className="flex flex-col justify-center items-start gap-6 w-1/2 p-8 border border-gray-400">
          {role === "Designer" && (
            <p className="font-semibold text-xl text-gray-600">
              {user.designer.full_name}
            </p>
          )}
          <p className="text-gray-800">Name: {user.name}</p>
          <p className="text-gray-800">Address: {user.address}</p>
          <p className="text-gray-800">Tel: {user.phone}</p>
          <p className="text-gray-800">Email: {user.email}</p>
          <p className="text-gray-800">Gender: {user.gender}</p>
          <div className="flex items-center justify-between mt-6 gap-4 w-full">
            <div className="flex items-center justify-center gap-4">
              <p className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white font-medium px-6 py-3">
                Weight
              </p>
              <p className="text-gray-800">67kg</p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <p className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white font-medium px-6 py-3">
                Height
              </p>
              <p className="text-gray-800">1.7m</p>
            </div>
            <div className="flex items-center justify-center gap-4">
              <p className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white font-medium px-6 py-3">
                IDK
              </p>
              <p className="text-gray-800">...</p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-20">
        <div className="text-center text-3xl p-10">
          <Title text1={"DIGITAL"} text2={"YOU"} />
        </div>
        <img
          src={assets.hero_img}
          alt=""
          className="h-[600px] w-full object-cover"
        />
      </div>

      <div className="text-center mb-10">
        <p className="text-2xl font-medium text-gray-800">Join with us</p>
        <p className="text-gray-500 mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem
          sint quas accusantium eveniet atque repellat placeat assumenda
          dignissimos voluptas, vero facilis eos in pariatur excepturi unde
          optio velit. Delectus!
        </p>
        <form
          onSubmit={onSubmitHandle}
          className="w-full sm:w-1/2 flex items-center mx-auto my-6 border"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-full sm:flex-1 outline-none py-4 px-6"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white text-sm px-10 py-4"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>

      <div className="text-center">
        <div className="pt-10 text-3xl">
          <Title text1={"FEATURES"} text2={"UPDATE"} />
        </div>
        <div>
          <div className="mb-20">
            <p className="text-2xl font-medium text-gray-800 mt-6">
              Basic Features
            </p>
            <p className="text-gray-500 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              dolorem sint quas accusantium eveniet atque repellat placeat
              assumenda dignissimos voluptas, vero facilis eos in pariatur
              excepturi unde optio velit. Delectus!
            </p>
            <div className="mt-6 flex justify-center gap-8">
              <Premium type={"Basic"} price={"270,000"} time={"3"} />
              <Premium type={"Basic"} price={"500,000"} time={"6"} />
              <Premium type={"Basic"} price={"750,000"} time={"9"} />
              <Premium type={"Basic"} price={"1,000,000"} time={"12"} />
            </div>
          </div>
          <div className="mb-20">
            <p className="text-2xl font-medium text-gray-800 mt-6">
              Premium Features
            </p>
            <p className="text-gray-500 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              dolorem sint quas accusantium eveniet atque repellat placeat
              assumenda dignissimos voluptas, vero facilis eos in pariatur
              excepturi unde optio velit. Delectus!
            </p>
            <div className="mt-6 flex justify-center gap-8">
              <Premium type={"Premium"} price={"500,000"} time={"3"} />
              <Premium type={"Premium"} price={"900,000"} time={"6"} />
              <Premium type={"Premium"} price={"1,350,000"} time={"9"} />
              <Premium type={"Premium"} price={"1,800,000"} time={"12"} />
            </div>
          </div>
        </div>
        <div className="mb-20">
          <p className="text-2xl font-medium text-gray-800 mt-6">
            Customer Features
          </p>
          <p className="text-gray-500 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            dolorem sint quas accusantium eveniet atque repellat placeat
            assumenda dignissimos voluptas, vero facilis eos in pariatur
            excepturi unde optio velit. Delectus!
          </p>
          <div className="mt-6 flex justify-center gap-8">
            <Premium type={"Customer"} price={"588,000"} time={"12"} />
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-2xl font-medium text-gray-800">Payment Methods</p>
        <img
          src={assets.payment_icon}
          alt=""
          className="mt-6 mx-auto h-10 text-center"
        />
        <p className="text-sm text-gray-400 mt-2">
          We accept Stripe, Apple Pay, Visa, American Express, Mastercard and
          Paypal
        </p>
      </div>
    </div>
  );
};

export default Profile;
