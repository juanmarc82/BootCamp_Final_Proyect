import React, { Component } from "react";

/*** Components ***/
import { MenuNav } from "../components/MenuNav";
import { HomeTripsFather } from "../components/HomeTripsFather";
import Footer from "../components/Footer";

/*** Components Semantic UI ***/
import { Image, Grid, Menu, Card, Button } from "semantic-ui-react";

export class Home extends Component {
  render() {
    return (
      <div className="Home-wrapper">
        <MenuNav />
        <div className="Background-image-home">
          <Grid
            centered
            verticalAlign="middle"
            textAlign="center"
            columns="equal"
            mobile={16}
            tablet={8}
            computer={4}
          >
            <Grid.Row centered columns={3}>
              <Grid.Column textAlign="center">
                <h1>!Para y Vamos!</h1>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={3}>
              <Grid.Column textAlign="center">
                <h3>Porque compartir es importante...</h3>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <div className="Home-Trips">
          <Grid centered verticalAlign="middle" textAlign="center">
          <Grid.Row centered columns={4} width="equal"  className="Home-Trips-item">
          {/* key={ultimosTrayectos.trayectoID} */}
            <HomeTripsFather />
            </Grid.Row>

          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}
