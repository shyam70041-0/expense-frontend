// frontend/src/components/SummaryCard.jsx
import React from "react";

export default function SummaryCard({ expenses = [], total: propTotal }) {
  const today = new Date();

  // If total prop is passed, use it; otherwise, calculate from expenses
  const total =
    propTotal !== undefined
      ? propTotal
      : expenses
          .filter((e) => {
            const d = new Date(e.date);
            return (
              d.getDate() === today.getDate() &&
              d.getMonth() === today.getMonth() &&
              d.getFullYear() === today.getFullYear()
            );
          })
          .reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="summary-card">
      Total Spent Today: ₹{Number(total).toFixed(2)}
    </div>
  );
}
