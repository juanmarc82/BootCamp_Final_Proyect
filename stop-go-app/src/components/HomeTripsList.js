import React, { Component } from "react";
import PropTypes from "prop-types";
import { HomeTrips } from "./HomeTrips";

export class HomeTripsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: this.props.nombre,
      usuarioID: JSON.parse(localStorage.usuario)[0].usuarioID,
      trayectoID: this.props.trayectoID,
      lugarComienzo: this.props.lugarComienzo,
      lugarFinal: this.props.lugarFinal,
      horaComienzo: this.props.horaComienzo,
      plazasLibres: this.props.plazasLibres,
      lastTrips: this.props.tray
    };
  }
  // Comprobar tipo de datos que importamos
  static propTypes = {
    nombre: PropTypes.strings,
    lugarComienzo: PropTypes.strings,
    lugarFinal: PropTypes.strings,
    horaComienzo: PropTypes.strings,
    plazasLibres: PropTypes.number,
    trayectoID: PropTypes.number
  };

  render() {
    const { lastTrips } = this.state;
    return (
      <div>
        {lastTrips.ultimosTrayectos.map(ultimosTrayectos => {
          return (
            <HomeTrips
              trayectoID={ultimosTrayectos.trayectoID}
              nombre={ultimosTrayectos.nombre}
              usuarioConductorID={ultimosTrayectos.usuarioConductorID}
              lugarComienzo={ultimosTrayectos.lugarComienzo}
              lugarFinal={ultimosTrayectos.lugarFinal}
              horaComienzo={ultimosTrayectos.horaComienzo}
              plazasLibres={ultimosTrayectos.plazasLibres}
            />
          );
        })}
      </div>
    );
  }
}
