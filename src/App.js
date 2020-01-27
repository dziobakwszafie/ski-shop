import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Sort from "./components/Sort";
import Title from "./components/Title/Title";
import Footer from "./components/Footer/Footer";

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
