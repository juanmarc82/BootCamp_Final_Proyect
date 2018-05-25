import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
//import Navbar from 'react-bootstrap/lib/Navbar';


export class MenuNav extends Component {
  
  componentDidMount (){

  }
   // Enlazar a Login
  _handleClickLogin = (e) => {
   // alert('You have clicked on Login. Pronto saldrá Login');
  }
     // Enlazar a Login
  _handleClickRegister = (e) => {
   // alert('You have clicked on me Registro. Pronto saldrá Registro');
  }

  render() {
    return (
        <Navbar fixedTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={`/`}>Stop | Go</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1}>
            <Link to={`/viaje`}>Busca un viaje</Link>
          </NavItem>
          <NavItem eventKey={2}>
            <Link to={`/contacto`}>Sobre nosotros</Link>
          </NavItem>
          <NavItem eventKey={3} onClick={this._handleClickRegister}>
            <Link to={`/registro`}>Registro</Link>
          </NavItem>
          <NavItem eventKey={4} onClick={this._handleClickLogin}>
            <Link to={`/login`}>Login</Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}


