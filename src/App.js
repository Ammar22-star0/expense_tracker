import "./App.css";
import Balance from "./components/Balance.js";
import Header from "./components/Header.js";
import AddTransaction from "./components/AddTransaction.js";
import { GlobalProvider } from "./context/GlobalState.js";
import IncomeExpenses from "./components/IncomeExpenses.js";
import TransactionList from "./components/transactionList.js";
// import TransactionList from "./components/TransactionList.js";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
