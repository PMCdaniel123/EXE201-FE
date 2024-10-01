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
import { Suspense } from "react";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { CupModel } from "../components/CupModel";

const Home = () => {
  return (
    <div>
      {/* <Canvas>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <CupModel />
        </Suspense>
        <Environment preset="sunset" />
        <ContactShadows
          position={[0, -0.5, 0]}
          opacity={0.5}
          scale={50}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
      </Canvas> */}
      <Hero />
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
