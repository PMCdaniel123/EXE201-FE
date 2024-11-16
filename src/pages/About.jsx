import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl md:text-4xl lg:text-6xl text-center pt-8 border-t border-gray-400">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col lg:flex-row gap-16 md:px-10 max-sm:text-sm">
        <img
          src={assets.default_blog_image}
          alt=""
          className="w-full md:h-full lg:w-3/5 object-cover"
        />
        <div className="flex flex-col justify-center max-sm:px-6 gap-6 lg:w-3/5 text-gray-600">
          <p>
            Sunset Soirée is a creative playground for trendy fashionistas in
            the digital age. We promote the value of timeliness, uniqueness and
            personalization.
          </p>
          <p>
            A place where each designer is free to create their own fashion
            brand. Feel free to share their artistic child with the world.
          </p>
          <p>
            A destination for users who aspire to seek superior perfection,
            outstanding personality and spiritual harmony through each outfit.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-6 lg:px-10 mb-10 text-gray-600 max-sm:text-sm">
        <b className="text-gray-800 font-bold text-base md:text-xl">Mission:</b>
        <p>
          Provide a new fashion business model for young designers who want to
          build a brand with limited resources and a fashion consumption
          solution for customers who aim for novelty, personality and uniqueness
          in fashion.
        </p>
        <b className="text-gray-800 font-bold text-base md:text-xl">Vision:</b>
        <p>
          Become a familiar and prestigious name in the fashion industry,
          especially in the Vietnamese market. We wish to expand a versatile
          ecosystem that provides high-end and in-depth fashion experiences.
        </p>
        <b className="text-gray-800 font-bold text-base md:text-xl">
          Core value:
        </b>
        <div>
          <p>
            Bring practical values ​​to promote the true values ​​of fashion,
            creativity and personalization based on three core development
            points
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              <span className="text-gray-800 font-bold">Human resources:</span>{" "}
              Invest in the intelligence and mental health of human resources to
              enhance their creativity and dedication
            </li>
            <li>
              <span className="text-gray-800 font-bold">Customers:</span> Invest
              in a high-end and complete customer experience
            </li>
            <li>
              <span className="text-gray-800 font-bold">Service:</span>{" "}
              Continuously improve and expand unique and convenient features
            </li>
          </ul>
        </div>
      </div>

      <div className="text-2xl md:text-3xl py-4 px-6 md:px-10">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col gap-4 mb-8 px-6 md:px-10">
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
        <div className="border-t border-b border-gray-400 px-10 py-8 lg:py-10 flex flex-col gap-5">
          <b>Immersive Augmented Reality (AR)</b>
          <p className="text-gray-600">
            Step into a new dimension of shopping! Our AR feature allows you to
            visualize designs in real-time, bringing every piece to life right
            before your eyes. No more guessing—experience the magic of trying on
            outfits virtually from the comfort of your home.
          </p>
        </div>
        <div className="border border-gray-400 px-10 py-8 lg:py-10 flex flex-col gap-5">
          <b>Stunning 3D Models</b>
          <p className="text-gray-600">
            Our state-of-the-art 3D modeling transforms your ideas into vibrant,
            lifelike representations. Explore intricate details, textures, and
            designs with unparalleled accuracy, making your fashion choices not
            just informed, but inspired.
          </p>
        </div>
        <div className="border-t border-b border-gray-400 px-10 py-8 lg:py-10 flex flex-col gap-5">
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
        <div className="border-b border-gray-400 px-10 py-8 lg:py-10 flex flex-col gap-5">
          <b>Seamless User Interface</b>
          <p className="text-gray-600">
            Designed with you in mind, our platform offers an intuitive and
            engaging interface that makes browsing and selecting designs a joy.
            Navigate effortlessly through collections and discover styles that
            resonate with your personal flair.
          </p>
        </div>
        <div className="border-b border-l border-r border-gray-400 px-10 py-8 lg:py-10 flex flex-col gap-5">
          <b>Creative Community Connection</b>
          <p className="text-gray-600">
            Join a thriving community of designers and fashion enthusiasts.
            Share your thoughts, explore collaborations, and be part of a
            network that values creativity and innovation.
          </p>
        </div>
        <div className="border-b border-gray-400 px-10 py-8 lg:py-10 flex flex-col gap-5">
          <b>Sustainable Fashion Forward</b>
          <p className="text-gray-600">
            We champion sustainable practices, ensuring that your fashion
            choices not only look good but also feel good. Our commitment to
            eco-friendly materials and processes sets a new standard in the
            industry.
          </p>
        </div>
      </div>

      <div className="mb-20 px-10">
        <p className="italic text-gray-400 text-sm">
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
