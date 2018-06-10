import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { Redirect } from "react-router";
/*** Components Semantic ***/
import { Button, Form, Segment } from "semantic-ui-react";

export class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "email": "",
      "password": "",
      "nombre": "",
      "usuarioConductorID": "",
      "loggedIn": false,
      "trayectos": []
    };
  }

  _handleChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    console.log(target);
    console.log(value);
    console.log(name);
    this.setState({ [name]: value });
  };

  _handleSubmit = e => {
    e.preventDefault();

    // Petición Usuario logeado
    fetch(`http://localhost:3001/api/user/select`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(results => {
        console.log("Select usuario en fetch login : ", results);

        this.setState({
          "nombre": results.usuario[0].nombre,
          "usuarioConductorID": JSON.parse(localStorage.usuario)[0].usuarioID 
          // results.usuario[0].usuarioID  
        });
        localStorage.setItem("usuario", JSON.stringify(results.usuario));
        // Añado redirect to "/" (home)
        if (results) {
          localStorage.setItem("loggedIn", true);
          this.setState({
            "loggedIn": true
          });
        }
      });
    // Si hay results => Petición Trayectos Usuario logeado
    fetch(`http://localhost:3001/api/trip/select`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        usuarioConductorID: JSON.parse(localStorage.usuario)[0].usuarioID 
        
      })
    })
      .then(res => res.json())
      .then(results => {
        console.log(results);

        this.setState({ "trayectos": results });
        localStorage.setItem("trayectos", JSON.stringify(results));
      });
  };

  render() {
    if (this.state.loggedIn === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="Login-wrapper">
        <div className="Login-form">
          <Segment.Group>
            <Segment  size="tiny" raised className="Login-Segment">
              <Form onSubmit={this._handleSubmit}>
                <Segment
                  textAlign="center"
                  // color aqui
                  className="Login-Segment-Titulo"
                  size="tiny"
                  raised
                >
                 <h2> Inicia Sesión </h2>
                </Segment>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    className="inputEmail"
                    name="email"
                    label="email"
                    onChange={this._handleChange}
                    placeholder="Tu email"
                    type="email"
                    required
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    className="inputPassword"
                    label="password"
                    name="password"
                    onChange={this._handleChange}
                    placeholder="Tu password"
                    type="password"
                    required
                  />
                </Form.Group>
                <Button type="submit" color="green" basic>
                  Log In
                </Button>
              </Form>
            </Segment>
          </Segment.Group>
        </div>
      </div>
    );
  }
}
