import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

/*** Components ***/

/*** Pages ***/
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { UserPanel } from "./pages/UserPanel";
import { NotFound } from "./pages/NotFound";
//import { MenuNav } from "./components/MenuNav";
//import Footer from "./components/Footer";

/*** CSS ***/
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App-wrapper">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/registro" component={Register} />
          <Route path="/panelUsuario" component={UserPanel} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
