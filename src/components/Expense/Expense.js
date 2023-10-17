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
          { 
            Array.from(props.data).map(item => {
             return <ExpenseItem key = {item.id} 
              title = {item.expense} price = {item.cost} location = {item.location} date = {item.date} />
            }) }
          
          
          </Card>
    );
}
export default Expense;