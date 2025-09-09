import React, { useState } from "react";
import { addExpense } from "../api";

export default function AddExpenseScreen() {
  const [form, setForm] = useState({ title: "", amount: "", category: "Food" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addExpense(form);
      alert("Expense added!");
    } catch (err) {
      console.error("Error adding expense:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />
      <select
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      >
        <option>Food</option>
        <option>Travel</option>
        <option>Utilities</option>
        <option>Other</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
}
