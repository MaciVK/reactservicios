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

  //componentDidMount es para cuando el componente esté creado
  //componentDidUpdate es para cuando

  componentDidMount = () => {
    this.cargarEmpleados();
  };

  componentDidUpdate = () => {
    this.cargarEmpleados();
  };
  render() {
    return (
      <ul>
        {this.state.empleados.length > 0 &&
          this.state.empleados.map((empleado, index) => {
            return <li key={index}>{empleado.apellido}</li>;
          })}
      </ul>
    );
  }
}
