import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { Redirect } from "react-router";
/*** Components Semantic ***/
import { Button, Form, Segment } from "semantic-ui-react";

export class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password2: "",
      nombre: "",
      apellidos: "",
      nie: "",
      registeredOk: false
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

    if (this.state.password === this.state.password2) {
      fetch(`http://localhost:3001/api/user/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          nombre: this.state.nombre,
          apellidos: this.state.apellidos,
          nie: this.state.nie
        })
      })
        .then(res => res.json())
        .then(results => {
          console.log(results);
          if (results) {
            localStorage.setItem("registeredOk", true);
            this.setState({
              registeredOk: true
            });
          }
        });
    } else alert("Quillo, comprueba las contraseñas");
    // Vaciar inputs al submit
    // this.setState({
    //   email: '',
    //   password: '',
    //   nombre: '',
    //   apellidos: '',
    //   nie: ''

    // })
  };

  render() {
    if (this.state.registeredOk === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="Register-wrapper">
        <div className="Register-form">
          <Segment.Group unstackable className="Formulario-Registro" raised>
            <Segment size="tiny" raised className="Formulario-Registro">
              <Form onSubmit={this._handleSubmit}>
                <Segment
                  textAlign="center"
                  size="tiny"
                  raised
                  className="Formulario-Segment Register-Segment-Titulo"
                >
                  <h2>Regístrate</h2>
                </Segment>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    className="inputEmail"
                    name="email"
                    label="Email"
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
                    label="Password"
                    name="password"
                    onChange={this._handleChange}
                    placeholder="Tu password"
                    type="password"
                    required
                  />
                  <Form.Input
                    fluid
                    className="inputPassword2"
                    label="Password"
                    name="password2"
                    onChange={this._handleChange}
                    placeholder="Confirma tu password"
                    type="password"
                    required
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    className="inputName"
                    label="Nombre"
                    name="nombre"
                    onChange={this._handleChange}
                    placeholder="Tu nombre"
                    type="text"
                    required
                  />
                  <Form.Input
                    fluid
                    className="inputLastName"
                    label="Apellidos"
                    name="apellidos"
                    onChange={this._handleChange}
                    placeholder="Tu Apellidos"
                    type="text"
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    className="inputNie"
                    label="NIE"
                    name="nie"
                    onChange={this._handleChange}
                    placeholder="Tu NIE"
                    type="text"
                    required
                    validationState
                  />
                </Form.Group>
                <Button type="submit" color="green" basic>
                  Regístrame
                </Button>
              </Form>
            </Segment>
          </Segment.Group>
        </div>
      </div>
    );
  }
}
