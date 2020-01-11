import React, { Component } from "react";
import "./styles.css";
import data from "./skis-table.json";
import Stuff from "./Stuff/Stuff";

class SortSkis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data
      //tu niby trzeba dac data: data ale jako ze
      //bierzemy dane z miejsca ktore nazywa sie tak samo jak to do ktorego trafiaja,
      //to mozemy napisac tak w skrocie po prostu data
    };
    this.sortBy = this.sortBy.bind(this);
  }
  sortBy(key) {
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
    return <Stuff data={this.state.data} sortBy={this.sortBy} />;
  }
}

export default SortSkis;
