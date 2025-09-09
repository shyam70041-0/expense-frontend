// frontend/src/screens/AddExpenseScreen.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addExpense } from "../api";
import "../App.css";

export default function AddExpenseScreen() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!title.trim()) return setError("Title cannot be empty");
    if (!(Number(amount) > 0)) return setError("Amount must be > 0");

    try {
      await addExpense({
        title: title.trim(),
        amount: Number(amount),
        category,
        date: date ? new Date(date).toISOString() : new Date().toISOString(),
      });
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Failed to save expense");
    }
  };

  return (
    <div className="form-container">
      <h2>Add Expense</h2>
      {error && <p className="error">{error}</p>}
      <form className="expense-form" onSubmit={handleSubmit}>
        <label>
          Title
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>

        <label>
          Amount (₹)
          <input type="number" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>

        <label>
          Category
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>Food</option>
            <option>Travel</option>
            <option>Utilities</option>
            <option>Other</option>
          </select>
        </label>

        <label>
          Date (optional)
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>

        <button className="btn-primary" type="submit">Save Expense</button>
      </form>
    </div>
  );
}
