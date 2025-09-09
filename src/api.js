import axios from "axios";

// Agar backend localhost pe run ho raha hai
const API = axios.create({ baseURL: "http://localhost:4000/api" });

export const getExpenses = () => API.get("/expenses");
export const addExpense = (data) => API.post("/expenses", data);
