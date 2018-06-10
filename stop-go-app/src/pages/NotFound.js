import React from "react";
import { ButtonBackToHome } from "../components/ButtonBackToHome";
import { MenuNav } from "../components/MenuNav";
import Footer from "../components/Footer";

export const NotFound = () => (
  <div className="NotFound-page">
    <MenuNav />
    <div className="NotFound-wrapper">
      <h1 className="title">404!</h1>
      <h2 className="subtitle">No existe la página</h2>
      <ButtonBackToHome />
    </div>
    <Footer />
  </div>
);
