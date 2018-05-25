import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Descomentar linea inferior cuando esté creado Trip.js
// import { Trip } from './Trip.js';


/*** Components Bootstrap ***/
import { ControlLabel, Col, Button, Form, FormControl, FormGroup  } from 'react-bootstrap';


export class TripList extends Component {
    // Comprobar tipo de datos que importamos
    static propTypes = {
        TripId: PropTypes.string,
        UserId: PropTypes.strings, 
        StartTime: PropTypes.strings,
        StartPlace: PropTypes.strings
    }


  render() {
      const { TripId, UserId, StartTime, StartPlace } = this.props;
    return (
        <div className="TripList-wrapper">
      </div>
    );
  }
}