import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerAdmin, loginAdmin, logoutAdmin } from "../../mainFxns/admin";

export const registerAdminFx = createAsyncThunk(
  "admin/register",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await registerAdmin(payload);
      return response.data;
    } catch (error) {
      console.log(error);
      if (!error.response) {
        throw error;
      }
      rejectWithValue(error.response);
    }
  }
);

export const loginAdminFx = createAsyncThunk(
  "admin/login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await loginAdmin(payload);
      return response.data;
    } catch (error) {
      console.log(error);
      if (!error.response) {
        throw error;
      }
      rejectWithValue(error.response);
    }
  }
);

export const logoutAdminFx = createAsyncThunk(
  "admin/logout",
  async () => await logoutAdmin()
);
