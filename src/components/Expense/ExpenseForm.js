import React,{useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
       const[visibile ,setVisible] = useState(false);
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
        setVisible(false);
        /*  console.log(1);
         e.preventDefault();
         let expenseName = document.getElementById('expenseName');
         let expenseAmount = document.getElementById('expenseAmount');
         let expenseDate = document.getElementById('expenseDate');
         console.log(expenseName.value , expenseAmount.value,expenseDate.value); */
      }
    
  return (
    <div className = "container">
      {visibile == false &&  <input  id = "inp" onClick = {(e) =>{setVisible(true)}} type = "submit" value = "Open Form"/>}
     { visibile == true && (<form onSubmit = {submitHandler}>
      <label htmlFor = "expenseName">Expense Name</label>
      <input type = "text" id = "expenseName" value = {title} onChange = {titleHandler} required/>
      <br/>
      <label htmlFor = "expenseAmount">Expense Amount</label>
      <input type = "number" id = "expenseAmount" value = {amount} onChange = {amountHandler} required/>
    <br/>
      <label htmlFor = "expenseDate">Expense Date</label>
      <input type = "date" id = "expenseDate" min = "2019-01-01" max = "2023-12-31" value = {date} onChange = {dateHandler} required/>
      <br/>
      <input  type = "submit" value = "Add Expense"/>
      </form>) }
    </div>
  )
}

export default ExpenseForm
