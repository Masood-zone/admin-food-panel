import axios from "axios";
import "../index";

export const registerAdmin = async (data) =>
  await axios.post("/client/register", data);

export const loginAdmin = async (data) =>
  await axios.post("/client/login", data);

export const logoutAdmin = async () => await axios.post("/client/logout");
