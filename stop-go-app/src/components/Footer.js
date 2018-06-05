import React from "react";
import { Segment, Grid, Icon, Image, List } from "semantic-ui-react";

import Logo from "../images/stop&go.png";

const Footer = () => (
  <div id="footer">
    <Grid
      divided="vertically"
      centered
      verticalAlign="middle"
      columns="equal"
      mobile={16}
      tablet={8}
      computer={4}
    >
      <Grid.Row columns={3}>
        {/* Column Contact us */}
        <Grid.Column textAlign="centered">
          <div className="footer-columns">
            <div>
              <span class="glyphicon glyphicon-earphone" aria-hidden="true" />  
              <a href="mailto:prueba@prueba.com">
              &nbsp; Estamos esperando tu llamada
              </a>
            </div>
            <div>
              <span class="glyphicon glyphicon-pushpin" aria-hidden="true" />
              <a href="https://goo.gl/maps/4W9wuKwwMrk">&nbsp; ¡Encuéntranos!</a>
            </div>
            <div>
              <span class="glyphicon glyphicon-pencil" aria-hidden="true" />
              <a href="http://www.semantic-ui.com">&nbsp; ¿Alguna pregunta? Hazla </a>
            </div>
            <div>
              <span class="glyphicon glyphicon-send" aria-hidden="true" />
              <a href="">&nbsp; ¡Mándanos un email!</a>
            </div>
          </div>

          {/* <List animated verticalAlign="middle" textAlign="center" centered relaxed>
              <List.Item
                icon="telephone"
                content="¡Mándanos un email!"
                size="tiny"
              />
              <List.Item
                icon="street view"
                content={
                  <p>
                    {" "}
                    <a href="https://goo.gl/maps/4W9wuKwwMrk">
                      Málaga, Spain
                    </a>{" "}
                  </p>
                }
                size="tiny"
              />
              <List.Item
                icon="email"
                content={
                  <a href="mailto:prueba@prueba.com">¡Mándanos un email!</a>
                }
                size="tiny"
              />
              <List.Item
                icon="question circle"
                // Incluir path to Formulario contacto
                content={
                  <a href="http://www.semantic-ui.com">
                    ¿Alguna pregunta? Hazla.
                  </a>
                }
                size="tiny"
              />
            </List> */}
        </Grid.Column>
        {/* Column center empty */}
        <Grid.Column textAlign="centered">
          <Image src={Logo} size="medium" wrapped />
        </Grid.Column>
        {/* Column RRSS */}
        <Grid.Column textAlign="centered">
          <List horizontal size="tiny">
            <List.Item>
              <Icon name="facebook" size="large" />
            </List.Item>
            <List.Item>
              <Icon name="youtube play" size="large" />
            </List.Item>
            <List.Item>
              <Icon name="twitter square" size="large" />
            </List.Item>
            <List.Item>
              <Icon name="linkedin square" size="large" />
            </List.Item>
            <List.Item>
              <Icon name="github" size="large" />
            </List.Item>
          </List>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row className="footer-lastFrase">
        {/* Column last phrase footer */}
        <Grid.Column textAlign="centered">
          <h6><strong>
            Juanma Rojas | Final Proyect Bootcamp Codespace Academy | Codespace
            Academy
            </strong>
          </h6>
          <p>
            Thanks to all my classmates and teachers for their support and, of
            course, to my family{" "}
            <Icon name="heart outline" size="small" color="red" />
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default Footer;
