import React, { Component } from "react";
import PropTypes from "prop-types";

/*** Components Bootstrap ***/
import { Table, Button, Confirm } from "semantic-ui-react";

export class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarioID: JSON.parse(localStorage.usuario)[0].usuarioID,
      trayectoID: this.props.trayectoID
    };
  }
  // Comprobar tipo de datos que importamos
  static propTypes = {
    lugarComienzo: PropTypes.strings,
    lugarFinal: PropTypes.strings,
    horaComienzo: PropTypes.strings,
    plazasLibres: PropTypes.number,
    trayectoID: PropTypes.number
  };

  _handleDeleteTrip = e => {
    e.preventDefault();

    fetch(`http://localhost:3001/api/trip/delete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: this.state.trayectoID
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
  };
  show = () => this.setState({ open: true })
  handleConfirm = () => this.setState({ open: false })
  handleCancel = () => this.setState({ open: false })


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
                floated="right"
                color="red"
                onClick={this._handleDeleteTrip}
                trayectoID={trayectoID}
              >
                <Button.Content visible>Eliminar</Button.Content>
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
}
