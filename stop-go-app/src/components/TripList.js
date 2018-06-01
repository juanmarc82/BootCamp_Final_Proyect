import React, { Component } from "react";
import PropTypes from "prop-types";

// Descomentar esta linea cuando esté funcionando Trip.js
import { Trip } from "./Trip";

export class TripList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: JSON.parse(localStorage.trayectos)
    };
  }
  static propTypes = {
    trips: PropTypes.array
  };

  render() {
    debugger;
    const { trips } = this.state;
    debugger;
    return (
      <div className="TripList">
        {trips.trayectos.map(trayectos => {
          return (
            <div key={trayectos.trayectoID} className="TripList-item">
              <Trip 
              id={trayectos.trayectoID}
              usuarioConductorID={trayectos.usuarioConductorID}
              lugarComienzo={trayectos.lugarComienzo}
              lugarFinal={trayectos.lugarFinal}
              horaComienzo={trayectos.horaComienzo}
              plazasLibres={trayectos.plazasLibres}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
