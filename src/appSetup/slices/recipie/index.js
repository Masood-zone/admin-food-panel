import { createSlice } from "@reduxjs/toolkit";
import { createRecipe, getAllRecipiesFx, updateRecipeFx } from "./recipieFunc";

const initialState = {
  recipeList: [],
  loading: false,
  success: false,
  error: null,
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    resetRecipe: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllRecipiesFx.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllRecipiesFx.fulfilled, (state, action) => {
        state.recipeList = action.payload;
        state.loading = false;
        state.success = true;
      })
      .addCase(getAllRecipiesFx.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.msg;
      })
      .addCase(createRecipe.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createRecipe.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createRecipe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.msg;
      })
      .addCase(updateRecipeFx.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateRecipeFx.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateRecipeFx.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.msg;
      });
  },
});

export const { resetRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
