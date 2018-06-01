import React, { Component } from "react";

// Components

//import { Link } from "react-router-dom";

import { Form } from "semantic-ui-react";

export class PruebaFormUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: JSON.parse(localStorage.usuario)[0].usuarioID,
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
    };
  }

  componentDidMount() {}

  _handleChangeImage = e => {
    const file = e.target.files[0];
    // const value = target.value;
    // const name = target.name;
    console.log(file);
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
        id: this.state.id,
        nombre: this.state.nombre,
        apellidos: this.state.apellidos,
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
        alert(" Perfil modificado ")
      });
  };

  render() {
    let nombre = this.state.nombre;
    let apellidos = this.state.apellidos;
    let telefono = this.state.telefono;
    let foto = this.state.foto;
    // let conductor = this.state.conductor;  
    let nie = this.state.nie;
    let sobreMi = this.state.sobreMi;
    let email = this.state.email;
    let password = this.state.password;

    return (
      <div className="FormUpdateUsuario-wrapper">
        <Form onSubmit={this._handleSubmit} enctype="multipart/form-data">
          <Form.Group widths="equal">
            <Form.Input
              fluid
              name="nombre"
              label="Nombre"
              placeholder="Nombre"
              onChange={this._handleChange}
              type="text"
              value={nombre}
            />
            <Form.Input
              fluid
              label="Apellidos"
              name="apellidos"
              onChange={this._handleChange}
              placeholder="Apellidos"
              type="text"
              value={apellidos}
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
      </div>
    );
  }
}
