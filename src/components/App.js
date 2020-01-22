import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import Sort from "./Sort";
import Title from "./Title/Title";
import Footer from "./Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Header />
      <Title />
      <Sort />
      <Footer />
    </React.Fragment>
  );
}

export default App;
