import React, { Component } from "react";

// Components
import img_prueba from "../images/Stopgo-imagen-prueba.png";

//import { Link } from "react-router-dom";

import { Grid, Image, Card, Form, Button } from "semantic-ui-react";

// import {  } from "react-bootstrap";

// const optionsConductor = [
//   { key: "si", text: "Si", value: "si" },
//   { key: "no", text: "No", value: "no" }
// ];

export class UserPanelContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: JSON.parse(localStorage.usuario)[0].id,
      email: JSON.parse(localStorage.usuario)[0].email,
      password: JSON.parse(localStorage.usuario)[0].password,
      password2: "",
      nombre: JSON.parse(localStorage.usuario)[0].nombre,
      apellidos: JSON.parse(localStorage.usuario)[0].apellidos,
      nie: JSON.parse(localStorage.usuario)[0].nie,
      telefono: JSON.parse(localStorage.usuario)[0].telefono,
      conductor: JSON.parse(localStorage.usuario)[0].conductor,
      sobreMi: JSON.parse(localStorage.usuario)[0].sobreMi,
      foto: JSON.parse(localStorage.usuario)[0].foto,
      userPanelWindow: ""
    };
  }

  componentDidMount() {}

  // _handleOnClickDriver = e => {
  //   const target = e.target;
  //   const value = target.value;
  //   const name = target.name;
  //   this.setState({ [name]: value });
  // }

  _handleChangeImage = e => {
    const file = e.target.files[0];
    // const value = target.value;
    // const name = target.name;
    console.log(file);
  };

  _handleChangeUserPanelWindow = e => {
    const value = e.target.value;
    this.setState({ userPanelWindow: value });

    console.log(value);
  };

  _handleChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    console.log(target);
    console.log(e);

    console.log(value);
    // console.log(name);
    this.setState({ [name]: value });
  };

  _handleSubmit = e => {
    e.preventDefault();
    // Modificar para UPDATE USER
    fetch(`http://localhost:3001/api/user/update`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: localStorage.usuario[0].id,
        nombre: this.state.nombre,
        apellidos: this.state.lastName,
        telefono: this.state.telefono,
        foto: this.state.foto,
        conductor: this.state.conductor,
        sobreMi: this.state.sobreMi,
        nie: this.state.nie,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(results => {
        console.log(results);
        // console.log(results.usuario[0].nombre);
        // this.setState({ UserName: results.usuario[0].nombre });
        // debugger;
        // localStorage.setItem("usuario", JSON.stringify(results.usuario));
        // console.log(localStorage.usuario[0].nombre);
        // debugger;
        // // Vaciar inputs al submit
        // this.setState({
        //   email: "",
        //   password: "",
        //   nombre: "",
        //   apellidos: "",
        //   nie: ""
        // });
        // if (results) {
        //   localStorage.setItem("loggedIn", true);
        //   this.setState({
        //     loggedIn: true
        //   });
        // }
      });
  };

  render() {
    let nombre = this.state.nombre;
    let apellidos = JSON.parse(localStorage.usuario)[0].apellidos;
    let telefono = JSON.parse(localStorage.usuario)[0].telefono;
    let foto = JSON.parse(localStorage.usuario)[0].foto;
    let conductor = JSON.parse(localStorage.usuario)[0].conductor;
    let nie = JSON.parse(localStorage.usuario)[0].nie;
    let sobreMi = JSON.parse(localStorage.usuario)[0].sobreMi;
    let email = JSON.parse(localStorage.usuario)[0].email;
    let password = JSON.parse(localStorage.usuario)[0].password;
    let fechaRegistroUsuario = JSON.parse(localStorage.usuario)[0].f_registro;
    return (
      <div className="UserPanel-Container">
        <Grid columns={3} centered divided>
          <Grid.Column width={3}>
            <Card fluid centered>
              <Image src={foto} />
              <Card.Content>
                <Card.Header>{nombre}</Card.Header>
                <Card.Meta>Registrado: {fechaRegistroUsuario}</Card.Meta>
                <Card.Description>
                  {/* Aquí meter Descripción de usuario cuando exista en BD ese campo */}
                  Daniel is a comedian living in Nashville.
                </Card.Description>
              </Card.Content>
            </Card>
            <Button.Group vertical size="large" fluid>
              <Button
                onClick={this._handleChangeUserPanelWindow}
                value="perfil"
              >
                Modificar mi perfil
              </Button>
              <Button
                onClick={this._handleChangeUserPanelWindow}
                value="publiViaje"
              >
                Publicar viajes
              </Button>
              <Button
                onClick={this._handleChangeUserPanelWindow}
                value="buscarViaje"
              >
                Buscar viajes
              </Button>
              <Button
                onClick={this._handleChangeUserPanelWindow}
                value="monedero"
              >
                Monedero StopGo
              </Button>
              <Button
                onClick={this._handleChangeUserPanelWindow}
                value="feedback"
              >
                Valora a los usuarios
              </Button>
              <Button
                onClick={this._handleChangeUserPanelWindow}
                value="borraPerfil"
                color="red"
              >
                Eliminar cuenta
              </Button>
            </Button.Group>
          </Grid.Column>
          <Grid.Column width={6}>
          <Form onSubmit={this._handleSubmit} enctype="multipart/form-data">
            <Form.Group widths="equal">
              <Form.Input
                fluid
                name="nombre"
                label="Nombre"
                placeholder="Nombre"
                onChange={this._handleChange}
                type="text"
                // value={nombre}
              />
              <Form.Input
                fluid
                label="Apellidos"
                name="apellidos"
                onChange={this._handleChange}
                placeholder="Apellidos"
                type="text"
                // value={apellidos}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                name="email"
                label="Email"
                onChange={this._handleChange}
                placeholder="Email"
                type="email"
                width={8}
                value={email}
              />
              <Form.Input
                fluid
                name="telefono"
                label="Móvil"
                onChange={this._handleChange}
                placeholder="Móvil"
                type="text"
                width={4}
                value={telefono}
              />
              <Form.Input
                fluid
                name="nie"
                label="NIE"
                onChange={this._handleChange}
                placeholder="NIE"
                width={4}
                value={nie}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                name="password"
                label="Contraseña"
                onChange={this._handleChange}
                placeholder="Contraseña"
                type="password"
                width={6}
                value={password}
              />
              <Form.Input
                fluid
                name="passwoord2"
                label="Repite la contraseña"
                onChange={this._handleChange}
                placeholder="Repite la contraseña"
                type="password"
                width={6}
              />
            </Form.Group>
            <Form.Group widths="equal">
              {/* <Form.Select
                  fluid
                  name="conductor"
                  label="Conductor"
                  onChange={this._handleChange}
                  options={optionsConductor}
                  placeholder="si"
                  // value={conductor}
                /> */}
              <div class="form-group">
                <label for="exampleFormControlSelect1">Conductor</label>
                <select
                  class="form-control"
                  id="Selector-Conductor"
                  onChange={this._handleChange}
                >
                  <option value="si">Si</option>
                  <option value="no">No</option>
                </select>
              </div>
              <Form.Input
                fluid
                name="foto"
                label="Sube tu foto"
                onChange={this._handleChangeImage}
                placeholder="foto"
                type="file"
                // value={foto}
              />
            </Form.Group>
            {/* Añadir fotos usuario */}
            <Form.TextArea
              name="sobreMi"
              label="Habla sobre ti a los demás usuarios"
              onChange={this._handleChange}
              placeholder="Los usuarios suelen fiarse más de alguien que tenga algo que contar."
              type="text"
              value={sobreMi}
            />
            <Form.Button>Modificar Perfil</Form.Button>
          </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
