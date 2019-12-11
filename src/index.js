import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './Header';
import Navigation from './Navigation';
import Skis from './Skis';
import './bootstrap.min.css';




ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
