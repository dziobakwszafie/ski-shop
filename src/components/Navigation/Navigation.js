import React, { PureComponent } from "react";
import "./styles.css";

class Navigation extends PureComponent {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow-sm full-bg-img"
        id="navbutton"
      >
        <a className="navbar-brand" href="#">
          <b>Narciochy</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link mr-5" href="#skis">
                Narty
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link mr-5" href="#boots">
                Buty
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link mr-5" href="#footer">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
