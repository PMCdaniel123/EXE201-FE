import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import axiosInstance from "../utils/axiosInstance";
import Cookies from "js-cookie";
import { Spin } from "antd";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { navigate, setUserInfo, setIsLoggedIn, setCart, setRole } =
    useContext(ShopContext);
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginHandler = async (data) => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.post("/login", data);
      setIsLoading(false);
      const { access_token: token, user } = response;

      Cookies.set("token", token);
      Cookies.set("userID", user.id);

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
      setIsLoading(false);
    }
  };

  const registerHandler = async (data) => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.post("/register", data);
      const { access_token: token, data: user } = response;

      Cookies.set("token", token);
      Cookies.set("userID", user.id);

      const userInfoResponse = await axiosInstance.get(`/users/${user.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUserInfo(userInfoResponse.data);
      setIsLoggedIn(true);
      toast.success("Register successfully");
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      console.log("Register failed: ", error);
      toast.error("Register failed! Please try again");
      setIsLoading(false);
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

      <div className="w-full">
        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 border border-gray-800"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      <div className="w-full">
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 border border-gray-800"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>

      {currentState === "Login" ? (
        ""
      ) : (
        <div className="gap-4 flex flex-col w-full">
          <div>
            <input
              type="text"
              placeholder="Fullname"
              className="w-full px-3 py-2 border border-gray-800"
              {...register("name", { required: "Full name is required" })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Phone"
              className="w-full px-3 py-2 border border-gray-800"
              {...register("phone", {
                required: "Phone number is required",
                minLength: {
                  value: 10,
                  message: "Phone number must be exactly 10 characters",
                },
                maxLength: {
                  value: 10,
                  message: "Phone number must be exactly 10 characters",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Phone number must contain only digits",
                },
              })}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                {errors.phone.message}
              </span>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Address"
              className="w-full px-3 py-2 border border-gray-800"
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && (
              <span className="text-red-500 text-sm">
                {errors.address.message}
              </span>
            )}
          </div>

          <div>
            <select
              className="w-full px-3 py-2 border border-gray-800"
              defaultValue=""
              {...register("gender", {
                required: "Gender is required",
                validate: (value) => value !== "" || "You must select a gender",
              })}
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Men">Male</option>
              <option value="Women">Female</option>
              <option value="Others">Others</option>
            </select>

            {errors.gender && (
              <span className="text-red-500 text-sm">
                {errors.gender.message}
              </span>
            )}
          </div>
        </div>
      )}
      <div className="w-full flex justify-between text-sm mt-[2px]">
        <p>Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            className="cursor-pointer text-[#9d905a]"
            onClick={() => setCurrentState("Sign Up")}
          >
            Create your account
          </p>
        ) : (
          <p
            className="cursor-pointer text-[#9d905a]"
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
            className={`mt-[4px] w-10 h-4 appearance-none cursor-pointer rounded border border-gray-400 transition-colors ${
              checked
                ? "bg-gradient-to-br from-[#4A5942] to-[#9d905a]"
                : "bg-white"
            }`}
          />{" "}
          <span className="text-gray-500 text-sm">
            By providing my phone number and checking this box, I agree to
            receive recurring automated promotional messages. Message and data
            rates may apply.
          </span>
        </p>
      )}
      {isLoading ? (
        <Spin />
      ) : (
        <button
          type="submit"
          className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white font-medium px-8 py-[10px] mt-2 w-full hover:bg-gray-800"
        >
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      )}
    </form>
  );
};

export default Login;
