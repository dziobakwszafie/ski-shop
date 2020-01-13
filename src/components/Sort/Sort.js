import React, { Component } from "react";
import "./styles.css";
import data from "../Skis/SkisStuff/skis-table.json";
import SkisStuff from "../Skis/SkisStuff/SkisStuff";

// przerób na kontener
//dodaj index.js - zrób tam mapstatetoprops
// w skis zrób iteracja po pętli - funkcja map
//zmien import w app.js

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
    this.sortBy = this.sortBy.bind(this);
  }
  sortBy(key) {
    const sorted = this.state.data.sort((a, b) => {
      if (a[key] === b[key]) {
        return 0;
      }
      return a[key] < b[key] ? -1 : 1;
    });
    this.setState({
      data: sorted
    });
  }
  render() {
    return <SkisStuff data={this.state.data} sortBy={this.sortBy} />;
  }
}

export default Sort;
