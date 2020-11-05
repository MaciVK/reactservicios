import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { Redirect } from "react-router-dom";

export default class InsertarDepartamento extends Component {
  cajaNumeroRef = React.createRef();
  cajaNombreRef = React.createRef();
  cajaLocalidadRef = React.createRef();
  state = {
    mensaje: "",
    status: false,
  };

  nuevoDepartamento = (e) => {
    e.preventDefault();
    var numero = parseInt(this.cajaNumeroRef.current.value);
    var nombre = this.cajaNombreRef.current.value;
    var localidad = this.cajaLocalidadRef.current.value;
    var nuevoDepartamento = {
      numero: numero,
      nombre: nombre,
      localidad: localidad,
    };
    var request = "/api/departamentos";
    var url = Global.urlCRUDDept + request;
    axios.post(url, nuevoDepartamento).then((res) => {
      this.setState({
        mensaje: "Nuevo Departamento " + numero + " añadido",
        status: true,
      });
    });
  };

  render() {
    if (this.state.status == true) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h1>Nuevo departamento</h1>
        <form onSubmit={this.nuevoDepartamento}>
          <label>Numero: </label>
          <input
            type="text"
            name="cajaNumero"
            className="form-control"
            ref={this.cajaNumeroRef}
          />
          <br />
          <label>Nombre: </label>
          <input
            type="text"
            name="cajaNombre"
            className="form-control"
            ref={this.cajaNombreRef}
          />
          <br />
          <label>Localidad: </label>
          <input
            type="text"
            name="cajaLocalidad"
            className="form-control"
            ref={this.cajaLocalidadRef}
          />
          <br />
          <button className="btn-success">Insertar Departamento</button>
        </form>
        <h3 style={{ color: "white", backgroundColor: "blueviolet" }}>
          {this.state.mensaje}
        </h3>
      </div>
    );
  }
}
