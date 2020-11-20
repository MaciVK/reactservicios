import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { NavLink } from "react-router-dom";
export default class Departamentos extends Component {
  state = {
    departamentos: [],
    status: false,
  };
  cargarDepartamentos = () => {
    var request = "/api/Departamentos";
    var url = Global.urlCRUDDept + request;
    axios.get(url).then((res) => {
      this.setState({
        departamentos: res.data,
        status: true,
      });
    });
  };
  componentDidMount = () => {
    this.cargarDepartamentos();
  };

  render() {
    return (
      <div>
        <h1>Departamentos</h1>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Numero</th>
              <th>Nombre</th>
              <th>Localidad</th>
            </tr>
          </thead>
          <tbody>
            {this.state.status == true &&
              this.state.departamentos.map((departamento, index) => {
                return (
                  <tr key={index}>
                    <td>{departamento.numero}</td>
                    <td>{departamento.nombre}</td>
                    <td>{departamento.localidad}</td>
                    <td>
                      <NavLink to={"/details/" + departamento.numero}>
                        Detalles
                      </NavLink>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
