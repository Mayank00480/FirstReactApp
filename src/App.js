import React,{useState} from "react";
import Expense from "./components/Expense/Expense";
import ExpenseForm from "./components/Expense/ExpenseForm";
const data = [
  {
    id : 100,
   expense : "food",
   cost : " 10",
   date : "2020-12-11",
   location : "restorant"
  },
  {
    id:1,
      expense : "petrol",
      cost : " 100",
      date : "2020-11-2",
      location : "bharat petrolium"
     },
     {
      id : 2,
      expense : "Movies",
      cost : " 200",
      date : "2020-12-3",
      location : "rock plaza"
     },
]
const App = () => {
  const [arr , setArr] = useState(data); 
  console.log(arr);
       const saveDataHandler = (expense) =>{
          let myObj = {
            ...expense,id:Math.random().toString()
          };
          setArr((prevState) =>{
            return [
              ...prevState , myObj
            ]
          })
          console.log(myObj);
          console.log('appjs');
       }  
  return (

    <div className="App">
    <ExpenseForm onSaveData = {saveDataHandler} />
    <Expense data = {arr} />
    </div>
  );
}

export default App;
