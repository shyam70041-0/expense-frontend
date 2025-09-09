// frontend/src/components/ExpenseItem.jsx
import React from "react";

export default function ExpenseItem({ expense }) {
  return (
    <div className="expense-item">
      <div className="left">
        <div className="title">{expense.title}</div>
        <div className="category">{expense.category}</div>
      </div>
      <div className="right">
        <div className="amount">₹{Number(expense.amount).toFixed(2)}</div>
        <div className="date">
          {new Date(expense.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
        </div>
      </div>
    </div>
  );
}
