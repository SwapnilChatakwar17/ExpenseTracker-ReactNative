import { useState, createContext } from "react";
import {EXPENSES} from "../data/dummyData";
import Expense from "../model/expense";

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: (expenseData) => {},
  editExpense: (id, expenseData) => {},
  deleteExpense: (id) => {},
});

function ExpenseContextProvider({ children }) {
  const [expenses, setExpenses] = useState([...EXPENSES]);

  const addExpense = (expenseData) => {
    // console.log(expenseData);
    expenseData.date = new Date(expenseData.date);
    setExpenses((currentExpenses) => [{id: Math.random()*1000, ...expenseData}, ...currentExpenses]);
  };

  const editExpense = (id, expenseData) => {
    // console.log("In Edit Expense Function");
    expenseData.date = new Date(expenseData.date);
    let data = [...expenses];
    let target = data.findIndex(expense => expense.id === id);
    let editableData = data[target];
    editableData = {...editableData, ...expenseData};
    data[target] = editableData;
    setExpenses(data);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  const value = {
    expense: expenses,
    addExpense: addExpense,
    editExpense: editExpense,
    deleteExpense: deleteExpense,
  };

  return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>;
}

export default ExpenseContextProvider;
