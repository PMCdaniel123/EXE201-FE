import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { Spin } from "antd";
import { assets } from "../assets/assets";
import {
  PoweroffOutlined,
  ShopOutlined,
  SnippetsOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {
    setShowSearch,
    navigate,
    userInfo,
    role,
    setRole,
    loading,
    isLoggedIn,
    setIsLoggedIn,
    cart,
    setCart,
  } = useContext(ShopContext);

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("userID");
    Cookies.remove("product_added");
    setIsLoggedIn(false);
    localStorage.removeItem("cart");
    setCart([]);
    setRole("");
    navigate("/");
    toast.success("Logout successfully");
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-between py-4 font-medium px-4 lg:px-10">
      <Link to="/">
        <img src={assets.logo} alt="" className="w-24 lg:w-36" />
      </Link>

      <ul className="hidden md:flex gap-6 lg:gap-16 text-xs lg:text-base text-black navbar">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="lg:text-base">HOME</p>
          <hr className="w-3/4 border-none h-[1.8px] bg-gradient-to-br from-[#4A5942] to-[#9d905a] hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p className="lg:text-base">COLLECTION</p>
          <hr className="w-3/4 border-none h-[1.8px] bg-gradient-to-br from-[#4A5942] to-[#9d905a] hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="lg:text-base">ABOUT</p>
          <hr className="w-3/4 border-none h-[1.8px] bg-gradient-to-br from-[#4A5942] to-[#9d905a] hidden" />
        </NavLink>
        <NavLink to="/sunblog" className="flex flex-col items-center gap-1">
          <p className="lg:text-base">SUNBLOG</p>
          <hr className="w-3/4 border-none h-[1.8px] bg-gradient-to-br from-[#4A5942] to-[#9d905a] hidden" />
        </NavLink>
        {role === "Designer" ? (
          <NavLink to="/design" className="flex flex-col items-center gap-1">
            <p className="lg:text-base">DESIGN</p>
            <hr className="w-3/4 border-none h-[1.8px] bg-gradient-to-br from-[#4A5942] to-[#9d905a] hidden" />
          </NavLink>
        ) : null}
      </ul>

      <div className="flex items-center gap-4 lg:gap-6">
        <Link to="/collection">
          <img
            src={assets.search_icon}
            alt=""
            className="w-4 lg:w-5 cursor-pointer"
            onClick={() => setShowSearch(true)}
          />
        </Link>

        {isLoggedIn && userInfo && (
          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              alt=""
              className="w-4 lg:w-5 cursor-pointer"
            />
            <p className="absolute right-[-5px] bottom-[-5px] w-3 lg:w-4 text-center lg:leading-4 bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white aspect-square rounded-full text-[8px] disabled:bg-gray-400">
              {cart ? cart.length : 0}
            </p>
          </Link>
        )}
        {loading ? (
          <Spin />
        ) : isLoggedIn && userInfo ? (
          <div className="group relative">
            <img
              src={assets.profile_icon}
              alt=""
              className="w-4 lg:w-5 cursor-pointer"
            />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-30 navbar">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <Link to="/profile">
                  <p className="cursor-pointer hover:text-black flex gap-2">
                    <UserOutlined /> Profile
                  </p>
                </Link>
                <Link to="/orders">
                  <p className="cursor-pointer hover:text-black flex gap-2">
                    <ShopOutlined /> Orders
                  </p>
                </Link>
                <Link to="/myblog">
                  <p className="cursor-pointer hover:text-black flex gap-2">
                    <SnippetsOutlined /> My Blogs
                  </p>
                </Link>
                <Link onClick={handleLogout}>
                  <p className="cursor-pointer hover:text-black flex gap-2">
                    <PoweroffOutlined /> Logout
                  </p>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white text-xs sm:text-base px-5 py-3 sm:px-10 sm:py-3"
          >
            Login
          </button>
        )}
        <img
          src={assets.menu_icon}
          alt=""
          className="w-5 cursor-pointer md:hidden"
          onClick={() => setVisible(true)}
        />
      </div>

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-50 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            className="flex items-center justify-start gap-4 p-3 cursor-pointer w-full"
            onClick={() => setVisible(false)}
          >
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/sunblog"
          >
            SUNBLOG
          </NavLink>
          {role === "Designer" ? (
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/design"
            >
              DESIGN
            </NavLink>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
