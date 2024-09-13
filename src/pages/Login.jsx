import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import Title from "../components/Title";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const [currentGuest, setCurrentGuest] = useState(false);
  const { setUser, navigate } = useContext(ShopContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data) => {
    if (data.email === "cuong@gmail.com") {
      setUser("Customer");
      navigate("/");
    } else if (data.email === "admin@gmail.com") {
      setUser("Designer");
      navigate("/");
    } else {
      reset();
      toast.error("Invalid email");
    }
  };

  return (
    <form
      className="flex flex-col items-center w-[90%] sm:max-w-[400px] m-auto mt-10 gap-4 text-gray-800"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        {currentState !== "Login" && currentGuest ? (
          <div className="inline-flex items-center justify-center gap-2">
            <p className="prata-regular text-3xl">Sign Up </p>
            <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
            <span className="prata-regular p-2 bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white text-sm rounded-lg">
              Designer
            </span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-2">
            <p className="prata-regular text-3xl">{currentState}</p>
            <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
          </div>
        )}
      </div>

      <input
        type="email"
        placeholder="Email"
        className="w-full px-3 py-2 border border-gray-800"
        required
        {...register("email")}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-3 py-2 border border-gray-800"
        required
        {...register("password")}
      />

      {currentState === "Login" ? (
        ""
      ) : (
        <div className="gap-4 flex flex-col w-full">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-3 py-2 border border-gray-800"
            required
            {...register("name")}
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-full px-3 py-2 border border-gray-800"
            required
            {...register("phone")}
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full px-3 py-2 border border-gray-800"
            required
            {...register("address")}
          />
          <select
            className="w-full px-3 py-2 border border-gray-800"
            required
            defaultValue={""}
            {...register("gender")}
          >
            <option value="" disabled>
              Gender
            </option>
            <option value="Man">Man</option>
            <option value="Women">Women</option>
            <option value="Others">Others</option>
          </select>
        </div>
      )}
      <div className="w-full flex justify-between text-sm mt-[2px]">
        {currentState === "Login" ? (
          <p className="cursor-pointer">Forgot your password?</p>
        ) : (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentGuest(!currentGuest)}
          >
            Wanna be a designer?
          </p>
        )}
        {currentState === "Login" ? (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("Sign Up")}
          >
            Create account
          </p>
        ) : (
          <p
            className="cursor-pointer"
            onClick={() => (setCurrentState("Login"), setCurrentGuest(false))}
          >
            Login Here
          </p>
        )}
      </div>
      {currentState !== "Login" && (
        <p className="flex gap-2 justify-center items-start w-full">
          <input type="checkbox" value={"agree"} className="w-6 mt-[6px]" />{" "}
          <span className="text-gray-400">
            By providing my phone number and checking this box, I agree to
            receive recurring automated promotional messages. Message and data
            rates may apply.
          </span>
        </p>
      )}
      <button
        type="submit"
        className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white font-medium px-8 py-[10px] mt-2 w-full hover:bg-gray-800"
      >
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
