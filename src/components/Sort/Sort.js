import React, { Component } from "react";
import Skis from "../Skis/Skis";

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
    return <Skis data={data} sortBy={this.sortBy} />;
  }
}

export default Sort;
