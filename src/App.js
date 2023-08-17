import "./App.css";
import { useState } from "react";
import AddCustomer from "./components/AddCustomer";
import DisplayCustomers from "./components/DisplayCustomer";
import { Button } from "@mui/material";
import ACTIONS from "./constants/adminActions";

function App() {
  const [Customers, setCustomers] = useState([]); // this can be moved to redux or react context for the state management and avoid prop-drilling which can happen is the application grows.

  const [currentAction, setCurrentAction] = useState(ACTIONS.ADD_Customer);

  const getViewAsPerAction = () => {
    switch (currentAction) {
      case ACTIONS.ADD_Customer:
        return <AddCustomer setCustomers={setCustomers} />;

      case ACTIONS.VIEW_CustomerS:
        return (
          <DisplayCustomers setCustomers={setCustomers} Customers={Customers} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <h1>Customer Management Tool</h1>
      <div>
        <Button
          className="margin-right"
          variant="contained"
          onClick={() => setCurrentAction(ACTIONS.ADD_Customer)}
        >
          Add Customer
        </Button>
        <Button
          className="margin-right"
          variant="contained"
          onClick={() => setCurrentAction(ACTIONS.VIEW_CustomerS)}
        >
          View Customers
        </Button>
      </div>
      {getViewAsPerAction()}
    </div>
  );
}

export default App;
