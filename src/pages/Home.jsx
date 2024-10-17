import BestSeller from "../components/BestSeller";
import FeatureCollections from "../components/FeatureCollections";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import NewsletterBox from "../components/NewsletterBox";
import OurPolicy from "../components/OurPolicy";
import OurStore from "../components/OurStore";
import PicksSlider from "../components/PicksSlider";
import Trending from "../components/Trending";

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
