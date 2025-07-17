// src/api/auth.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const loginUser = (form) => API.post("/api/auth/login", form);
export const registerUser = (form) => API.post("/api/auth/register", form);
