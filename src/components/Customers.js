import React, { Component } from "react";
//Agregar la libreria de AXIOS
import Axios from "axios";
export default class Customers extends Component {
  //Almacenamos los clientes en State
  urlCustomers = "http://northwind.netcore.io/customers?format=json";

  state = {
    customers: [],
    status: null,
  };

  cargarClientes = () => {
    Axios.get(this.urlCustomers).then((res) => {
      console.log(res.data.customers);
      this.setState({ customers: res.data.customers, status: "success" });
    });
  };

  componentWillMount = () => {
    this.cargarClientes();
  };

  render() {
    if (this.state.customers.length > 0) {
      //Hay clientes
      return (
        <div>
          <h1>Servicios Api Customers</h1>
          {this.state.customers.map((cliente) => {
            return <h2 key={cliente.id}>{cliente.contactName}</h2>;
          })}
        </div>
      );
    } else if (this.state.customers.length == 0) {
      //No hay clientes
      return <h1>No hay clientes</h1>;
    } else if (this.state.status != "success") {
      //El servicio no ha terminado de procesar
      return <h1>Cargando servicio...</h1>;
    } else {
      //Otra opcion
      return <h1>Algo ha ido mal...</h1>;
    }
  }
}
