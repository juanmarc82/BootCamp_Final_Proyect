import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Redirect } from 'react-router';
/*** Components Semantic ***/
import { Button, Form, Segment } from "semantic-ui-react";

export class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      UserName: ""
    };
  }

  _handleChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    console.log(target);
    console.log(value);
    console.log(name);
    this.setState({ [name]: value });
  };

  _handleSubmit = e => {
    e.preventDefault();

    fetch(`http://localhost:3001/api/user/select`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(results => {
        console.log(results);
        // Añado redirect to "/" (home)
        if (results) {
          ReactDOM.render(
            <Redirect to='/' />
          );
}
                });
  };
s
  render() {
    return <div className="Login-wrapper" >
        <div className="Login-form">
          {/* <img src={BackgroundImage} className="Background-image-login" alt="BackgroundImage-Logins" /> */}

          <Segment.Group>
            <Segment inverted color="grey" size="tiny" raised>
              <Form onSubmit={this._handleSubmit}>
                <Segment textAlign="center" inverted color="blue" size="tiny" raised>
                  Inicia Sesión
                </Segment>
                <Form.Group widths="equal">
                  <Form.Input fluid className="inputEmail" name="email" label="email" onChange={this._handleChange} placeholder="Tu email" type="email" />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input fluid className="inputPassword" label="password" name="password" onChange={this._handleChange} placeholder="Tu password" type="password" />
                </Form.Group>
                <Button type="submit" color="green">
                  Log In
                </Button>
              </Form>
            </Segment>
          </Segment.Group>
        </div>
      </div>;
  }
}
