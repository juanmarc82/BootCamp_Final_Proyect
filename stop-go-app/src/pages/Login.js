import React, { Component } from 'react';

/*** Components ***/
import  { FormLogin } from '../components/FormLogin';
import { MenuNav } from "../components/MenuNav";
import Footer from "../components/Footer";

/*** Sources ***/
//import BackgroundImage from "../images/background-login.jpg";


export class Login extends Component {
  render() {
    return (
      <div className="Login-page">
      <MenuNav />

      <FormLogin />
      <Footer />
      </div>
    );
  }
}