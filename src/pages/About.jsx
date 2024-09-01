import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-1/2 text-gray-600">
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

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus recusandae distinctio quo repellat nam tenetur,
            voluptates vitae et possimus optio id. Fugit mollitia tempora
            aliquam eos, enim suscipit doloribus eaque.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus recusandae distinctio quo repellat nam tenetur,
            voluptates vitae et possimus optio id. Fugit mollitia tempora
            aliquam eos, enim suscipit doloribus eaque.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus recusandae distinctio quo repellat nam tenetur,
            voluptates vitae et possimus optio id. Fugit mollitia tempora
            aliquam eos, enim suscipit doloribus eaque.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
