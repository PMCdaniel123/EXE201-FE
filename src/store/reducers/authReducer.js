import tokenMethod from "../../utils/token";
import { toast } from "react-toastify";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthManagementAPI from "../../services/authService";

const initialState = {
  profile: null,
  loading: {
    login: false,
    getProfile: false,
  },
};

export const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    handleLogout: (state) => {
      tokenMethod.remove();
      state.profile = null;
      toast.success("Logout successfully");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleLogin.fulfilled, (state) => {
        state.loading.login = false;
      })
      .addCase(handleLogin.pending, (state) => {
        state.loading.login = true;
      })
      .addCase(handleLogin.rejected, (state) => {
        state.loading.login = false;
      })

      .addCase(handleGetProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.loading.getProfile = false;
      })
      .addCase(handleGetProfile.pending, (state) => {
        state.loading.getProfile = true;
      })
      .addCase(handleGetProfile.rejected, (state) => {
        state.loading.getProfile = false;
      });
  },
});

const { actions, reducer: authReducer } = authSlice;
export const { handleLogout } = actions;
export default authReducer;

export const handleLogin = createAsyncThunk(
  "/login",
  async (payload, thunkApi) => {
    try {
      const response = await AuthManagementAPI.Login(payload);
      const { access_token: token, user } = response || {};

      tokenMethod.set({
        token,
        user,
      });

      toast.success("Login Successfully");
      return user;
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      return thunkApi.rejectWithValue(errorInfo);
    }
  }
);

export const handleGetProfile = createAsyncThunk(
  "login",
  async (payload, thunkApi) => {
    try {
      const response = await AuthManagementAPI.Login(payload);
      const { user } = response || {};
      return user;
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      return thunkApi.rejectWithValue(errorInfo);
    }
  }
);
