import axios from "axios";
import "../index";

export const getAllRecipies = async () => await axios.get("/recipe/list");

export const addRecipe = async (data) => await axios.post(`/recipe/add`, data);

export const updateRecipe = async (data) =>
  await axios.patch(`/recipe/${data.id}`, data);

export const deleteRecipe = async (id) => await axios.delete(`/recipe/${id}`);
