import Axios from "axios";
import React, { Component } from "react";
import Global from "../../Global";

export default class EmpleadosDetalles extends Component {
  //RECIBIMOS PROPS CON UN CONSTRUCTOR
  constructor(props) {
    super(props);
    //IDEMPLEADO
    console.log("Props detalle " + this.props.idempleado);
  }
  state = {
    empleado: {},
    status: false,
  };

  mostrarEmpleado = () => {
    var request = "/api/empleados/" + this.props.idempleado;
    var url = Global.urlApiEmpleados + request;
    Axios.get(url).then((res) => {
      this.setState({
        empleado: res.data,
        status: true,
      });
    });
  };
  componentDidMount = () => {
    this.mostrarEmpleado();
  };

  render() {
    return (
      <div>
        <h1>Detalles Empleados</h1>
        {this.state.status == true && (
          <div>
            <h1 style={{ color: "white", backgroundColor: "blueviolet" }}>
              Apellido: {this.state.empleado.apellido}
            </h1>
            <h1 style={{ color: "white", backgroundColor: "burlywood" }}>
              Oficio: {this.state.empleado.oficio}
            </h1>
          </div>
        )}
      </div>
    );
  }
}
