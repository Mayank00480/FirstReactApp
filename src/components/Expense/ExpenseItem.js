import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';
export function ExpenseItem(props){
 
   
    return(
         
            
            <Card className='expense-item'>
               <ExpenseDate date = {props.date} />
               <ExpenseDetails title = {props.title} location = {props.location} price = {props.price} />
              
            </Card>
            
     
   
    );
}
