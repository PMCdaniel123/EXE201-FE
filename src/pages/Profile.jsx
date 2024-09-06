import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";

const Profile = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"MY"} text2={"PROFILE"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row justify-center gap-10 mb-28">
        <img
          src={assets.contact_img}
          alt=""
          className="w-full md:max-w-[480px]"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">
            Name: NGUYEN VAN A
          </p>
          <p className="text-gray-500">Address: Thu Duc, TP Ho Chi Minh</p>
          <p className="text-gray-500">
            Tel: +1-212-456-7890 <br /> Email: sunsetsoiree@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
