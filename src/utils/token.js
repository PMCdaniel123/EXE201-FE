import Cookies from "js-cookie";
import { STORAGE } from "../constants/storage";

// LocalStorage
export const localToken = {
  get: () => JSON.parse(localStorage.getItem(STORAGE.token)),
  set: (token) => localStorage.setItem(STORAGE.token, JSON.stringify(token)),
  remove: () => localStorage.removeItem(STORAGE.token),
};

// Cookies
export const cookieToken = {
  get: () => {
    const cookieValue = Cookies.get(STORAGE.token);
    return cookieValue !== undefined ? JSON.parse(cookieValue) : null;
  },
  set: (token) => {
    Cookies.set(STORAGE.token, JSON.stringify(token), { path: "/" });
  },
  remove: () => Cookies.remove(STORAGE.token),
};

const tokenMethod = {
  get: () => {
    return cookieToken.get();
  },
  set: (token) => {
    cookieToken.set(token);
  },
  remove: () => {
    cookieToken.remove();
  },
};

export default tokenMethod;
