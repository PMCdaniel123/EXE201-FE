import { Suspense, useContext } from "react";
import Premium from "../components/Premium";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { Spin } from "antd";
import { assets } from "../assets/assets";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Hailry } from "../../public/Model3d";

const Profile = () => {
  const { userInfo, role, loading } = useContext(ShopContext);

  const onSubmitHandle = (e) => {
    e.preventDefault();
  };

  if (loading) {
    return <Spin />;
  }

  if (!userInfo) {
    return (
      <div className="text-center text-2xl pt-10 border-t border-gray-400">
        <Title text1={"MY"} text2={"PROFILE"} />
      </div>
    );
  }

  return (
    <div className="px-10">
      <div className="text-center text-2xl pt-10 border-t border-gray-400">
        <Title text1={"MY"} text2={"PROFILE"} />
      </div>

      <div className="my-10 flex flex-col lg:flex-row justify-center items-center gap-10 mb-20">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={assets.default_blog_image}
            alt=""
            className="w-full lg:max-w-[500px] md:h-[450px] object-cover shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 gap-10">
          {role === "Designer" && (
            <div className="w-full flex flex-col justify-center items-start gap-6 p-8 border border-gray-400">
              <p className="font-semibold text-xl text-gray-600">
                Designer: {userInfo.designer?.full_name}
              </p>
              <p className="text-gray-800">
                Contact: {userInfo.designer?.contact_info}
              </p>
              <p className="text-gray-800">Bio: {userInfo.designer?.bio}</p>
              {userInfo.user_feature.filter((item) => item.feature_id === 2)
                .length > 0 ? (
                <p className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white px-3 py-2 rounded-lg">
                  Premium Designer
                </p>
              ) : userInfo.user_feature.filter((item) => item.feature_id === 1)
                  .length > 0 ? (
                <p className="bg-black text-white px-3 py-2 rounded-lg">
                  Basic Designer
                </p>
              ) : null}
            </div>
          )}
          <div className="w-full flex flex-col justify-center items-start gap-6 p-8 border border-gray-400">
            <p className="text-gray-800">Name: {userInfo.name}</p>
            <p className="text-gray-800">Address: {userInfo.address}</p>
            <p className="text-gray-800">Tel: {userInfo.phone}</p>
            <p className="text-gray-800">Email: {userInfo.email}</p>
            <p className="text-gray-800">Gender: {userInfo.gender}</p>
            {userInfo.user_feature.filter((item) => item.feature_id === 3)
              .length > 0 ? (
              <p className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white px-3 py-2 rounded-lg">
                Premium
              </p>
            ) : null}
          </div>
        </div>
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
          <div className="mb-20 text-center flex flex-col items-center justify-center">
            <p className="text-2xl font-medium text-gray-800 mt-6">
              Basic Features
            </p>
            <p className="text-gray-500 mt-3 w-4/5 text-center">
              Our design tool offers essential features to streamline your
              creative process. With an intuitive interface, you can easily
              access a variety of templates, customizable fonts, and color
              palettes. Key tools include vector editing, layer management, and
              drag-and-drop functionality for quick adjustments. Real-time
              collaboration allows for seamless teamwork, while export options
              in multiple formats ensure flexibility for all design needs.
              Perfect for designers of all skill levels!
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-8">
              <Premium type={"Basic"} price={"10.80"} time={"3"} />
              <Premium type={"Basic"} price={"20.00"} time={"6"} />
              <Premium type={"Basic"} price={"30.00"} time={"9"} />
              <Premium type={"Basic"} price={"40.00"} time={"12"} />
            </div>
          </div>
          <div className="mb-20 flex flex-col items-center justify-center">
            <p className="text-2xl font-medium text-gray-800 mt-6">
              Premium Features
            </p>
            <p className="text-gray-500 mt-3 w-4/5 text-center">
              Our premium design toolkit unlocks advanced features for
              professional-grade results. Access an extensive library of
              exclusive templates, high-resolution stock images, and advanced
              typography options. Enjoy enhanced editing tools like precision
              alignment, advanced blending modes, and AI-powered background
              removal. With priority customer support and unlimited cloud
              storage, your projects are secure and easily accessible. Perfect
              for designers looking to elevate their work and streamline their
              workflow!
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-8">
              <Premium type={"Premium"} price={"20.00"} time={"3"} />
              <Premium type={"Premium"} price={"36.00"} time={"6"} />
              <Premium type={"Premium"} price={"54.00"} time={"9"} />
              <Premium type={"Premium"} price={"72.00"} time={"12"} />
            </div>
          </div>
        </div>
        <div className="mb-20 flex flex-col items-center justify-center">
          <p className="text-2xl font-medium text-gray-800 mt-6">
            Customer Features
          </p>
          <p className="text-gray-500 mt-3 w-4/5 text-center">
            Our premium plan offers customers exclusive benefits to enhance
            their experience. Enjoy early access to new products, personalized
            recommendations, and faster delivery options. With priority support
            and a dedicated customer service team, your needs are our top
            priority. Plus, members receive special discounts and rewards on
            every purchase. Upgrade to premium and get more out of every
            shopping experience!
          </p>
          <div className="mt-6 flex justify-center gap-8">
            <Premium type={"Customer"} price={"23.52"} time={"12"} />
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
