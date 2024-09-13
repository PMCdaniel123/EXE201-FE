import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, user, setUser } =
    useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-4 font-medium">
      <Link to="/">
        <img src={assets.logo} alt="" className="w-36" />
      </Link>

      <ul className="hidden sm:flex gap-4 lg:gap-16 text-xs lg:text-sm text-black">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p className="sm:text-base">HOME</p>
          <hr className="w-3/4 border-none h-[1.8px] bg-[#9d905a] hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p className="sm:text-base">COLLECTION</p>
          <hr className="w-3/4 border-none h-[1.8px] bg-[#9d905a] hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p className="sm:text-base">ABOUT</p>
          <hr className="w-3/4 border-none h-[1.8px] bg-[#9d905a] hidden" />
        </NavLink>
        <NavLink to="/sunblog" className="flex flex-col items-center gap-1">
          <p className="sm:text-base">SUNBLOG</p>
          <hr className="w-3/4 border-none h-[1.8px] bg-[#9d905a] hidden" />
        </NavLink>
        {user === "Designer" ? (
          <NavLink to="/design" className="flex flex-col items-center gap-1">
            <p className="sm:text-base">DESIGN</p>
            <hr className="w-3/4 border-none h-[1.8px] bg-[#9d905a] hidden" />
          </NavLink>
        ) : null}
      </ul>

      <div className="flex items-center gap-6">
        <Link to="/collection">
          <img
            src={assets.search_icon}
            alt=""
            className="w-5 cursor-pointer"
            onClick={() => setShowSearch(true)}
          />
        </Link>

        <Link to="/cart" className="relative">
          <img
            src={assets.cart_icon}
            alt=""
            className="w-5 min-w-5 cursor-pointer"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        {user.length > 0 ? (
          <div className="group relative">
            <img
              src={assets.profile_icon}
              alt=""
              className="w-5 cursor-pointer"
            />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <Link to="/profile">
                  <p className="cursor-pointer hover:text-black">My Profile</p>
                </Link>
                <Link to="/orders">
                  <p className="cursor-pointer hover:text-black">Orders</p>
                </Link>
                <p
                  className="cursor-pointer hover:text-black"
                  onClick={() => setUser("")}
                >
                  Logout
                </p>
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
          className="w-5 cursor-pointer sm:hidden"
          onClick={() => setVisible(true)}
        />
      </div>

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            className="flex items-center gap-4 p-3 cursor-pointer"
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
            to="/contact"
          >
            CONTACT
          </NavLink>
          {user === "Designer" ? (
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
