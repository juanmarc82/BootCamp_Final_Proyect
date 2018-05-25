import React, { Component } from 'react';

/*** Components ***/
import  { FormRegister } from '../components/FormRegister';
import { MenuNav } from "../components/MenuNav";
import Footer from "../components/Footer";



export class Register extends Component {
  render() {
    return (
      <div className='Register-page'>
      <MenuNav />
      <FormRegister />
      <Footer />
      </div>
    );
  }
}