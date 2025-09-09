import axios from "axios";



const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000/api",
});

export default API;


export const getExpenses = () => API.get("/expenses");
export const addExpense = (data) => API.post("/expenses", data);
