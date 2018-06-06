import React, { Component } from "react";
import PropTypes from "prop-types";
import { HomeTrips } from "./HomeTrips";

/*** Components Bootstrap ***/
import { Grid } from "semantic-ui-react";

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

  // componentDidMount() {
  //   fetch(`http://localhost:3001/api/trip/selectLastTrips`, {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" }
  //   })
  //     .then(res => res.json())
  //     .then(results => {
  //       console.log(results);
  //       debugger;
  //       this.setState({ lastTrips: results });
  //       localStorage.setItem("lastTrips", JSON.stringify(results));
  //       console.log("this.state.lastTrips --> ", this.state.lastTrips);
  //       debugger;
  //     });
  // }
  render() {
    const { lastTrips } = this.state;
    return (
      <div>
        {lastTrips.ultimosTrayectos.map(ultimosTrayectos => {
          return (
            // <div key={ultimosTrayectos.trayectoID} className="Home-Trips-item">
            // <Grid.Row centered columns={4} width="equal" key={ultimosTrayectos.trayectoID} className="Home-Trips-item">
            <HomeTrips
              key={ultimosTrayectos.trayectoID}
              nombre={ultimosTrayectos.nombre}
              usuarioConductorID={ultimosTrayectos.usuarioConductorID}
              lugarComienzo={ultimosTrayectos.lugarComienzo}
              lugarFinal={ultimosTrayectos.lugarFinal}
              horaComienzo={ultimosTrayectos.horaComienzo}
              plazasLibres={ultimosTrayectos.plazasLibres}
            />
            // </Grid.Row>
            // </div>
          );
        })}
      </div>
    );
  }
}
