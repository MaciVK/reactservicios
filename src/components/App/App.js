import logo from "./../../logo.svg";
import "./App.css";
import Customers from "./../Customers";
import BuscarCustomer from "./../BuscarCustomer";
import BuscarCoches from "../BuscarCoches";
import Departamentos from "../EmpleadosDepartamentos/Departamentos";
function App() {
  return (
    <div className="App">
      {/* <BuscarCustomer /> */}
      {/* <Customers /> */}
      {/* <BuscarCoches /> */}
      <Departamentos />
    </div>
  );
}

export default App;
