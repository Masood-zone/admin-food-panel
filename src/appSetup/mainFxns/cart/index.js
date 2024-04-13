import axios from "axios";
import "../index";

export const listCart = async () => await axios.get("/order/list");

export const deleteCart = async (data) =>
  await axios.delete(`/order/${data.id}`);

export const updateCart = async (data) =>
  await axios.patch(`/order/${data.id}`, data);
