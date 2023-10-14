import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
export function ExpenseItem(props){
  
    function deleteExpense(e){
        console.log("Clicked");
        e.target.parentElement.remove();
    }
   
    return(
         
            
            <Card className='expense-item' >
               <ExpenseDate date = {props.date} />
               <ExpenseDetails title = {props.title} location = {props.location} price = {props.price} />
               <button onClick = {deleteExpense}>Delete</button>
            </Card>
            
     
   
    );
}
