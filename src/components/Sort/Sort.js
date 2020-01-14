import React, { Component } from "react";
import "./styles.css";
import SkisStuff from "../Skis/SkisStuff/SkisStuff";

// przerób na kontener
//dodaj index.js - zrób tam mapstatetoprops
// w skis zrób iteracja po pętli - funkcja map
//zmien import w app.js

class Sort extends Component {
  sortBy = key => {
    const { data } = this.props;

    const sorted = data.sort((a, b) => {
      if (a[key] === b[key]) {
        return 0;
      }
      return a[key] < b[key] ? -1 : 1;
    });
    this.setState({
      data: sorted
    });
  };

  render() {
    const { data } = this.props;
    return <SkisStuff data={data} sortBy={this.sortBy} />;
  }
}

export default Sort;

//1. ogarnac map state to props
//2. ogarnac jak wrzucac info z jsona do modulara
//5. ogarnac wysyłanie maili z modulara
//6. pierdolona galeria
