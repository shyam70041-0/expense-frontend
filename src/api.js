// frontend/src/api.js
import axios from "axios";

const base = import.meta.env.VITE_API_URL; // backend URL from env

const API = axios.create({ baseURL: base });

export default API;
export const getExpenses = () => API.get("/expenses"); 
export const addExpense = (data) => API.post("/expenses", data);
