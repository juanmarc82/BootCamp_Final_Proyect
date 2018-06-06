import React, { Component } from "react";
import PropTypes from "prop-types";
/*** Components Semantic UI ***/
import { Image, Card, Button, Icon } from "semantic-ui-react";

export class HomeTrips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: this.props.nombreUsuario,
      lugarComienzo: this.props.lugarComienzo,
      lugarFinal: this.props.lugarFinal,
      horaComienzo: this.props.horaComienzo,
      plazasLibres: this.props.plazasLibres,
      trayectoID: this.props.trayectoID,
      usuarioConductorID: this.props.usuarioConductorID,
      lastTrips: this.props.lastTrips,
      trayectoSeleccionado: false
    };
  }
  // Comprobar tipo de datos que importamos
  static propTypes = {
    nombre: PropTypes.strings,
    lugarComienzo: PropTypes.strings,
    lugarFinal: PropTypes.strings,
    horaComienzo: PropTypes.strings,
    plazasLibres: PropTypes.strings,
    trayectoID: PropTypes.strings,
    lastTrips: PropTypes.array
  };

  _handleSelectByUserTrip = e => {
    e.preventDefault();
    fetch(`http://localhost:3001/api/trip/selectByUser`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        trayectoID: this.props.trayectoID,
        usuarioPasajeroID: JSON.parse(localStorage.usuario)[0].usuarioID,
        restarPlaza: 1
      })
    })
      .then(res => res.json())
      .then(results => {
        console.log(results);
        // Añado condición para redirect to "/panelUsuario" (Panel de Usuario)
        if (results) {
          this.setState({ trayectoSeleccionado: true });
        }
        // alert Add Viaje ok.
        alert(" Te has apuntado al Viaje!! ");
      });
  };

  render() {
    const {
      nombre,
      horaComienzo,
      lugarComienzo,
      lugarFinal,
      plazasLibres,
      trayectoID,
      usuarioConductorID
    } = this.props;
    return (
      <Card color="yellow" centered className="Home-Card">
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="http://localhost:3000/static/media/user_default.fcfe2bd1.jpg"
          />
          <Card.Header>{nombre}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Card.Description>
            <strong>Sale de: </strong> {lugarComienzo}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Card.Description>
            <strong>Va a: </strong> {lugarFinal}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Card.Description>
            <strong>Quedamos a las </strong> {horaComienzo}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            <strong>Plazas libres </strong> {plazasLibres}
          </a>
        </Card.Content>
        <Card.Content extra>
          <Button
            basic
            color="blue"
            id={usuarioConductorID}
            onClick={this._handleSelectByUserTrip}
          >
            ¡Apúntame!
          </Button>
        </Card.Content>
      </Card>
      // </Grid.Column>
    );
  }
}
