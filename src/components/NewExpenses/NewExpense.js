import React from "react";

import ExpensesForm from "./ExpensesForm";

import './NewExpense.css';

function NewExpense(props){
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpensesForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;