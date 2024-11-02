import React from "react";

const OurStore = ({ title1, subTitle1, title2, subTitle2, btnText, image }) => {
  const url = "url('/frontend_assets/" + image + "')";

  return (
    <div className="py-10 my-10">
      <div className="relative border-t border-b lg:border-0 border-gray-400 w-full h-[300px] lg:h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-[#1c1c26] bg-fixed bg-center"
          style={{
            backgroundImage: url,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        <div className="relative flex w-full mx-auto">
          <div className="flex flex-col w-4/5 lg:mr-12 p-6 lg:p-12">
            <h1 className="text-base md:text-4xl lg:text-6xl text-white font-extrabold uppercase lg:w-4/5">
              {title1}
            </h1>
            <p className="mt-2 text-xs lg:text-sm text-gray-300 uppercase">
              {subTitle1}
            </p>
          </div>

          <div className="lg:absolute lg:bottom-0 lg:right-12 bg-white px-4 md:px-6 pt-4 lg:pb-4 flex flex-col w-[360px]">
            <div className="flex items-center justify-between w-full mb-6">
              <h2 className="text-base font-extrabold">{title2}</h2>
            </div>
            <p className="mb-6 text-gray-400 text-xs lg:text-base">
              {subTitle2}
            </p>
            <div className="w-3/4 max-sm:mb-4">
              <button className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white text-xs md:text-sm px-3 py-2 md:px-4 md:py-3">
                {btnText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStore;
