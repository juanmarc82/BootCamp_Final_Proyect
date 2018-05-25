import React, { Component } from "react";
import PropTypes from "prop-types";

// Descomentar esta linea cuando esté funcionando Trip.js
import { Trip } from "./Trip";

export class TripList extends Component {
  static propTypes = {
    trips: PropTypes.array
  };

  render() {
    const { trips } = this.props;
    return (
      <div className="TripList">
        {trips.map(trip => {
          return (
            <div key={trip.TripId} className="TripList-item">
              <Trip
                id={trip.TripId}
                userId={trip.UserId}
                StartTime={trip.StartTime}
                StartPlace={trip.StartPlace}                
              />
            </div>
          );
        })}
      </div>
    );
  }
}
