import React, { Component } from "react";

// Components
import img_prueba from "../images/user_default.jpg";

//import { Link } from "react-router-dom";

import { Card, Image } from "semantic-ui-react";

export class PerfilUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: localStorage.usuario[0].id,
      email: localStorage.usuario[0].email,
      nombre: localStorage.usuario[0].nombre,
      apellidos: localStorage.usuario[0].apellidos,
      nie: localStorage.usuario[0].nie,
      telefono: localStorage.usuario[0].telefono,
      conductor: localStorage.usuario[0].conductor,
      sobreMi: localStorage.usuario[0].sobreMi,
      foto: localStorage.usuario[0].foto
    };
  }

  render() {
    // Añadir los campos para que pinte la info del usuario
    let nombre = JSON.parse(localStorage.usuario)[0].nombre;
    let apellidos = JSON.parse(localStorage.usuario)[0].apellidos;
    let telefono = JSON.parse(localStorage.usuario)[0].telefono;
    let foto = JSON.parse(localStorage.usuario)[0].foto;
    let conductor = JSON.parse(localStorage.usuario)[0].conductor;
    let nie = JSON.parse(localStorage.usuario)[0].nie;
    let sobreMi = JSON.parse(localStorage.usuario)[0].sobreMi;
    let email = JSON.parse(localStorage.usuario)[0].email;
    let fechaRegistroUsuario = JSON.parse(localStorage.usuario)[0].f_registro;

    return (
      <Card centered color="grey">
        <Image src={img_prueba} />
        <Card.Content>
          <Card.Header>
            {nombre} {apellidos}
          </Card.Header>
          <Card.Meta>
            <strong>Registrado:</strong> {fechaRegistroUsuario}
          </Card.Meta>
          <Card.Description>
            <strong>Documento identidad:</strong>
            {nie}
          </Card.Description>
          <Card.Description>
            <strong>Móvil:</strong>
            {telefono}
          </Card.Description>
          <Card.Description>
            <strong>Email: </strong>
            {email}
          </Card.Description>
          <Card.Description>
            <strong>¿Conduciré? </strong>
            {conductor}
          </Card.Description>
          <Card.Description>
            <strong>Algo sobre mi:</strong> {sobreMi}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}
