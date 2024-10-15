import React from "react";
import Title from "./Title";
import { Carousel } from "antd";

const slides = [
  {
    id: 1,
    imageUrl: "/frontend_assets/bg_9.png",
    title: "BBSUNSET",
  },
  {
    id: 2,
    imageUrl: "/frontend_assets/bg_10.png",
    title: "ITOLUSOO",
  },
  {
    id: 3,
    imageUrl: "/frontend_assets/bg_7.png",
    title: "CLAMC",
  },
  {
    id: 4,
    imageUrl: "/frontend_assets/bg_8.avif",
    title: "BANGGER",
  },
];

const PicksSlider = () => {
  return (
    <div className="flex flex-col items-center p-8 my-10">
      <div className="text-center py-8 md:text-4xl lg:text-6xl">
        <Title text1={"SUNSET'S"} text2={"PICKS"} />
      </div>

      <div className="flex items-center justify-center w-full">
        <Carousel autoplay className="w-96 md:w-[76vw]">
          {slides.map((slide, index) => (
            <div key={index} className="w-full text-center relative">
              <div className="w-full h-[300px] lg:h-[500px] overflow-hidden shadow-lg">
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="p-4 text-xl font-extralight absolute bottom-0 text-white bg-black opacity-40">
                {slide.title}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default PicksSlider;
