import ExpenseList from "./components/ExpenseList"; 
import ExpenseForm from "./components/ExpenseForm"; 

const App=()=> (
    <div style={{width:'50%',margin:'auto'}}>
      <h3>New Expense</h3>
      <ExpenseForm/>

      <hr style={{border:'1px solid grey'}}/>

      <h3>Your Expenses</h3>
      <ExpenseList/>
    </div>
);
   

export default App;
