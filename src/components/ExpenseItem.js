import './ExpenseItem.css'
export function ExpenseItem(props){
 
    return(
         
            <div className='card'>
            <div className='expense-item'>{props.date}</div>
            <div className = "expense-item__description">
             <h2 >{props.title}</h2>
             <div>{props.location}</div>
             <div className='expense-item__price'>{props.price}</div>
             
            </div>
            </div>
     
   
    );
}
