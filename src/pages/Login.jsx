import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import axiosInstance from "../utils/axiosInstance";
import Cookies from "js-cookie";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { navigate, setUserInfo, setIsLoggedIn, setCart, setRole } =
    useContext(ShopContext);
  const [checked, setChecked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginHandler = async (data) => {
    try {
      const response = await axiosInstance.post("/login", data);
      const { access_token: token, user } = response;

      Cookies.set("token", token, { expires: 1 });
      Cookies.set("userID", user.id, { expires: 1 });

      const userInfoResponse = await axiosInstance.get(`/users/${user.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUserInfo(userInfoResponse.data);
      setIsLoggedIn(true);
      toast.success("Login successfully");
      setCart(userInfoResponse.data.cart);
      setRole(userInfoResponse.data.role);
      navigate("/");
    } catch (error) {
      console.log("Login failed: ", error);
      toast.error("Login failed! Please try again");
    }
  };

  const registerHandler = async (data) => {
    try {
      const response = await axiosInstance.post("/register", data);
      const { access_token: token, data: user } = response;

      Cookies.set("token", token, { expires: 1 });
      Cookies.set("userID", user.id, { expires: 1 });

      const userInfoResponse = await axiosInstance.get(`/users/${user.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUserInfo(userInfoResponse.data);
      setIsLoggedIn(true);
      toast.success("Login successfully");
      navigate("/");
    } catch (error) {
      console.log("Register failed: ", error);
      toast.error("Register failed! Please try again");
    }
  };

  return (
    <form
      className="flex flex-col items-center w-[90%] sm:max-w-[400px] m-auto mt-10 gap-4 text-gray-800"
      onSubmit={
        currentState === "Login"
          ? handleSubmit(loginHandler)
          : handleSubmit(registerHandler)
      }
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <div className="inline-flex items-center gap-2">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
      </div>

      <input
        type="email"
        placeholder="Email"
        className="w-full px-3 py-2 border border-gray-800"
        required
        {...register("email", { required: "Email is required" })}
      />
      {errors.username && (
        <p style={{ color: "red" }}>{errors.username.message}</p>
      )}

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
            placeholder="Fullname"
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
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Others">Others</option>
          </select>
        </div>
      )}
      <div className="w-full flex justify-between text-sm mt-[2px]">
        <p className="cursor-pointer">Forgot your password?</p>
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
            onClick={() => setCurrentState("Login")}
          >
            Login Here
          </p>
        )}
      </div>
      {currentState !== "Login" && (
        <p className="flex gap-2 justify-center items-start w-full">
          <input
            type="checkbox"
            value={"agree"}
            onChange={() => setChecked(!checked)}
            className={`mt-[6px] w-10 h-4 appearance-none cursor-pointer rounded border border-gray-400 transition-colors ${
              checked
                ? "bg-gradient-to-br from-[#4A5942] to-[#9d905a]"
                : "bg-white"
            }`}
          />{" "}
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
