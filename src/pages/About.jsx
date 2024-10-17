import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t border-gray-400">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col lg:flex-row gap-16">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-h-[400px] lg:max-w-[450px] object-cover"
        />
        <div className="flex flex-col justify-center gap-6 lg:w-1/2 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            deleniti soluta officia sed aspernatur itaque, eos recusandae vitae
            explicabo quia laborum sunt tenetur consequatur ex, nostrum
            inventore voluptas. Omnis quisquam harum temporibus, optio quis
            voluptatibus quidem molestias, doloremque ipsam aperiam in veniam
            cupiditate esse aut? Dolorum magnam impedit, nemo officiis facere
            mollitia accusamus iusto asperiores amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            et, cumque inventore animi vel at sunt alias ea. Necessitatibus
            quasi perspiciatis optio atque veniam tempore vitae beatae
            temporibus numquam minima.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            vero, blanditiis dolorem reprehenderit ab nemo modi id dolorum nobis
            corporis fugiat. Aut cupiditate, vel fugit unde obcaecati molestias
            sint error.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col gap-4 mb-8">
        <p className="font-bold italic text-gray-800">
          "Revolutionizing Fashion: Where Imagination Meets Innovation!"
        </p>
        <p className="italic text-gray-600 text-sm">
          In the ever-evolving world of fashion, we stand out by merging
          creativity with cutting-edge technology. Here’s why choosing us is
          your gateway to a transformative fashion experience:
        </p>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-3 text-sm">
        <div className="border border-gray-400 px-10 md:px-16 py-8 lg:py-20 flex flex-col gap-5">
          <b>Immersive Augmented Reality (AR)</b>
          <p className="text-gray-600">
            Step into a new dimension of shopping! Our AR feature allows you to
            visualize designs in real-time, bringing every piece to life right
            before your eyes. No more guessing—experience the magic of trying on
            outfits virtually from the comfort of your home.
          </p>
        </div>
        <div className="border border-gray-400 px-10 md:px-16 py-8 lg:py-20 flex flex-col gap-5">
          <b>Stunning 3D Models</b>
          <p className="text-gray-600">
            Our state-of-the-art 3D modeling transforms your ideas into vibrant,
            lifelike representations. Explore intricate details, textures, and
            designs with unparalleled accuracy, making your fashion choices not
            just informed, but inspired.
          </p>
        </div>
        <div className="border border-gray-400 px-10 md:px-16 py-8 lg:py-20 flex flex-col gap-5">
          <b>Personalized Fit Experience</b>
          <p className="text-gray-600">
            Enjoy a tailor-made experience! With our innovative technology,
            enter your measurements and see how styles fit you perfectly.
            Embrace a fashion journey that celebrates your individuality and
            unique body shape.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-3 text-sm mb-10">
        <div className="border border-gray-400 px-10 md:px-16 py-8 lg:py-20 flex flex-col gap-5">
          <b>Seamless User Interface</b>
          <p className="text-gray-600">
            Designed with you in mind, our platform offers an intuitive and
            engaging interface that makes browsing and selecting designs a joy.
            Navigate effortlessly through collections and discover styles that
            resonate with your personal flair.
          </p>
        </div>
        <div className="border border-gray-400 px-10 md:px-16 py-8 lg:py-20 flex flex-col gap-5">
          <b>Creative Community Connection</b>
          <p className="text-gray-600">
            Join a thriving community of designers and fashion enthusiasts.
            Share your thoughts, explore collaborations, and be part of a
            network that values creativity and innovation.
          </p>
        </div>
        <div className="border border-gray-400 px-10 md:px-16 py-8 lg:py-20 flex flex-col gap-5">
          <b>Sustainable Fashion Forward</b>
          <p className="text-gray-600">
            We champion sustainable practices, ensuring that your fashion
            choices not only look good but also feel good. Our commitment to
            eco-friendly materials and processes sets a new standard in the
            industry.
          </p>
        </div>
      </div>

      <hr className="bg-gray-400 h-[1.6px] mb-4" />

      <div className="mb-20">
        <p className="italic text-gray-600 text-sm font-extralight">
          With us, you’re not just shopping; you’re experiencing a revolution in
          fashion. Embrace the future of style with our AR and 3D model
          features, and let your creativity soar!
        </p>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
