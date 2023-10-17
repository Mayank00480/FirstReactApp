import React from 'react'
import './ExpenseFilter.css'
const ExpenseFilter = (props) => {
  const selectHandler = (e) =>{
   // console.log(e.target.value)
   props.onExpenseFilter(e.target.value);
  } 
    return (
    <div>
      <label>Filter By Year</label>
      <select onChange={selectHandler}>
      <option value="2019">2019</option>
      <option value="2020">2020</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>

      </select>
    </div>
  )
}

export default ExpenseFilter
