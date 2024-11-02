import { InstagramOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  const { navigate, userInfo } = useContext(ShopContext);
  return (
    <div className="mt-20">
      <div className="flex flex-col gap-4 p-6 md:p-8 border-t border-b border-gray-400">
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
          <div className="flex flex-col lg:w-1/3 gap-6 py-4">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="rounded-full bg-gradient-to-br from-[#4A5942] to-[#9d905a]">
                <img
                  src={assets.favicon_white}
                  alt=""
                  className="h-16 w-16 object-cover p-1"
                />
              </div>
              <span className="font-medium text-2xl text-[#1c1c26]">
                SUNSETSOIRÉE
              </span>
            </div>
            <div className="flex flex-col gap-6">
              <span className="font-medium text-base text-[#1c1c26]">
                EXCLUSIVE BENEFITS
              </span>
              <div className="w-full flex items-center gap-4 bg-white border border-solid border-[#e2e3e4]">
                <input
                  placeholder="Email address"
                  className="w-full px-3 bg-transparent text-[#1c1c26] text-base focus:outline-none"
                />
                <button className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white text-xs sm:text-sm px-4 py-3 w-1/2">
                  SUBSCRIBE
                </button>
              </div>
              <span className="text-xs text-[#656565] uppercase">
                Apply for our free membership to receive exclusive deals, news,
                and events.
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:w-2/3 gap-6 justify-between lg:justify-around">
            <div className="flex flex-col gap-4">
              <span className="font-medium text-xl text-[#1c1c26] uppercase">
                SHOP
              </span>
              <ul className="flex flex-col text-sm gap-4 uppercase navbar">
                <a
                  className="cursor-pointer"
                  onClick={() => navigate("/collection")}
                >
                  All Collections
                </a>
                <a
                  className="cursor-pointer"
                  onClick={() => navigate("/sunblog")}
                >
                  Our Blogs
                </a>
                <a
                  className="cursor-pointer"
                  onClick={() => navigate("/about")}
                >
                  Visit Us
                </a>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-medium text-xl text-[#1c1c26] uppercase">
                EXPLORE
              </span>
              <ul className="flex flex-col text-sm gap-4 uppercase navbar">
                <a
                  className="cursor-pointer"
                  onClick={() => navigate("/about")}
                >
                  About Us
                </a>
                <a
                  className="cursor-pointer"
                  onClick={() =>
                    userInfo ? navigate("/orders") : navigate("/login")
                  }
                >
                  Track My Order
                </a>
                <a>Product Care</a>
              </ul>
            </div>

            <div className="flex flex-col gap-4 uppercase">
              <span className="font-medium text-xl text-[#1c1c26] uppercase">
                MORE
              </span>
              <ul className="flex flex-col text-sm gap-4 uppercase navbar">
                <a
                  className="cursor-pointer"
                  onClick={() =>
                    userInfo ? navigate("/profile") : navigate("/login")
                  }
                >
                  My Account
                </a>
                <a
                  className="cursor-pointer"
                  onClick={() =>
                    userInfo ? navigate("/orders") : navigate("/login")
                  }
                >
                  Shipping Info
                </a>
                <a
                  className="cursor-pointer"
                  onClick={() => navigate("contact")}
                >
                  Contact
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center py-4 border-t border-gray-400">
          <span className="text-sm text-[#1c1c26]">© SUNSETSOIRÉE 2024</span>
          <Link
            to={
              "https://www.instagram.com/sunsetsoiree_fashion?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            }
            className="text-sm text-[#1c1c26] flex items-center gap-2"
          >
            <InstagramOutlined /> INSTAGRAM
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-400">
        <p className="py-5 text-sm text-center text-[#1c1c26]">
          Copyright 2024@ sunsetsoiree.com - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
