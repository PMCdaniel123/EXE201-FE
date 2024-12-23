import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div className="px-10">
      <div className="text-center text-2xl pt-10 border-t border-gray-400">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row justify-center gap-10 mb-28">
        <img
          src={assets.contact_img}
          alt=""
          className="w-full md:max-w-[480px]"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">Thu Duc, TP Ho Chi Minh</p>
          <p className="text-gray-500">
            Tel: +1-212-456-7890 <br /> Email: sunsetsoiree@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Sunset Soiree
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="px-8 py-4 text-sm bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
