import React, { Component } from "react";
import PropTypes from "prop-types";

/*** Components Bootstrap ***/
import { Table, Button } from "semantic-ui-react";

export class TripsSearched extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "usuarioPasajeroID": JSON.parse(localStorage.usuario)[0].usuarioID,
      "trayectoID": this.props.trayectoID
    };
  }
  // Comprobar tipo de datos que importamos
  static propTypes = {
    "lugarComienzo": PropTypes.strings,
    "lugarFinal": PropTypes.strings,
    "horaComienzo": PropTypes.strings,
    "plazasLibres": PropTypes.strings,
    "trayectoID": PropTypes.number
  };
  _handleSelectByUserTrip = e => {
    e.preventDefault();
    fetch(`http://localhost:3001/api/trip/selectByUser`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        trayectoID: this.state.trayectoID,
        usuarioPasajeroID: JSON.parse(localStorage.usuario)[0].usuarioID,
        restarPlaza: 1
      })
    })
      .then(res => res.json())
      .then(results => {
        // Añado condición para redirect to "/panelUsuario" (Panel de Usuario)
        if (results) {
          this.setState({ "trayectoSeleccionado": true });
        }
        // alert Add Viaje ok.
        alert(" Te has apuntado al Viaje!! ");
      });
  };

  render() {
    const {
      horaComienzo,
      lugarComienzo,
      lugarFinal,
      plazasLibres,
      trayectoID
    } = this.props;
    return (
      <Table striped stackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Hora comienzo</Table.HeaderCell>
            <Table.HeaderCell>Lugar de comienzo</Table.HeaderCell>
            <Table.HeaderCell>Lugar de destino</Table.HeaderCell>
            <Table.HeaderCell>Plazas Libres</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>{horaComienzo}</Table.Cell>
            <Table.Cell>{lugarComienzo}</Table.Cell>
            <Table.Cell>{lugarFinal}</Table.Cell>
            <Table.Cell>{plazasLibres}</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Button
                animated
                floated="right"
                color="green"
                onClick={this._handleSelectByUserTrip}
                trayectoID={trayectoID}
              >
                <Button.Content visible>¡ Recógeme !</Button.Content>
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
}
