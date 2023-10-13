import './ExpenseItem.css'
export function ExpenseItem(){
   const expenseDate = new Date(2021,2,26);
   const expenseDescription = 'Item Description';
   const expensePrice = 260;
   const LocationOfExpenditure = 'Faridabad';
    return(
   <div className='card'>
   <div className='expense-item'>{expenseDate.toISOString()}</div>
   <div className = "expense-item__description">
    <h2 >{expenseDescription}</h2>
    <div>{LocationOfExpenditure}</div>
    <div className='expense-item__price'>${expensePrice}</div>
    
   </div>
   </div>
    );
}
