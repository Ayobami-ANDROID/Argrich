import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import accountService from "./accountService";
import { toast } from "react-toastify";

export const getUserProfile = createAsyncThunk(
  "accounts/getUserprofile/",
  async (_, thunkAPI) => {
    try {
      const response = await accountService.getProfile();
      // toast.success("Success");
      return response;
    } catch (error) {
      // toast.error(error.response?.data?.message || "An error occurred");
      console.log(error);
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

export const editUserProfile = createAsyncThunk(
  "accounts/editUserProfile/",
  async (userData, thunkAPI) => {
    secureLocalStorage.clear();
    try {
      const response = await accountService.editProfile(userData);
      // toast.success("Success");
      return response;
    } catch (error) {
      console.log(error.response.data.error);
      // toast.error(error.response?.data.error || "An error occurred");
      return thunkAPI.rejectWithValue(
        error.response?.data || "An error occurred"
      );
    }
  }
);

const authSlice = createSlice({
  name: "account",
  initialState: {
    user: {},
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserProfile.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("action.payload", action.payload);
        state.user = action.payload;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(editUserProfile.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(editUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(editUserProfile.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

// export const { authReset, setToken } = authSlice.actions;
export default authSlice.reducer;
