import logo from "./../../logo.svg";
import "./App.css";
import Customers from "./../Customers";
import BuscarCustomer from "./../BuscarCustomer";
import BuscarCoches from "../BuscarCoches";
import Departamentos from "../EmpleadosDepartamentos/Departamentos";
import Router from "./../Router";
import EmpleadosRouter from "./../RutasEmpleados/EmpleadosRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import DepartamentosCRUD from "./../CRUD/Departamentos";
import MenuCRUD from "./../CRUD/MenuCRUD";
function App() {
  return (
    <div className="App">
      {/* <BuscarCustomer /> */}
      {/* <Customers /> */}
      {/* <BuscarCoches /> */}
      {/* <Departamentos /> */}
      {/* <EmpleadosRouter />
      <hr />
      <Router /> */}

      <Router />
      {/* <DepartamentosCRUD /> */}
    </div>
  );
}

export default App;
