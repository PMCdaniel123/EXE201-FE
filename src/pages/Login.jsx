import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
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
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          placeholder="Name"
          className="w-full px-3 py-2 border border-gray-800"
          required
          {...register("name")}
        />
      )}
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
      <div className="w-full flex justify-between text-sm mt-[-8px]">
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
      <button
        type="submit"
        className="bg-gradient-to-br from-[#4A5942] to-[#9d905a] text-white font-light px-8 py-2 mt-4 w-full hover:bg-gray-800"
      >
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
