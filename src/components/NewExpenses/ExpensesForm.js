import React, { useState } from "react";

import "./ExpensesForm.css";

const ExpensesForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enterdate, setenterdate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setenterdate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enterdate),
    };
    
    props.onSaveExpenseData(expenseData);
    props.onCancel();

    setEnteredAmount("");
    setEnteredTitle("");
    setenterdate("");
  };

  const onClickCancleHandler = (event) => {
    event.preventDefault();
    props.onCancel();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enterdate} min="2023-01-01" max="2024-01-01" onChange={dateChangeHandler}/>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button type="button" onClick={onClickCancleHandler} >Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default ExpensesForm;
