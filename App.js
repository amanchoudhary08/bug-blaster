import { useReducer } from "react";
import "./App.css";
import "./styles.css";
import TicketForm from "./components/TicketForm";
import ticketReducer from "./reducers/ticketReducer";

function App() {
  const initialState = { tickets: [] };
  const [state, dispatch] = useReducer(ticketReducer, initialState);

  return (
    <div className="container">
      <h1>Bug Blaster</h1>
      <TicketForm dispatch={dispatch}></TicketForm>
    </div>
  );
}

export default App;
