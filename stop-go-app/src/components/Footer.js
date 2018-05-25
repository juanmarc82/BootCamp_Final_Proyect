import React from "react";
import { Segment, Grid, Icon, Image, List } from "semantic-ui-react";

import Logo from '../images/Stopgo-imagen-prueba.png';

const Footer = () => (
  <div id="footer">
    <Segment textAlign="center" size="huge" inverted attached="bottom">
      <Grid divided="vertically">
        <Grid.Row columns={3}>
          {/* Column Contact us */}
          <Grid.Column>
            <List>
              <List.Item
                icon="telephone"
                content="¡Mándanos un email!"
                size="small"
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
                size="small"
              />
              <List.Item
                icon="email"
                content={
                  <a href="mailto:prueba@prueba.com">¡Mándanos un email!</a>
                }
                size="small"
              />
              <List.Item
                icon="question circle"
                // Incluir path to Formulario contacto
                content={
                  <a href="http://www.semantic-ui.com">¿Alguna pregunta? Hazla.</a>
                }
                size="small"
              />
            </List>
          </Grid.Column>
          {/* Column center empty */}
          <Grid.Column>
            <Image
              src={ Logo }
              size="small"
              wrapped
              circular
            />
          </Grid.Column>
          {/* Column RRSS */}
          <Grid.Column>
            <List horizontal relaxed>
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
        <Grid.Row columns={1}>
          {/* Column last phrase footer */}
          <Grid.Column>
            <h6>
              Juanma Rojas | Final Proyect Bootcamp Codespace Academy |
              Codespace Academy
            </h6>

            <h6>
              Thanks to all my classmates, teachers for their support and ,of
              course, to my family{" "}
              <Icon name="heart outline" size="small" color="red" />
            </h6>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
);

export default Footer;
