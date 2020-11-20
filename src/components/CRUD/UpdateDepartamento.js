import Axios from "axios";
import React, { Component } from "react";
import Global from "../../Global";
import { Redirect, NavLink } from "react-router-dom";

export default class UpdateDepartamento extends Component {
  cajaNumeroRef = React.createRef();
  cajaNombreRef = React.createRef();
  cajaLocalidadRef = React.createRef();
  modificarDepartamento = (e) => {
    e.preventDefault();
    var numero = parseInt(this.cajaNumeroRef.current.value);
    var nombre = this.cajaNombreRef.current.value;
    var localidad = this.cajaLocalidadRef.current.value;
    var departamento = {
      numero: numero,
      nombre: nombre,
      localidad: localidad,
    };
    var request = "/api/departamentos/";
    var url = Global.urlCRUDDept + request;
    Axios.put(url, departamento).then((res) => {
      this.setState({ status: true });
    });
  };
  state = { status: false };
  render() {
    if (this.state.status == true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <NavLink to="/" className="btn btn-danger">
          Volver al inicio
        </NavLink>
        <h1>Modificar Departamento {this.props.iddepartamento}:</h1>
        <form
          onSubmit={this.modificarDepartamento}
          style={{ width: "500px", margin: "0 auto" }}
        >
          <label>Numero: </label>
          <input
            type="number"
            name="cajaNumero"
            defaultValue={this.props.iddepartamento}
            ref={this.cajaNumeroRef}
            className="form-control"
            readOnly
          />
          <label>Nombre: </label>
          <input
            type="text"
            name="cajaNombre"
            className="form-control"
            ref={this.cajaNombreRef}
            defaultValue={this.props.nombre}
          />
          <label>Localidad: </label>
          <input
            type="text"
            className="form-control"
            name="cajaLocalidad"
            ref={this.cajaLocalidadRef}
            defaultValue={this.props.localidad}
          />
          <button className="btn-info">Modificar</button>
        </form>
      </div>
    );
  }
}
