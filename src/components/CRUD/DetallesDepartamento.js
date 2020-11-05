import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
export default class DetallesDepartamento extends Component {
  constructor(props) {
    super(props);
    this.setState({
      iddepartamento: props.iddepartamento,
    });
  }

  state = {
    departamento: {},
    status: false,
    iddepartamento: 0,
  };

  buscarDepartamento = () => {
    var request = "/api/departamentos/" + this.props.iddepartamento;
    var url = Global.urlCRUDDept + request;
    axios.get(url).then((res) => {
      this.setState({
        departamento: res.data,
        status: true,
      });
    });
  };
  componentDidMount = () => {
    this.buscarDepartamento();
  };
  render() {
    return (
      <div>
        <a href="/">Volver al inicio</a>
        <h1>Detalles:</h1>
        {this.state.status == true && (
          <React.Fragment>
            <h1>Numero: {this.state.departamento.numero}</h1>
            <h1>Nombre: {this.state.departamento.nombre}</h1>
            <h1>Localidad: {this.state.departamento.localidad}</h1>
            <a
              href={"/update/" + this.state.departamento.numero}
              className="btn btn-info"
            >
              Modificar
            </a>
          </React.Fragment>
        )}
      </div>
    );
  }
}
