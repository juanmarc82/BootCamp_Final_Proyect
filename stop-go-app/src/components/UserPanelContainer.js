import React, { Component } from "react";

// Components
import img_prueba from "../images/Stopgo-imagen-prueba.png";
import UserPanelTab from "./UserPanelTab";

//import { Link } from "react-router-dom";

import { Grid } from "semantic-ui-react";

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

      });
  };

  render() {
    return (
      <div className="UserPanel-Container">
      <Grid columns={2} centered>
      <Grid.Column >
      <UserPanelTab />
      </Grid.Column>
       </Grid >
      </div>
    );
  }
}
