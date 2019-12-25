import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Navigation from './Navigation';
import Skis from './Skis';


function App() {
  return (
    <body>
      <Navigation />
      <Header />
      <Skis />
    </body>
  );
}

export default App;

