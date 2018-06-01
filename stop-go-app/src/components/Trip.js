import React, { Component } from "react";
import PropTypes from "prop-types";

/*** Components Bootstrap ***/
import { Table, Button, Icon } from "semantic-ui-react";

export class Trip extends Component {
  // Comprobar tipo de datos que importamos
  static propTypes = {
    lugarComienzo: PropTypes.strings,
    lugarFinal: PropTypes.strings,
    horaComienzo: PropTypes.strings,
    plazasLibres: PropTypes.strings
  };

  render() {
    const {
      horaComienzo,
      lugarComienzo,
      lugarFinal,
      plazasLibres
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
          {/* <Table.Row>
            <Table.Cell>    <Table.Cell>
          </Table.Row> */}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Button animated floated="right" color="green">
                <Button.Content visible>Eliminar</Button.Content>
                <Button.Content hidden onClick={this.props._handleDeleteTrip}>
                  <Icon name="delete" inverted color="red" />
                </Button.Content>
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
}
