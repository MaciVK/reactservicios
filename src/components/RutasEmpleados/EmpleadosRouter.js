import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";

export default class EmpleadosRouter extends Component {
  state = {
    empleados: [],
    status: false,
  };
  cargarEmpleados = () => {};
  componentDidMount = () => {
    this.cargarEmpleados();
    var request = "/api/empleados";
    var url = Global.urlApiEmpleados + request;
    axios.get(url).then((res) => {
      this.setState({
        empleados: res.data,
        status: true,
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Rutas Empleados</h1>
        <ul>
          {this.state.status == true &&
            this.state.empleados.map((empleado, index) => {
              return (
                <li key={index}>
                  {empleado.apellido}
                  <a href={"/empleadosdetalle/" + empleado.idEmpleado}>
                    Detalles
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
