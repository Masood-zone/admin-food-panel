import { createAsyncThunk } from "@reduxjs/toolkit";
import { listCart, deleteCart, updateCart } from "../../mainFxns/cart";

export const listCartFx = createAsyncThunk(
  "cart/list-cart",
  async () => await listCart()
);

export const updateCartFx = createAsyncThunk(
  "cart/update-cart",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await updateCart(payload);
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

export const deleteCartFx = createAsyncThunk(
  "cart/delete-cart",
  async (payload) => {
    await deleteCart(payload);
  }
);
