import React from 'react'
import './ExpenseFilter.css'
const ExpenseFilter = () => {
  return (
    <div>
      <label>Filter By Year</label>
      <select >
      <option value="2019">2019</option>
      <option value="2019">2020</option>
      <option value="2019">2021</option>
      <option value="2019">2022</option>

      </select>
    </div>
  )
}

export default ExpenseFilter
