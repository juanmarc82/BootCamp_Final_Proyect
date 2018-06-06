import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Navbar, Nav, NavItem, Image } from "react-bootstrap";

import Logo from "../images/stop&go.png";
import { ButtonsIsLoggedIn } from "./ButtonsIsLoggedIn";

export class MenuNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      UserName: this.props.UserName,
      loggedIn: false
    };
  }

  render() {
    return (
      <Navbar
        collapseOnSelect
        fixedTop
        stackable
        fluid
        className="Navbar-wrapper"
      >
        <Navbar.Header>
          <Navbar.Brand>
            <div className="Logo-MenuNav">
              <Link to={`/`}>
                <Image src={Logo} rounded responsive />
              </Link>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="Nav">
            <NavItem eventKey={2}>
              <Link to={`/contacto`}>Sobre nosotros</Link>
            </NavItem>
          </Nav>
          <ButtonsIsLoggedIn userName={this.state.UserName} />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
