import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  listCategory,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../../mainFxns/category";

export const getAllCategories = createAsyncThunk(
  "category/list",
  async () => await listCategory()
);

export const createCategory = createAsyncThunk(
  "category/add-category",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await addCategory(payload);
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

export const updateCategoryFx = createAsyncThunk(
  "category/update-category",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await updateCategory(payload);
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

export const deleteCategoryFx = createAsyncThunk(
  "category/delete-category",
  async (payload) => {
    await deleteCategory(payload);
  }
);
