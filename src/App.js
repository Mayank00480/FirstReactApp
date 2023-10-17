import React,{useState} from "react";
import Expense from "./components/Expense/Expense";
import ExpenseForm from "./components/Expense/ExpenseForm";
const data = [
  {
    id : 100,
   expense : "food",
   cost : " 10",
   date : new Date("2021-12-11"),
   location : "restorant"
  },
  {
    id:1,
      expense : "petrol",
      cost : " 100",
      date : new Date("2022-11-2"),
      location : "bharat petrolium"
     },
     {
      id : 2,
      expense : "Movies",
      cost : " 200",
      date : new Date("2020-12-3"),
      location : "rock plaza"
     },
]
const App = () => {
  const [arr , setArr] = useState(data); 
  const [value , setValue] = useState(data);
  const filterItems = (info) =>{
          
    let lastInfo = value.filter(val =>{
     return val.date.getFullYear() == info
    }) 
    console.log(lastInfo)
    setArr(lastInfo);
 }
 // console.log(arr);
       const saveDataHandler = (expense) =>{
          let myObj = {
            ...expense,id:Math.random().toString()
          };
          setArr((prevState) =>{
            return [
              ...prevState , myObj
            ]
          })
          setValue((prevState) =>{
            return [
              ...prevState , myObj
            ]
          })
          //console.log(myObj);
         // console.log('appjs');
          
       }  
  return (

    <div className="App">
    <ExpenseForm onSaveData = {saveDataHandler} />
    <Expense data = {arr} onFilter ={filterItems}/>
    </div>
  );
}

export default App;
