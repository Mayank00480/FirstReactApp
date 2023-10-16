import React,{useState} from'react' 
import { ExpenseItem } from "./ExpenseItem";
import './Expense.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter"; 
let selected = false;
function Expense(props){
  const[expenseData , setExpenseData] = useState(props.data)
  console.log(props.data)
  console.log(props.data[0].date.getFullYear())
  const filterHandler = (value) =>{
     let newExpenseData = expenseData.map((val) => {val.filterItem = value;
                                                  return val;

                                              
  })
  selected = true; 
   setExpenseData(newExpenseData)
     console.log(newExpenseData)
    // console.log(expenseData)
  }
  return (
        <Card className = 'expenses'>
          <ExpenseFilter onFilter = {filterHandler}/>   
          {
            Array.from(expenseData).map(item => {
              if(!selected || item.filterItem == item.date.getFullYear()) return <ExpenseItem key = {item.id} title = {item.expense} price = {item.cost} location = {item.location} date = {item.date} />
            })
          }
          </Card>
    );
}
export default Expense;