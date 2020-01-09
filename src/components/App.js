import React from 'react';
import './App.css';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Skis from './Skis/Skis';
import Sort from './Sort/Sort';
import ModalWindow from './ModalWindow/ModalWindow';



function App() {
  return (
    <body>
      <Navigation />
      <Header />
      <Sort />
      <ModalWindow />
      <h3 class="skis-heading text-center" id="skis">Narty</h3>
      <Skis />
    </body>
  );
}

export default App;

