import React, { Component } from "react";
//Agregar la libreria de AXIOS
import Axios from "axios";
export default class Customers extends Component {
  //Almacenamos los clientes en State
  urlCustomers = "http://northwind.netcore.io/customers?format=json";

  state = {
    customers: [],
  };

  cargarClientes = () => {
    Axios.get(this.urlCustomers).then((res) => {
      console.log(res.data.customers);
      this.setState({ customers: res.data.customers });
    });
  };

  componentWillMount = () => {
    this.cargarClientes();
  };

  render() {
    return (
      <div>
        <h1>Servicios Api Customers</h1>
        {this.state.customers.map((cliente) => {
          return <h2 key={cliente.id}>{cliente.contactName}</h2>;
        })}
      </div>
    );
  }
}
