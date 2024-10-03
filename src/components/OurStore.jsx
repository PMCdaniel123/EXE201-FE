import React from "react";

const OurStore = ({ title1, subTitle1, title2, subTitle2, btnText, image }) => {
  const url = "url('/frontend_assets/" + image + "')";

  return (
    <div className="py-10">
      <div className="relative w-full h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-[#1c1c26] bg-fixed bg-center"
          style={{
            backgroundImage: url,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        <div className="relative flex w-full mx-auto">
          <div className="flex flex-col w-3/5 mr-12 p-12">
            <h1 className="text-6xl text-white font-extrabold uppercase w-4/5">
              {title1}
            </h1>
            <p className="mt-2 text-sm text-[#8F8F8F] uppercase">{subTitle1}</p>
          </div>

          <div className="absolute bottom-0 right-12 bg-white px-6 pt-4 pb-4 flex flex-col w-[360px]">
            <div className="flex items-center justify-between w-full mb-6">
              <h2 className="text-base font-extrabold">{title2}</h2>
            </div>
            <p className="mb-6 text-[#656565]">{subTitle2}</p>
            <div className="w-3/4">
              <button className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-3">
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
