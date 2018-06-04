import React, { Component } from "react";
import PropTypes from "prop-types";

// Descomentar esta linea cuando esté funcionando Trip.js
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
  _handleDeleteTrip = e => {
    e.preventDefault();
    // Modificar para UPDATE USER
    fetch(`http://localhost:3001/api/trip/delete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        TrayectoID: this.props.TrayectoID
      })
    })
      .then(res => res.json())
      .then(results => {
        console.log(results);
        // Añado condición para redirect to "/panelUsuario" (Panel de Usuario)
        if (results) {
          this.setState({ trayectoDelete: true });
        }
        // alert Add Viaje ok.
        alert(" Viaje Eliminado Madafaca!! ");
      });
  }

  render() {
        const { trips } = this.state;
    
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
              onClick={this._handleDeleteTrip}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
