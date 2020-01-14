import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import Sort from "./Sort/Sort";
import { connect } from "react-redux";
// . -curent directory
// .. -parent directory

function App() {
  return (
    <body>
      <Navigation />
      <Header />
      <h3 class="skis-heading text-center" id="skis">
        Narty
      </h3>
      <h4 class="skis-heading text-center" id="skis">
        Sortuj według
      </h4>
      <Sort />
    </body>
  );
}

export default App;
