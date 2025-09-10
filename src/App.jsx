// frontend/src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ExpensesScreen from "./screens/ExpensesScreen";
import AddExpenseScreen from "./screens/AddExpenseScreen";
import "./App.css";


console.log("Backend URL:", import.meta.env.VITE_API_URL);


export default function App() {
  return (
    <Router>
      <div className="navbar">
        <h1>Expense Tracker</h1>
        <div className="links">
          <Link to="/">Expenses</Link>
          <Link to="/add">Add Expense</Link>
        </div>
      </div>

      <div className="expenses-container">
        <Routes>
          <Route path="/" element={<ExpensesScreen />} />
          <Route path="/add" element={<AddExpenseScreen />} />
        </Routes>
      </div>
    </Router>
  );
}
