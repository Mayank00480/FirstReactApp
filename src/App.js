
import Expense from "./components/Expense/Expense";
const App = () => {
  const data = [
    {
      id : 0,
     expense : "food",
     cost : "rs 10",
     date : new Date("2020-12-11"),
     location : "restorant"
    },
    {
      id:1,
        expense : "petrol",
        cost : "rs 100",
        date : new Date("2020-11-2"),
        location : "bharat petrolium"
       },
       {
        id : 2,
        expense : "Movies",
        cost : "rs 200",
        date : new Date("2020-12-3"),
        location : "rock plaza"
       },
  ]
  
  return (
    <div className="App">
    <Expense data = {data} />
    </div>
  );
}

export default App;
