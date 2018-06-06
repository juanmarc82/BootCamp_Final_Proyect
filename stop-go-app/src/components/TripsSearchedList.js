import React, { Component } from "react";
import PropTypes from "prop-types";

import { TripsSearched } from "./TripsSearched";

export class TripsSearchedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "trips": this.props.tray ,
      "trayectoSeleccionado": false
    };
  }
  static propTypes = {
    trips: PropTypes.array
  };

  render() {
    const { trips } = this.state;
    return (
      <div className="TripSearchedList">
        {trips.map(trayectos => {
          return (
            <div key={trayectos.trayectoID} className="TripSearchedList-item">
              <TripsSearched
                trayectoID={trayectos.trayectoID}
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
