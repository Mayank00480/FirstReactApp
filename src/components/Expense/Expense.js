import { ExpenseItem } from "./ExpenseItem";
import './Expense.css'
import Card from "../UI/Card";
function Expense(props){
  console.log(props.data)
    return (
        <Card className = 'expenses'>{
            Array.from(props.data).map(item => {
              return <ExpenseItem key = {item.id} title = {item.expense} price = {item.cost} location = {item.location} date = {item.date} />
            })
          }
          </Card>
    );
}
export default Expense;