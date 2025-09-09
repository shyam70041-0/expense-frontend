import React, { useEffect, useState } from "react";
import { getExpenses } from "../api";
import ExpenseItem from "../components/Expenseitem";
import "../App.css";

export default function ExpensesScreen() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const res = await getExpenses();
        console.log("API response:", res.data);
        setExpenses(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Error fetching expenses:", err);
        setExpenses([]);
      } finally {
        setLoading(false);
      }
    };
    fetchExpenses();
  }, []);

  return (
    <div className="expenses-screen">
      <h1 className="heading">Expenses</h1>
      {loading ? (
        <p>Loading...</p>
      ) : expenses.length === 0 ? (
        <p>No expenses found</p>
      ) : (
        <div className="expenses-list">
          {expenses.map((exp) => (
            <ExpenseItem key={exp._id || exp.id} expense={exp} />
          ))}
        </div>
      )}
    </div>
  );
}
