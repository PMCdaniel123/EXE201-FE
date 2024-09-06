import authReducer from "./reducers/authReducer";
import { configureStore } from "@reduxjs/toolkit";
import { ENV } from "../constants/environments";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: ENV === "development",
});

export default store;
