import { ExpenseItem } from "./ExpenseItem";
import './Expense.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter"; 
function Expense(props){
  console.log(props.data)
    return (
        <Card className = 'expenses'>
          <ExpenseFilter />   
          {
            Array.from(props.data).map(item => {
              return <ExpenseItem key = {item.id} title = {item.expense} price = {item.cost} location = {item.location} date = {item.date} />
            })
          }
          </Card>
    );
}
export default Expense;