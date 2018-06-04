import React, { Component } from "react";
import PropTypes from "prop-types";

import { Trip } from "./Trip";

export class TripList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: JSON.parse(localStorage.trayectos),
      trayectoDelete: false
    };
  }
  static propTypes = {
    trips: PropTypes.array
  };

  render() {
        const { trips } = this.state;    
    return (
      <div className="TripList">
        {trips.trayectos.map(trayectos => {
          return (
            <div key={trayectos.trayectoID} className="TripList-item">
              <Trip 
              trayectoID={trayectos.trayectoID}
              usuarioConductorID={trayectos.usuarioConductorID}
              lugarComienzo={trayectos.lugarComienzo}
              lugarFinal={trayectos.lugarFinal}
              horaComienzo={trayectos.horaComienzo}
              plazasLibres={trayectos.plazasLibres}
              onClick={this._handleDeleteTrip}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
