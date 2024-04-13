import { createSlice } from "@reduxjs/toolkit";
import { listCartFx, updateCartFx } from "./cartFunc";

const initialState = {
  cartList: [],
  loading: false,
  success: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(listCartFx.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(listCartFx.fulfilled, (state, action) => {
        state.cartList = action.payload;
        state.loading = false;
        state.success = true;
      })
      .addCase(listCartFx.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.msg;
      })
      .addCase(updateCartFx.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCartFx.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateCartFx.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.msg;
      });
  },
});

export const { resetCart } = cartSlice.actions;

export default cartSlice.reducer;
