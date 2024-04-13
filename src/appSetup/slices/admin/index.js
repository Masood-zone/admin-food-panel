import { createSlice } from "@reduxjs/toolkit";
import { registerAdminFx, loginAdminFx } from "./adminFunc";

const admin = JSON.parse(localStorage.getItem("admin"));

const initialState = {
  admin: admin || null,
  adminDetails: [],
  loading: false,
  success: false,
  error: null,
  isAuthenticated: false,
};

export const adminSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    resetData: (state) => {
      state.loading = false;
      state.success = false;
      state.student = null;
      state.studentDetails = [];
      state.isAuthenticated = false;
      localStorage.removeItem("admin");
    },
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAdminFx.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAdminFx.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(registerAdminFx.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.msg;
      })
      .addCase(loginAdminFx.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAdminFx.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.admin = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginAdminFx.rejected, (state, action) => {
        state.loading = false;
        state.adminDetails = [];
        state.error = action.error.msg;
      });
  },
});

export const { reset, resetData } = adminSlice.actions;
export default adminSlice.reducer;
