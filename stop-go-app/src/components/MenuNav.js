import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Navbar, Nav, NavItem } from "react-bootstrap";
//import Navbar from 'react-bootstrap/lib/Navbar';

import { ButtonsIsLoggedIn } from "./ButtonsIsLoggedIn";

export class MenuNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      UserName: this.props.UserName,
      loggedIn: false
    }
  }
  componentDidMount(){}
  // Enlazar a Login
  _handleClickLogin = e => {
    // alert('You have clicked on Login. Pronto saldrá Login');
  };
  // Enlazar a Login
  _handleClickRegister = e => {
    // alert('You have clicked on me Registro. Pronto saldrá Registro');
  };
//  _handleClickSignOut = e => {
//     localStorage.setItem("loggedIn", false);
//     this.setState({
//       loggedIn: false
//     });
//     console.log("Estoy cerrando sesion");
    
//   };

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
            <Link to={`/`}  >Stop | Go</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="Nav">
            <NavItem eventKey={1}>
              <Link to={`/buscaViaje`}>Busca un viaje</Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to={`/contacto`}>Sobre nosotros</Link>
            </NavItem>
          </Nav>
            <ButtonsIsLoggedIn userName= { this.state.UserName }/>
          {/* <NavItem eventKey={3} onClick={this._handleClickRegister}>
              <Link to={`/registro`}>Registro</Link>
            </NavItem>
            <NavItem eventKey={4} onClick={this._handleClickLogin}>
              <Link to={`/login`}>Login</Link>
            </NavItem> */}
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
