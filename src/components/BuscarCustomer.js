import React, { Component } from "react";
import Axios from "axios";
import Global from "./../Global";
export default class BuscarCustomer extends Component {
  cajaCustomerRef = React.createRef();
  state = {
    customer: {},
    status: false,
  };

  buscarCliente = (e) => {
    e.preventDefault();
    var idCliente = this.cajaCustomerRef.current.value.toUpperCase();

    var request = "customers/" + idCliente + ".json";
    var url = Global.urlNorthwind + request;
    Axios.get(url).then((res) => {
      this.setState({ customer: res.data.customer, status: true });
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.buscarCliente}>
          <label htmlFor="cajaTexto">ID Customer: </label>
          <input name="cajaTexto" type="text" ref={this.cajaCustomerRef} />
          <button>Buscar cliente</button>
        </form>
        {this.state.status === true && (
          <div>
            <h1 style={{ color: "white", backgroundColor: "blueviolet" }}>
              Name: {this.state.customer.contactName}
            </h1>
            <h2>Empresa: {this.state.customer.companyName}</h2>
            <h3>Ciudad: {this.state.customer.city}</h3>
            <h3>Oficio: {this.state.customer.contactTitle}</h3>
          </div>
        )}
      </div>
    );
  }
}
