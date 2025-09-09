import { useState } from "react";
import { addExpense } from "../api";
import { useNavigate } from "react-router-dom";

export default function AddExpenseScreen() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const saveExpense = async () => {
    if (!title.trim()) return setError("Title is required");
    if (amount <= 0) return setError("Amount must be > 0");
    try {
      await addExpense({ title, amount: Number(amount), category });
      navigate("/");
    } catch (e) {
      setError("Failed to save");
    }
  };

  return (
    <div>
      <h2>Add Expense</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Travel</option>
        <option>Utilities</option>
        <option>Other</option>
      </select>
      <button onClick={saveExpense}>Save</button>
    </div>
  );
}
