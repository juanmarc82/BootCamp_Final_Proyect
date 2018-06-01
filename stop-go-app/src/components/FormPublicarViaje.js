import React, { Component } from "react";

// import ReactDOM from "react-dom";
import { Redirect } from "react-router";
// Import Semantic Components;
import { Form } from "semantic-ui-react";

export class FormPublicarViaje extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: JSON.parse(localStorage.usuario)[0].usuarioID,
      lugarComienzo: "",
      lugarFinal: "",
      horaComienzo: "",
      plazasLibres: "",
      trayectoAdd: false
    };
  }

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
    fetch(`http://localhost:3001/api/trip/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        usuarioConductorID: this.state.id,
        lugarComienzo: this.state.lugarComienzo,
        lugarFinal: this.state.lugarFinal,
        horaComienzo: this.state.horaComienzo,
        plazasLibres: this.state.plazasLibres
      })
    })
      .then(res => res.json())
      .then(results => {
        console.log(results);
        // Añado condición para redirect to "/panelUsuario" (Panel de Usuario)
        if (results) {
          this.setState({
            trayectoAdd: true
          });
        }
        // alert Add Viaje ok.
        alert(" Viaje Incluido Madafaca!! ");

        // Actualizar trayectos
        fetch(`http://localhost:3001/api/trip/select`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: localStorage.usuario[0].id
          })
        })
          .then(res => res.json())
          .then(results => {
            console.log(results);
            // Añado trayectos a setState y a localStorage
            this.setState({ trayectos: results.trayectos[0] });
            localStorage.setItem("trayectos", JSON.stringify(results));
          });
      });
  };

  render() {
 

    let lugarComienzo = this.state.lugarComienzo;
    let lugarFinal = this.state.lugarFinal;
    let horaComienzo = this.state.horaComienzo;
    let plazasLibres = this.state.plazasLibres;

    return (
      <div className="FormPublicarViaje-wrapper">
        <Form onSubmit={this._handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              name="lugarComienzo"
              label="¿Dónde comienza?"
              placeholder="Escribe desde donde salimos"
              onChange={this._handleChange}
              type="text"
              value={lugarComienzo}
              required
            />
            <Form.Input
              fluid
              name="horaComienzo"
              label="¿ A qué hora quedamos?"
              onChange={this._handleChange}
              placeholder="Aquí la hora"
              type="text"
              value={horaComienzo}
              required
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              name="lugarFinal"
              label="¿ A donde vamos?"
              onChange={this._handleChange}
              placeholder="Escribe a donde vamos"
              type="text"
              width={8}
              value={lugarFinal}
              required
            />
            <Form.Input
              fluid
              name="plazasLibres"
              label="¿ Cuántos cabemos?"
              onChange={this._handleChange}
              placeholder="Plazas libres"
              type="text"
              width={4}
              value={plazasLibres}
              required
            />
          </Form.Group>

          <Form.Button>¡ Añade este viaje !</Form.Button>
        </Form>
      </div>
    );
  }
}
