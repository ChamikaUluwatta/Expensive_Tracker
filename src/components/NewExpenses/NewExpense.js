import React,{useState} from "react";

import ExpensesForm from "./ExpensesForm";

import './NewExpense.css';

function NewExpense(props){
    const [isEditing, setIsEditing] = useState(false);

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler} >Add New Expense</button>}
            {isEditing && <ExpensesForm onCancel={stopEditingHandler} onSaveExpenseData={onSaveExpenseDataHandler} />}
        </div>
    );
}

export default NewExpense;