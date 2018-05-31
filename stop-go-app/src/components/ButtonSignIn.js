import React, { Component } from "react";

import { Link } from "react-router-dom";
import { NavItem, Nav, MenuItem, NavDropdown } from "react-bootstrap";

export class ButtonSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
   let nombreUsuario = JSON.parse(localStorage.usuario)[0].nombre;
    return (
      <div>
        <Nav pullRight>
          <NavItem eventKey={3} onClick={this._handleClickRegister}>
            <Link to={`/panelUsuario`}>Publica tu viaje</Link>
          </NavItem>
          <NavItem eventKey={4} onClick={this._handleClickLogin}>
            <NavDropdown
              eventKey={3}
              title={nombreUsuario}
              id="basic-nav-dropdown"
            >
              <MenuItem eventKey={3.1}>
                <Link to={`/panelUsuario`}>Panel Usuario</Link>
              </MenuItem>
              <MenuItem eventKey={3.2}>
                <Link to={`/panelUsuario`}>Viajes Publicados</Link>
              </MenuItem>
              <MenuItem eventKey={3.3}>
                <Link to={`/panelUsuario`}>Viajes Realizados</Link>
              </MenuItem>
              <MenuItem divider />
              <MenuItem  className="CerrarSesion" eventKey={3.4} onClick={this.props.onClick}>
                Cerrar Sesión
              </MenuItem>
            </NavDropdown>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
