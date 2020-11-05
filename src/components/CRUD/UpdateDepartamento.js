import Axios from "axios";
import React, { Component } from "react";
import Global from "../../Global";

export default class UpdateDepartamento extends Component {
  render() {
    return (
      <div>
        <h1>Modificar Departamento {this.props.iddepartamento}</h1>
      </div>
    );
  }
}
