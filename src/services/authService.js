import axiosInstance from "../utils/axiosInstance";
import { BECOME_TO_DESIGNER, LOGIN, REGISTER } from "../constants/environments";

const Login = async (payload) => {
  return axiosInstance.post(LOGIN, payload);
};

const GetProfile = () => {
  return axiosInstance.get(`/users/profile`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
};

const Register = async ({ name, email, password, phone, address, gender }) => {
  try {
    const data = await axiosInstance.post(REGISTER, {
      name,
      email,
      password,
      phone,
      address,
      gender,
    });
    console.log(data);

    return data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const BecomeToDesigner = async ({ user_id, full_name, contact_info, bio }) => {
  try {
    const data = await axiosInstance.post(BECOME_TO_DESIGNER, {
      user_id,
      full_name,
      contact_info,
      bio,
    });
    console.log(data);
    return data.data;
  } catch (error) {
    const errorResponse = error;
    throw new Error(errorResponse.response?.data.message);
  }
};

const AuthManagementAPI = {
  Login,
  GetProfile,
  Register,
  BecomeToDesigner,
};

export default AuthManagementAPI;
