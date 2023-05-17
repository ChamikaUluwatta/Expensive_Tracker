import React,{ useState} from "react";
import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpenses/NewExpense";

const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 3, 28),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 1, 28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const onAddExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense = {onAddExpenseHandler} />
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
