import React, { Component } from "react";

import { FormBuscarViaje } from "./FormBuscarViaje";
import { ListadoViajesBuscados } from "./ListadoViajesBuscados";

export class IsTripSearched extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarioPasajeroID: JSON.parse(localStorage.usuario)[0].usuarioID,
      lugarComienzo: "",
      lugarFinal: "",
      horaComienzo: "",
      plazasLibres: "",
      trayectoSearched: false,
      trayectosArray: [],
    };

  }

  render() {
    let trayectoSearched = this.state.trayectoSearched !== "false" ? true : false;
    if (trayectoSearched) {
      console.log("Este es el trayectoSearched en PADRE: ", this.state.trayectoSearched);
      return <FormBuscarViaje onSubmit={this.handleChildClick} />;
    } else {
      return <div>
        <FormBuscarViaje onSubmit={this.handleChildClick} /> {/* Aquí incluir los manejadores para que los use el hijo  */}
        <br /><br /><br /><p>Va a mostrar Listado</p>
          <ListadoViajesBuscados />
        </div>;
    }
  }


  handleChildClick = e => {
      localStorage.setItem("trayectoSearched", true);
      this.setState({
          trayectoSearched: true
      });
  };
}
export const FormBuscarViajesContainer = () => (
  <div>
    <IsTripSearched />
  </div>
);
