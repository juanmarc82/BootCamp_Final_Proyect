import React, { Component } from "react";
// // import ReactDOM from "react-dom";
// import { Redirect } from "react-router";
/*** Components Semantic ***/
import { Form } from "semantic-ui-react";


export class UpdatePerfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: localStorage.usuario[0].id,
      email: localStorage.usuario[0].email,
      password: localStorage.usuario[0].password,
      password2: "",
      nombre: localStorage.usuario[0].nombre,
      apellidos: localStorage.usuario[0].apellidos,
      nie: localStorage.usuario[0].nie,
      telefono: localStorage.usuario[0].telefono,
      conductor: localStorage.usuario[0].conductor,
      sobreMi: localStorage.usuario[0].sobreMi,
      foto: localStorage.usuario[0].foto,
      loggedIn: false
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

//   _handleSubmit = e => {
//     e.preventDefault();

//     fetch(`http://localhost:3001/api/user/select`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: this.state.email,
//         password: this.state.password
//       })
//     })
//       .then(res => res.json())
//       .then(results => {
//         this.setState({ UserName: results.usuario[0].nombre });
//         localStorage.setItem("usuario", JSON.stringify(results.usuario));
//         // Añado redirect to "/" (home)
//         if (results) {
//           localStorage.setItem("loggedIn", true);
//           this.setState({
//             loggedIn: true
//           });
//         }
//       });
//   };
  
  render() {
    let nombre = JSON.parse(localStorage.usuario)[0].nombre;
    let apellidos = JSON.parse(localStorage.usuario)[0].apellidos;
    let telefono = JSON.parse(localStorage.usuario)[0].telefono;
    let foto = JSON.parse(localStorage.usuario)[0].foto;
    let conductor = JSON.parse(localStorage.usuario)[0].conductor;
    let nie = JSON.parse(localStorage.usuario)[0].nie;
    let sobreMi = JSON.parse(localStorage.usuario)[0].sobreMi;
    let email = JSON.parse(localStorage.usuario)[0].email;
    let password = JSON.parse(localStorage.usuario)[0].password;
    let fechaRegistroUsuario = JSON.parse(localStorage.usuario)[0].f_registro;
    if (this.state.loggedIn === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="Login-wrapper">
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
      </div>
    );
  }
}
