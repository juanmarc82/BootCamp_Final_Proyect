import React, { Component } from "react";
import PropTypes from "prop-types";
/*** Components Semantic UI ***/
import { Image, Grid, Card, Button } from "semantic-ui-react";

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
      lastTrips: this.props.lastTrips
    };
  }
  // Comprobar tipo de datos que importamos
  static propTypes = {
    nombre: PropTypes.strings,
    lugarComienzo: PropTypes.strings,
    lugarFinal: PropTypes.strings,
    horaComienzo: PropTypes.strings,
    plazasLibres: PropTypes.strings,
    trayectoID: PropTypes.number,
    lastTrips: PropTypes.array
  };

  // Añadir si da tiempo que te apunte al viaje
  // componentDidMount() {
  //   fetch(`http://localhost:3001/api/trip/selectLastTrips`, {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" }
  //   })
  //     .then(res => res.json())
  //     .then(results => {
  //       console.log(results);

  //       this.setState({ "lastTrips": results });
  //       localStorage.setItem("lastTrips", JSON.stringify(results));
  //       console.log("this.state.lastTrips --> ", this.state.lastTrips);

  //     });
  // }

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
      <Grid.Column textAlign="center" className="Home-TripDiv">
        <Card color="orange" centered>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/assets/images/avatar/large/steve.jpg"
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
            <Button basic color="green" id={usuarioConductorID}>
              ¡Apúntame!
            </Button>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}
