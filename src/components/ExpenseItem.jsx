export default function ExpenseItem({ expense }) {
  return (
    <div className="expense-item">
      {/* Left section: title + category */}
      <div className="left">
        <div className="title">{expense.title}</div>
        <div className="category">{expense.category}</div>
      </div>

      {/* Right section: amount + date */}
      <div className="right">
        <div className="amount">₹{expense.amount.toFixed(2)}</div>
        <div className="date">
          {new Date(expense.date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </div>
      </div>
    </div>
  );
}
