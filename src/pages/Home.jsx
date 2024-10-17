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
      <div className="w-full my-20">
        <video
          width="100%"
          autoPlay
          loop
          muted
          src="https://res.cloudinary.com/dywbaeo2q/video/upload/v1729150465/EXE101_USP_etdkud.mp4"
        >
          {/* <source
            src="https://res.cloudinary.com/dywbaeo2q/video/upload/v1729150465/EXE101_USP_etdkud.mp4"
            type="video/mp4"
          /> */}
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="mt-40">
        <div className="flex gap-4 lg:flex-row flex-col justify-between items-center w-full">
          <div className="flex flex-col gap-4 w-1/2">
            <p className="font-bold text-gray-800 text-3xl uppercase tracking-wide model3D-text">
              Immersive Augmented Reality (AR)
            </p>
            <p className=" text-gray-600 text-lg">
              Step into a new dimension of shopping! Our AR feature allows you
              to visualize designs in real-time, bringing every piece to life
              right before your eyes. No more guessing—experience the magic of
              trying on outfits virtually from the comfort of your home.
            </p>
          </div>
          <div className="flex w-1/2 border border-gray-400">
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
      {/* <div className="my-20 w-full shadow-lg">
        <iframe
          src="https://viewer.jig.space/?jig=r7EzdYEG&step=1&sbox=1&autoload=1&autoplay=1&stepdelay=5"
          width="100%"
          height="600"
          allow="fullscreen; xr-spatial-tracking;"
          allowFullScreen={true}
          frameBorder="0"
        ></iframe>
        <p className="text-center py-6 text-black">
          <a
            href="https://link.jig.space/sKzdWpYMNJb?utm_medium=embed&utm_campaign=sharing"
            target="_blank"
            style={{ color: "#304de4" }}
          >
            Fashion in augmented reality
          </a>{" "}
          powered by{" "}
          <a
            href="https://www.jig.space?utm_medium=embed&utm_campaign=sharing&utm_content=r7EzdYEG"
            target="_blank"
            style={{ color: "#304de4" }}
          >
            JigSpace
          </a>
        </p>
      </div> */}
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
