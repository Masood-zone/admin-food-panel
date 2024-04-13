import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllRecipies,
  addRecipe,
  deleteRecipe,
  updateRecipe,
} from "../../mainFxns/recipie/index";

export const getAllRecipiesFx = createAsyncThunk(
  "recipe/recipe-list",
  async () => await getAllRecipies()
);

export const createRecipe = createAsyncThunk(
  "recipe/add-recipe",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await addRecipe(payload);
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

export const updateRecipeFx = createAsyncThunk(
  "recipe/update-recipe",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await updateRecipe(payload);
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

export const deleteRecipeFx = createAsyncThunk(
  "recipe/delete-recipe",
  async (payload) => {
    await deleteRecipe(payload);
  }
);
