import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import Sort from "./Sort";
import Title from "./Title/Title";
import TitleSmall from "./TitleSmall/TitleSmall";
//import Lightbox from "react-image-lightbox";
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
      {/* <Lightbox /> */}
    </React.Fragment>
  );
}

export default App;
