import React, { Component } from "react";

/*** Components ***/

/*** Components Semantic UI ***/
import { Image, Grid, Card, Button } from "semantic-ui-react";

export class HomeTrips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lugarComienzo: "",
      lugarFinal: "",
      horaComienzo: "",
      //   plazasLibres: "",
      trayectoID: "",
      lastTrips: []
    };
  }
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

  render() {
    const {
      horaComienzo,
      lugarComienzo,
      lugarFinal,
      plazasLibres,
      trayectoID
    } = this.props;
    return (
      <div className="Home-Trips">
        <Grid centered verticalAlign="middle" textAlign="center">
          <Grid.Row centered columns={4} width="equal">
            <Grid.Column textAlign="center" className="Home-TripDiv">
              <Card color="orange" centered>
                <Card.Content>
                  <Image
                    floated="right"
                    size="mini"
                    src="/assets/images/avatar/large/steve.jpg"
                  />
                  <Card.Header>Steve Sanders</Card.Header>
                  <Card.Meta>Friends of Elliot</Card.Meta>
                  <Card.Description>
                    Steve wants to add you to the group{" "}
                    <strong>best friends</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Card.Description>
                    <strong>Sale de: </strong> Aquí la direccion de salida
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Card.Description>
                    <strong>Va a: </strong> Aquí la direccion de llegada
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Card.Description>
                    <strong>Quedamos a las </strong> Aquí la direccion de
                    llegada
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button basic color="green">
                    ¡Apúntame!
                  </Button>
                </Card.Content>
              </Card>
              {/* <Menu fluid vertical>
                <Menu.Item className="header">
                  <h1> Viaje 1</h1>
                </Menu.Item>
              </Menu> */}
            </Grid.Column>
            <Grid.Column textAlign="center" className="Home-TripDiv">
              <Card color="orange" centered>
                <Card.Content>
                  <Image
                    floated="right"
                    size="mini"
                    src="/assets/images/avatar/large/steve.jpg"
                  />
                  <Card.Header>Steve Sanders</Card.Header>
                  <Card.Meta>Friends of Elliot</Card.Meta>
                  <Card.Description>
                    Steve wants to add you to the group{" "}
                    <strong>best friends</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Card.Description>
                    <strong>Sale de: </strong> Aquí la direccion de salida
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Card.Description>
                    <strong>Va a: </strong> Aquí la direccion de llegada
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Card.Description>
                    <strong>Quedamos a las </strong> Aquí la direccion de
                    llegada
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button basic color="green">
                    ¡Apúntame!
                  </Button>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column textAlign="center" className="Home-TripDiv">
              <Card color="orange" centered>
                <Card.Content>
                  <Image
                    floated="right"
                    size="mini"
                    src="/assets/images/avatar/large/steve.jpg"
                  />
                  <Card.Header>Steve Sanders</Card.Header>
                  <Card.Meta>Friends of Elliot</Card.Meta>
                  <Card.Description>
                    Steve wants to add you to the group{" "}
                    <strong>best friends</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Card.Description>
                    <strong>Sale de: </strong> Aquí la direccion de salida
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Card.Description>
                    <strong>Va a: </strong> Aquí la direccion de llegada
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Card.Description>
                    <strong>Quedamos a las </strong> Aquí la direccion de
                    llegada
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button basic color="green">
                    ¡Apúntame!
                  </Button>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
