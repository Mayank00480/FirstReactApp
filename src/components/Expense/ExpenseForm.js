import React,{useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    
       const [title ,setTitle] = useState('');
       const [date , setDate] = useState('');
       const [amount ,setAmount] = useState('');
       const dateHandler =(e) =>{
             setDate(e.target.value);
       }
       const titleHandler = (e) =>{
        setTitle(e.target.value);
       }
       const amountHandler = (e)=>{
        setAmount(e.target.value);
       }
       function submitHandler(e){
        e.preventDefault();
        let obj ={
          expense  : title,
          cost :amount,
          date :new Date(`${date}`)
        }
        console.log(obj);
        props.onSaveData(obj);
        /*  console.log(1);
         e.preventDefault();
         let expenseName = document.getElementById('expenseName');
         let expenseAmount = document.getElementById('expenseAmount');
         let expenseDate = document.getElementById('expenseDate');
         console.log(expenseName.value , expenseAmount.value,expenseDate.value); */
      }
    
  return (
    <div className = "container">
      <form>
      <label htmlFor = "expenseName">Expense Name</label>
      <input type = "text" id = "expenseName" value = {title} onChange = {titleHandler}/>
      <br/>
      <label htmlFor = "expenseAmount">Expense Amount</label>
      <input type = "number" id = "expenseAmount" value = {amount} onChange = {amountHandler}/>
    <br/>
      <label htmlFor = "expenseDate">Expense Date</label>
      <input type = "date" id = "expenseDate" min = "2019-01-01" max = "2023-12-31" value = {date} onChange = {dateHandler}/>
      <br/>
      <input onClick = {submitHandler} type = "submit" value = "submit"/>
      </form>
    </div>
  )
}

export default ExpenseForm
