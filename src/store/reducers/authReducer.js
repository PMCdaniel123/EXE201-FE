import tokenMethod from "../../utils/token";
import { toast } from "react-toastify";
import { authService } from "../../services/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
export const { handleLogout, handleShowModal, handleCloseModal } = actions;
export default authReducer;

export const handleLogin = createAsyncThunk(
  "auth/signin",
  async (payload, thunkApi) => {
    try {
      const loginRes = await authService.login(payload);
      const {
        token: accessToken,
        refreshToken: refreshToken,
        user,
      } = loginRes.data || {};
      tokenMethod.set({
        accessToken,
        refreshToken,
        user,
      });
      toast.success("Login Successfully");
      return true;
    } catch (error) {
      const errorInfo = error?.response?.data;
      if (errorInfo.message === "FAIL") {
        toast.error("Username or password incorrect");
      }
      return thunkApi.rejectWithValue(errorInfo);
    }
  }
);

export const handleGetProfile = createAsyncThunk(
  "auth/getProfile",
  async (_, thunkApi) => {
    if (tokenMethod.get()) {
      try {
        const profileRes = await authService.getProfile();
        return profileRes;
      } catch (error) {
        return thunkApi.rejectWithValue(error?.response?.data);
      }
    }
  }
);
