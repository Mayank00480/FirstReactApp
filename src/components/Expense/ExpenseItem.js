import React,{useState} from 'react'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
export function ExpenseItem(props){
    const [title , setTitle] = useState(props.title)
  
    function deleteExpense(e){
       setTitle('updated');
       console.log(title);
        console.log("Clicked");

      //  e.target.parentElement.remove();
    }
   
    return(
         
            
            <Card className='expense-item' >
               <ExpenseDate date = {props.date} />
               <ExpenseDetails title = {title} location = {props.location} price = {props.price} />
               <button onClick = {deleteExpense}>Update</button>
            </Card>
            
     
   
    );
}
