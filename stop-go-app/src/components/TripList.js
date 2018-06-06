import React, { Component } from "react";
import PropTypes from "prop-types";

import { Trip } from "./Trip";

export class TripList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trips: {},
      trayectoDelete: false,
      default: false
    };
  }
  static propTypes = {
    trips: PropTypes.array
  };

  componentDidMount() {
    console.log("componentDidMount");

    fetch(`http://localhost:3001/api/trip/select`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        usuarioConductorID: JSON.parse(localStorage.usuario)[0].usuarioID

        // this.state.usuarioConductorID
        // JSON.parse(localStorage.usuario.usuarioID)
      })
    })
      .then(res => res.json())
      .then(results => {
        console.log("Este quiero", results);

        this.setState({
          trips: results,
          default: true
        });
        console.log(results.trayectos);

        localStorage.setItem("trayectos", JSON.stringify(results));
      });
  }
  render() {
    console.log("render");
    const { trips } = this.state;
    if (this.state.default) {
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
    } else {
      return <h1> Todavia nada </h1>;
    }
  }
}
