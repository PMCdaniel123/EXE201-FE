import axios from "axios";
import tokenMethod from "./token";
import { BASE_URL } from "../constants/environments";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${tokenMethod.get()?.token}`;
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
