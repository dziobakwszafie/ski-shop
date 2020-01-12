import React, { Component } from "react";
import "./styles.css";
import data from "../Skis/skis-table.json";
import Skis from "../Skis/Skis";

// przerób na kontener
//dodaj index.js - zrób tam mapstatetoprops
// w skis zrób iteracja po pętli - funkcja map
//zmien import w app.js

//jak w pętli to dodajemy key={`${index}ski-item`}
class SortSkis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data
      //tu niby trzeba dac data: data ale jako ze
      //bierzemy dane z miejsca ktore nazywa sie tak samo jak to do ktorego trafiaja,
      //to mozemy napisac tak w skrocie po prostu data
    };
    this.sortByLength = this.sortByLength.bind(this);
    this.sortByPrice = this.sortByPrice.bind(this);
  }
  sortByLength(key) {
    const sorted = this.state.data.sort((a, b) => {
      ///console.log(a[key], b[key])
      if (a[key] === b[key]) {
        return 0;
      }
      return a[key] < b[key] ? -1 : 1;
    });
    this.setState({
      data: sorted
    });
  }
  sortByPrice(key) {
    const sorted = this.state.data.sort((a, b) => {
      ///console.log(a[key], b[key])
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
    return <Skis data={this.state.data} sortBy={this.sortByLength} />;
  }
}

export default SortSkis;
