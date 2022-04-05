import React, { useState } from 'react';
import './Expense.css'
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expense = (props) => {

  const items = props.items;
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    <ExpenseChart expenses={filteredExpenses} />
    <ExpenseList items={filteredExpenses} />
    </Card>
  );
};

export default Expense;