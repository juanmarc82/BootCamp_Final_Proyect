import React, { Component } from "react";
import PropTypes from "prop-types";

/*** Components Bootstrap ***/
import { Table, Button } from "semantic-ui-react";

export class HomeTripsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "usuarioID": JSON.parse(localStorage.usuario)[0].usuarioID,
      "trayectoID": "",
      "lugarComienzo": "" ,
      "lugarFinal": "",
      "horaComienzo": "" ,
      "plazasLibres": "",
      "trayectoID": "",
      "lastTrips": []
    };
  }
  // Comprobar tipo de datos que importamos
  static propTypes = {
    "lugarComienzo": PropTypes.strings,
    "lugarFinal": PropTypes.strings,
    "horaComienzo": PropTypes.strings,
    "plazasLibres": PropTypes.number,
    "trayectoID": PropTypes.number
  };


  componentDidMount() {
    fetch(`http://localhost:3001/api/trip/selectLastTrips`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(results => {
        console.log(results);
        
        this.setState({ "lastTrips": results });
        localStorage.setItem("lastTrips", JSON.stringify(results));
        console.log("this.state.lastTrips --> ", this.state.lastTrips);
        
      });
  }
  render(){
    return (
      
    )
  }
}