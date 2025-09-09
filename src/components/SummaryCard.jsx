export default function SummaryCard({ expenses }) {
  const today = new Date();
  const total = expenses
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
      <h3>Total spent today: ₹{total}</h3>
    </div>
  );
}
