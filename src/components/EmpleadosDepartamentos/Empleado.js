import Axios from "axios";
import React, { Component } from "react";
import Global from "../../Global";

export default class Empleados extends Component {
  state = { empleados: [] };

  cargarEmpleados = () => {
    var iddepartamento = this.props.iddepart;
    var request = Global.urlApiEmpleadosDepartamento + iddepartamento;
    Axios.get(request).then((res) => {
      this.setState({
        empleados: res.data,
      });
    });
  };

  componentDidMount = () => {
    this.cargarEmpleados();
  };
  render() {
    return (
      <ul>
        {this.state.empleados &&
          this.state.empleados.map((empleado, index) => {
            return <li key={index}>{empleado.apellido}</li>;
          })}
      </ul>
    );
  }
}
