import React from 'react'
import './ExpenseForm.css'
const ExpenseForm = () => {
    function submitHandler(e){
        console.log(1);
       e.preventDefault();
       let expenseName = document.getElementById('expenseName');
       let expenseAmount = document.getElementById('expenseAmount');
       let expenseDate = document.getElementById('expenseDate');
       console.log(expenseName.value , expenseAmount.value,expenseDate.value);
    }
  return (
    <div className = "container">
      <form>
      <label htmlFor = "expenseName">Expense Name</label>
      <input type = "text" id = "expenseName"/>
      <br/>
      <label htmlFor = "expenseAmount">Expense Amount</label>
      <input type = "number" id = "expenseAmount" />
    <br/>
      <label htmlFor = "expenseDate">Expense Date</label>
      <input type = "date" id = "expenseDate"/>
      <br/>
      <input onClick = {submitHandler} type = "submit" value = "submit"/>
      </form>
    </div>
  )
}

export default ExpenseForm
