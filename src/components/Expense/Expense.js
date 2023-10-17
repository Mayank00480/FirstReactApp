import React,{useState} from'react' 
import { ExpenseItem } from "./ExpenseItem";
import './Expense.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter"; 

function Expense(props){
  const[expenseData , setExpenseData] = useState(props.data)

  console.log(expenseData)
 // expenseData.length == 1 && console.log(props.data[0].date.getFullYear())
  const expenseFilterHandler = (value) =>{
    // let newExpenseData = expenseData.map((val) => {val.filterItem = value;
      //                                            return val;
      
                                              
  props.onFilter(value);
  //  })
  
  // setExpenseData(newExpenseData)
    // console.log(newExpenseData)
    // console.log(expenseData)
  }
  return (
        <Card className = 'expenses'>
          <ExpenseFilter onExpenseFilter = {expenseFilterHandler}/>   
        {props.data.length == 0 && <p>No Expense to Show</p>}
          {props.data.length == 1 && (<><ExpenseItem key = {props.data[0].id} 
              title = {props.data[0].expense} price = {props.data[0].cost} 
              location = {props.data[0].location} date = {props.data[0].date} />
            <p>Only one Expense Here Please add more</p> </>)
            }
          { 
          props.data.length > 1 && 
            Array.from(props.data).map(item => {
             return <ExpenseItem key = {item.id} 
              title = {item.expense} price = {item.cost} location = {item.location} date = {item.date} />
            }) }
          
          
          </Card>
    );
}
export default Expense;