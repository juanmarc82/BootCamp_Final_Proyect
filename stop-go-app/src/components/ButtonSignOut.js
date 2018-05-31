import React, { Component } from "react";

import { Link } from "react-router-dom";

import { NavItem, Nav } from "react-bootstrap";

export class ButtonSignOut extends Component {
  render() {
    return (
      <div>
        <Nav pullRight className="Nav">
          <NavItem eventKey={3} onClick={this._handleClickRegister}>
            <Link to={`/registro`}>Registro</Link>
          </NavItem>
          <NavItem eventKey={4} onClick={this._handleClickLogin}>
            <Link to={`/login`}>Login</Link>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
