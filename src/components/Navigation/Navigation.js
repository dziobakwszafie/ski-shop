import React, { Component } from 'react';
import './styles.css';

class Navigation extends Component {
    render() {
        return (
        <nav class="navbar navbar-expand-lg navbar-dark shadow-sm full-bg-img" id="navbutton">
          <a class="navbar-brand" href="#"><b>Narciochy</b></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link mr-5" href="#skis">Narty</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link mr-5" href="#boots">Buty</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link mr-5" href="#footer">Kontakt</a>
                </li>
            </ul>
          </div>
        </nav>
        );
    }
}

export default Navigation;