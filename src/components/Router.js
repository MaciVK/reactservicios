import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import EmpleadoDetalle from "./RutasEmpleados/EmpleadoDetalle";
import Departamentos from "./CRUD/Departamentos";
import InsertarDepartamento from "./CRUD/InsertarDepartamento";
import DetallesDepartamento from "./CRUD/DetallesDepartamento";
import UpdateDepartamento from "./CRUD/UpdateDepartamento";
import DeleteDepartamento from "./CRUD/DeleteDepartamento";
import MenuCRUD from "./CRUD/MenuCRUD";

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <MenuCRUD />
          <Switch>
            <Route exact path="/" component={Departamentos} />
            <Route exact path="/create" component={InsertarDepartamento} />
            <Route
              exact
              path="/details/:id"
              render={(props) => {
                var idDep = props.match.params.id;
                return <DetallesDepartamento iddepartamento={idDep} />;
              }}
            />
            <Route
              exact
              path="/update/:id/:nombre/:localidad"
              render={(props) => {
                var idDep = props.match.params.id;
                var nom = props.match.params.nombre;
                var loc = props.match.params.localidad;
                return (
                  <UpdateDepartamento
                    iddepartamento={idDep}
                    nombre={nom}
                    localidad={loc}
                  />
                );
              }}
            />
            <Route
              exact
              path="/delete/:id"
              render={(props) => {
                var idDep = props.match.params.id;
                return <DeleteDepartamento iddepartamento={idDep} />;
              }}
            />
            <Route
              exact
              path="/empleadosdetalle/:idEmpleado"
              render={(props) => {
                var idEmp = props.match.params.idEmpleado;
                console.log("ID " + idEmp);
                return <EmpleadoDetalle idempleado={idEmp} />;
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
