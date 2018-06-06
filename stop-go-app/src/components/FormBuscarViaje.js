import React, { Component } from "react";

// import ReactDOM from "react-dom";
import { Redirect } from "react-router";
// Import Semantic Components;
import { Form } from "semantic-ui-react";

import { TripsSearchedList } from "./TripsSearchedList";

// export let TripsSearchedArray = [];

export class FormBuscarViaje extends Component {
  constructor(props) {
    super(props);
    this.state = {
     " usuarioPasajeroID": JSON.parse(localStorage.usuario)[0].usuarioID,
      "lugarComienzo": "",
      "lugarFinal": "",
      "horaComienzo": "",
      "plazasLibres": "",
      "trayectoSearched": false,
      "trayectosArray": []
    };
  }

  _handleChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    console.log("El Target es: ", target);
    console.log("El Evento es: ", e);
    console.log("El Valor es: ", value);
    this.setState({ [name]: value });
  };

  _handleSubmit = e => {
    e.preventDefault();
    console.log(
      "El trayectoSearched antes del fetch esta en :",
      this.state.trayectoSearched
    );
    // Modificar para UPDATE USER
    fetch(`http://localhost:3001/api/trip/search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lugarComienzo: this.state.lugarComienzo,
        lugarFinal: this.state.lugarFinal,
        horaComienzo: this.state.horaComienzo
      })
    })
      .then(res => res.json())
      .then(results => {
        localStorage.setItem("listaTrayectos", results);
        console.log(
          "Esto es lo que hay en localStorage.listaTrayectos : ",
          results
        );
        localStorage.setItem("trayectoSearched", true);
        console.log(
          "Esto está en this.state.trayectosArray: ",
          this.state.trayectosArray
        );
        console.log(
          "El trayectoSearched esta en :",
          this.state.trayectoSearched
        );
        if (results) {
          this.setState({
            trayectoSearched: true,
            trayectosArray: results
          });
          // alert Add Viaje ok.
          alert(" Viaje buscado !! ");
        }
      });
  };

  render() {
    let trayectoSearched = this.state.trayectoSearched;
    let trayectoSearchedLocalStorage = localStorage.trayectoSearched;
    let { lugarComienzo, lugarFinal, horaComienzo } = this.state;
    // let lugarComienzo = this.state.lugarComienzo;
    // let lugarFinal = this.state.lugarFinal;
    // let horaComienzo = this.state.horaComienzo;
    // let plazasLibres = this.state.plazasLibres;
    // let trayectoSearched = localStorage.trayectoSearched;
    console.log(
      "valor trayectoSearched dentro render: ",
      trayectoSearchedLocalStorage
    );
    if (trayectoSearched) {
      return (
        <div className="FormBuscarViaje-wrapper">
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
              />
              <Form.Input
                fluid
                name="horaComienzo"
                label="¿ A qué hora quedamos?"
                onChange={this._handleChange}
                placeholder="Aquí la hora"
                type="text"
                value={horaComienzo}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                fluid
                name="lugarFinal"
                label="¿ A donde vamos?"
                onChange={this._handleChange}
                placeholder="Escribe a donde vamos"
                type="text"
                width={8}
                value={lugarFinal}
              />
            </Form.Group>
            <Form.Button>¡ Prueba Suerte !</Form.Button>
          </Form>
          <br />
          <TripsSearchedList tray={this.state.trayectosArray} />
        </div>
      );
    }

    return (
      <div className="FormBuscarViaje-wrapper">
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
            />
            <Form.Input
              fluid
              name="horaComienzo"
              label="¿ A qué hora quedamos?"
              onChange={this._handleChange}
              placeholder="Aquí la hora"
              type="text"
              value={horaComienzo}
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              fluid
              name="lugarFinal"
              label="¿ A donde vamos?"
              onChange={this._handleChange}
              placeholder="Escribe a donde vamos"
              type="text"
              width={8}
              value={lugarFinal}
            />
          </Form.Group>
          <Form.Button>¡ Prueba Suerte !</Form.Button>
        </Form>
      </div>
    );
  }
}
