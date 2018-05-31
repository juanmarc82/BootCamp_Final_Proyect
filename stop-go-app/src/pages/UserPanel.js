import React, { Component } from "react";

// Components
import { MenuNav } from "../components/MenuNav";
import Footer from "../components/Footer";
import { UserPanelContainer } from "../components/UserPanelContainer";

//import { Link } from "react-router-dom";

import { Grid, Image } from "semantic-ui-react";

// import {  } from "react-bootstrap";

export class UserPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      UserName: this.props.UserName,
      loggedIn: false
    };
  }
  componentDidMount() {}

  render() {
    return (
      <div className="UserPanel-wrapper">
        <MenuNav />
        <UserPanelContainer />
        <Footer />
      </div>
    );
  }
}
