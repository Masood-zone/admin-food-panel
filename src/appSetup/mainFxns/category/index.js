import axios from "axios";
import "../index";

export const listCategory = async () => await axios.get("/category/list");

export const addCategory = async (data) =>
  await axios.post(`/category/add`, data);

export const updateCategory = async (data) =>
  await axios.patch(`/category/${data.id}`, data);

export const deleteCategory = async (id) =>
  await axios.delete(`/category/${id}`);
