import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import Empleado from "./Empleado";

export default class Departamentos extends Component {
  departamento = React.createRef();

  state = {
    departamentos: [],
    statusDep: false,
    deptno: 0,
    empleados: [],
    statusEmp: false,
  };

  componentDidMount = () => {
    this.cargarDepartamentos();
  };
  cargarDepartamentos = () => {
    var request = Global.urlApiDepartamentos;
    axios.get(request).then((res) => {
      this.setState({ departamentos: res.data, statusDep: true });
    });
  };

  buscarEmpleados = (e) => {
    e.preventDefault();
    var numero = parseInt(this.departamento.current.value);
    this.setState({ deptno: numero });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.buscarEmpleados}>
          <label>Buscar departamento:</label>
          <select
            ref={this.departamento}
            onChange={this.actualizarNumeroDepartamento}
          >
            {this.state.departamentos.length > 0 &&
              this.state.statusDep &&
              this.state.departamentos.map((departamento, i) => {
                return (
                  <option value={departamento.Numero} key={i}>
                    {departamento.Nombre}
                  </option>
                );
              })}
          </select>
          <button onclick={this.buscarEmpleados}>
            Buscar empleados en este departamento
          </button>
          <hr />
          {this.state.empleados.length > 0 && (
            <Empleado iddepart={this.state.deptno} />
          )}
        </form>
      </div>
    );
  }
}
