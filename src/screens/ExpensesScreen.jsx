import { useEffect, useState } from "react";
import { getExpenses } from "../api";
// import ExpenseItem from "../components/ExpenseItem";
import ExpenseItem from "../components/Expenseitem";
import SummaryCard from "../components/SummaryCard";
import { useNavigate } from "react-router-dom";

export default function ExpensesScreen() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getExpenses().then((res) => {
      setExpenses(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <SummaryCard expenses={expenses} />
      <button onClick={() => navigate("/add")}>Add Expense</button>
      <div>
        {expenses.map((e) => (
          <ExpenseItem key={e._id} expense={e} />
        ))}
      </div>
    </div>
  );
}
