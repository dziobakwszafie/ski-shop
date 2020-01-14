import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import Sort from "./Sort/Sort";
import Title from "./Title/Title";
import TitleSmall from "./TitleSmall/TitleSmall";
import { connect } from "react-redux";
import Lightbox from "react-image-lightbox";
// . -curent directory
// .. -parent directory

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Header />
      <Title />
      <TitleSmall />
      <Sort />
      <Lightbox />
    </React.Fragment>
  );
}

export default App;
