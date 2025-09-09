// frontend/src/screens/ExpensesScreen.jsx
import React, { useEffect, useState } from "react";
import { getExpenses } from "../api";
import ExpenseItem from "../components/ExpenseItem";
import SummaryCard from "../components/SummaryCard";
import "../App.css";

export default function ExpensesScreen() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getExpenses();
        // ensure an array
        setExpenses(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Error fetching expenses:", err);
        setExpenses([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const totalToday = expenses
    .filter((e) => {
      const d = new Date(e.date);
      const now = new Date();
      return d.getFullYear() === now.getFullYear() &&
             d.getMonth() === now.getMonth() &&
             d.getDate() === now.getDate();
    })
    .reduce((s, e) => s + Number(e.amount || 0), 0);

  return (
    <>
      <h1 className="heading">Expenses</h1>
      <SummaryCard total={totalToday} />

      {loading ? (
        <p>Loading...</p>
      ) : expenses.length === 0 ? (
        <p>No expenses found</p>
      ) : (
        <div className="expense-list">
          {expenses.map((exp) => (
            <ExpenseItem key={exp._id || exp.id} expense={exp} />
          ))}
        </div>
      )}
    </>
  );
}
