import React, { Component } from "react";
import Axios from "axios";
import Global from "./../../Global";
import { Redirect } from "react-router-dom";
export default class DeleteDepartamento extends Component {
  constructor(props) {
    super(props);
  }
  state = { status: false };
  eliminarDepartamento = () => {
    console.log(this.props.iddepartamento);
    var request = "/api/departamentos/" + this.props.iddepartamento;
    var url = Global.urlCRUDDept + request;
    Axios.delete(url).then((res) => {
      this.setState({ status: true });
    });
  };

  render() {
    if (this.state.status == true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h1 style={{ color: "white", backgroundColor: "red" }}>
          ¿¿Eliminar Departamento {this.props.iddepartamento}??
        </h1>
        <button className="btn btn-warning" onClick={this.eliminarDepartamento}>
          Eliminar departamento
        </button>
      </div>
    );
  }
}
