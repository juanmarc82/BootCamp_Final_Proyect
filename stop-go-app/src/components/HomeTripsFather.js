import React, { Component } from "react";
import PropTypes from "prop-types";
import { HomeTripsList } from "./HomeTripsList";

/*** Components Bootstrap ***/
import { Grid } from "semantic-ui-react";

export class HomeTripsFather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      usuarioID: JSON.parse(localStorage.usuario)[0].usuarioID,
      trayectoID: "",
      lugarComienzo: "",
      lugarFinal: "",
      horaComienzo: "",
      plazasLibres: "",
      lastTrips: [],
      default: false
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

  componentDidMount() {
    fetch(`http://localhost:3001/api/trip/selectLastTrips`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(results => {
        console.log(results);
        if (results) {
          this.setState({
            lastTrips: results,
            default: true
          });
        }
        console.log("this.state.lastTrips --> ", this.state.lastTrips);

        localStorage.setItem("lastTrips", results);
      });
  }
  render() {
    if (this.state.default) {
      return (
        // <div className="Home-Trips">
        //   <Grid centered verticalAlign="middle" textAlign="center">
        <HomeTripsList tray={this.state.lastTrips} />
        //   </Grid>
        // </div>
      );
    } else {
      return (
        // <div className="Home-Trips">
        <Grid centered verticalAlign="middle" textAlign="center" />
        // </div>
      );
    }
  }
}
