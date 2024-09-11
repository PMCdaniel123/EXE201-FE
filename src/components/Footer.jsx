import { InstagramOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 mt-20 mb-10">
        <div className="flex justify-between p-8 border border-gray-400">
          <div className="flex flex-col w-1/3 gap-6 p-4">
            <div className="flex items-center gap-3">
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
              <div className="flex items-center gap-4 p-2 bg-white border border-solid border-[#e2e3e4]">
                <input
                  placeholder="EMAIL ADDRESS"
                  className="w-full px-2 py-2 bg-transparent text-[#1c1c26] text-base focus:outline-none"
                />
                <div className="w-1/2">
                  <button className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white text-xs sm:text-sm px-6 py-3">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
              <span className="text-xs text-[#656565] uppercase">
                Apply for our free membership to receive exclusive deals, news,
                and events.
              </span>
            </div>
          </div>

          <div className="flex justify-around w-2/3">
            <div className="flex flex-col gap-4">
              <span className="font-medium text-xl text-[#1c1c26] uppercase">
                SHOP
              </span>
              <ul className="flex flex-col text-sm gap-4 uppercase">
                <li>Men</li>
                <li>Women</li>
                <li>All Collections</li>
                <li>New Arrivals</li>
                <li>Collaboration</li>
                <li>Visit Us</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-medium text-xl text-[#1c1c26] uppercase">
                EXPLORE
              </span>
              <ul className="flex flex-col text-sm gap-4 uppercase">
                <li>About Us</li>
                <li>Track My Order</li>
                <li>Product Care</li>
                <li>Stories</li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 uppercase">
              <span className="font-medium text-xl text-[#1c1c26] uppercase">
                MORE
              </span>
              <ul className="flex flex-col text-sm gap-4 uppercase">
                <li>My Account</li>
                <li>Shipping Info</li>
                <li>Size Guide</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center px-8 py-4 border border-gray-400">
          <span className="text-sm text-[#1c1c26]">© SUNSETSOIRÉE 2024</span>
          <span className="text-sm text-[#1c1c26]">
            <InstagramOutlined /> INSTAGRAM
          </span>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center text-[#1c1c26]">
          Copyright 2024@ sunsetsoiree.com - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
