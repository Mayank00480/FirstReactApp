import { ExpenseItem } from "./ExpenseItem";
import './Expense.css'
import Card from "../UI/Card";
function Expense(props){
    return (
        <Card className = 'expenses'>{
            props.data.map(item => {
              return <ExpenseItem key = {item.id} title = {item.expense} price = {item.cost} location = {item.location} date = {item.date} />
            })
          }
          </Card>
    );
}
export default Expense;