import React, { Component } from "react";

/*** Components ***/
import { MenuNav } from "../components/MenuNav";
import Footer from "../components/Footer";
/*** Components Semantic UI ***/
import { Image } from "semantic-ui-react";

import BackgroundImage from "../images/background-prueba.jpg";

export class Home extends Component {
  render() {
   return (
      <div className="Home-wrapper">
        <MenuNav />
        <div className="Background-image-home">
          <Image src={BackgroundImage} />
        </div>
        <Footer />
      </div>
    );
  }
}
