import React, { Component } from "react";

import { ButtonSignOut } from "./ButtonSignOut";
import { ButtonSignIn } from "./ButtonSignIn";

export class IsLoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      UserName: this.props.UserName,
      loggedIn: false
    };

    this.handleChildClick.bind(this);
  }

  render() {
    let logged = localStorage.loggedIn !== "false" ? true : false;
    if (logged) {
      return <ButtonSignIn onClick={this.handleChildClick} />;
    } else {
      return <ButtonSignOut />;
    }
  }

  handleChildClick = e => {
    localStorage.setItem("loggedIn", false);
    this.setState({
      loggedIn: false
    });
  };
}
export const ButtonsIsLoggedIn = () => (
  <div>
    <IsLoggedIn />
  </div>
);
