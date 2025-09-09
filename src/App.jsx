import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExpensesScreen from "./screens/ExpensesScreen";
import AddExpenseScreen from "./screens/AddExpenseScreen";
import "./App.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExpensesScreen />} />
        <Route path="/add" element={<AddExpenseScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
