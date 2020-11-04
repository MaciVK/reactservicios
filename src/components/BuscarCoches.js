import React, { Component } from "react";
import Axios from "axios";
import Global from "../Global";

export default class BuscarCoches extends Component {
  cajaMarcaRef = React.createRef();
  state = {
    coches: [],
    status: false,
    coincidencias: [],
  };

  componentWillMount = () => {
    this.cargarCoches();
  };
  cargarCoches = () => {
    var url = Global.urlApiCochesPaco;
    var request = "webresources/coches";

    Axios.get(url + request).then((res) => {
      this.setState({
        coches: res.data,
        coincidencias: res.data,
        status: true,
      });
    });
  };
  buscarCoches = (e) => {
    e.preventDefault();
    var marcaCoche = this.cajaMarcaRef.current.value.toUpperCase();
    var coches = this.state.coches;
    var filtro = coches.filter((coche) =>
      coche.marca.toUpperCase().includes(marcaCoche)
    );
    this.setState({ coincidencias: filtro });
  };
  mostrarTodosCoches = () => {
    this.setState({ coincidencias: this.state.coches });
  };
  render() {
    return (
      <div>
        <h1>Buscador Coches </h1>
        <form onSubmit={this.buscarCoches}>
          <label htmlFor="cajaMarca">Buscar por marca: </label>
          <input name="cajaMarca" ref={this.cajaMarcaRef} type="text"></input>
          <button>Buscar</button>
        </form>
        <button onClick={this.mostrarTodosCoches}>Recargar coches</button>
        <hr />
        {this.state.coincidencias.length > 0 && this.state.status && (
          <table>
            <thead>
              <tr>
                <th>ID COCHE</th>
                <th>MARCA</th>
                <th>MODELO</th>
                <th>CONDUCTOR</th>
                <th>IMAGEN</th>
              </tr>
            </thead>
            <tbody>
              {this.state.coincidencias.map((coche, index) => {
                return (
                  <tr key={index}>
                    <td>{coche.idcoche}</td>
                    <td>{coche.marca}</td>
                    <td>{coche.modelo}</td>
                    <td>{coche.conductor}</td>
                    <td>
                      <img
                        key={"imagen" + index}
                        src={coche.imagen}
                        style={{ width: "200px", height: "200px" }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}
