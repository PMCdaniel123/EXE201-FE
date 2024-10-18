import BestSeller from "../components/BestSeller";
import FeatureCollections from "../components/FeatureCollections";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import NewsletterBox from "../components/NewsletterBox";
import OurPolicy from "../components/OurPolicy";
import OurStore from "../components/OurStore";
import PicksSlider from "../components/PicksSlider";
import Trending from "../components/Trending";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Hailry } from "../../public/Model3d";
import { Suspense } from "react";
import Title from "../components/Title";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="w-full my-40 flex flex-col items-center gap-10">
        <p className="font-extrabold text-gray-800 text-6xl uppercase tracking-wide model3D-text">
          MEET OUR MODELS
        </p>
        <video
          width="100%"
          autoPlay
          loop
          muted
          src="https://res.cloudinary.com/dywbaeo2q/video/upload/v1729226169/EXE101_USP_-_1_aham5j.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="w-full my-40 flex flex-col items-center gap-10">
        <p className="font-extrabold text-gray-800 text-6xl uppercase tracking-wide model3D-text">
          CHOOSE YOUR WEAR
        </p>
        <video
          width="100%"
          autoPlay
          loop
          muted
          src="https://res.cloudinary.com/dywbaeo2q/video/upload/v1729226168/EXE101_USP_-_2_vithyi.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="w-full my-40 flex flex-col items-center gap-10">
        <p className="font-extrabold text-gray-800 text-6xl uppercase tracking-wide model3D-text">
          USE YOUR OWN FACE
        </p>
        <video
          width="100%"
          autoPlay
          loop
          muted
          src="https://res.cloudinary.com/dywbaeo2q/video/upload/v1729226164/EXE101_USP_-_3_qsqviq.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="mt-40">
        <div className="flex gap-4 lg:flex-row flex-col justify-between items-center w-full">
          <div className="flex flex-col gap-10 w-1/2">
            <p className="font-extrabold text-gray-800 text-4xl uppercase tracking-wide model3D-text">
              Immersive Augmented Reality (AR)
            </p>
            <p className=" text-gray-600 text-sm italic">
              Step into a new dimension of shopping! Our AR feature allows you
              to visualize designs in real-time, bringing every piece to life
              right before your eyes. No more guessing—experience the magic of
              trying on outfits virtually from the comfort of your home.
            </p>
            <button className="max-sm:w-full bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white text-xs sm:text-sm px-5 py-3 sm:px-10 sm:py-4">
              EXPLORE NOW
            </button>
          </div>
          <div className="flex w-1/2">
            <Canvas camera={{ near: 0.01, far: 50 }}>
              <ambientLight />
              <OrbitControls />
              <Suspense fallback={null}>
                <Hailry position={[0, -0.5, 0]} />
              </Suspense>
              <Environment preset="sunset" />
              <ContactShadows
                position={[0, -2.5, 0]}
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
      </div>

      <PicksSlider />
      <Trending />
      <FeatureCollections />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
      <OurStore
        title1={"THE BACKING OF YOUR PROJECTS"}
        subTitle1={"A TEAM AT YOUR DEMANDS"}
        title2={"OUR TEAM"}
        subTitle2={"Get ready to discover our finest fashion operators"}
        btnText={"CHECK OUT NOW"}
        image={"bg_1.jpg"}
      />
      <OurStore
        title1={"BEGIN YOUR JOURNEY NOW!"}
        subTitle1={"JOIN THE FAMILY AND PUBLISH YOUR EXCLUSIVE DESIGNS"}
        title2={"OUR WORLD"}
        subTitle2={
          "Get ready to discover your favorite wear at its finest – visit our store today."
        }
        btnText={"EMBARK"}
        image={"bg_2.png"}
      />
    </div>
  );
};

export default Home;
