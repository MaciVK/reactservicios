import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import Empleado from "./Empleado";

export default class Departamentos extends Component {
  departamento = React.createRef();

  state = {
    departamentos: [],
    status: false,
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
      this.setState({ departamentos: res.data, status: true });
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
        <form>
          <label>Buscar departamento:</label>
          <select ref={this.departamento}>
            {this.state.departamentos.length > 0 &&
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
        </form>
        {this.state.deptno != 0 && <Empleado iddepart={this.state.deptno} />}
      </div>
    );
  }
}
