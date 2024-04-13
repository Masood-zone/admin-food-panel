import { createSlice } from "@reduxjs/toolkit";
import {
  getAllCategories,
  createCategory,
  updateCategoryFx,
} from "./categoryFunc";

const initialState = {
  categoryList: [],
  loading: false,
  success: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    resetCategory: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categoryList = action.payload.data.cartegories;
        state.loading = false;
        state.success = true;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.msg;
      })
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCategory.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(updateCategoryFx.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCategoryFx.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateCategoryFx.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.msg;
      });
  },
});

export const { resetCategory } = categorySlice.actions;
export default categorySlice.reducer;
