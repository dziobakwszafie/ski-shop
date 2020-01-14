import React, { Component } from "react";
import "./styles.css";
import data from "../../skis-table.json";
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

// const mapStateToProps = state => {
//   return {
//     data: state.data
//   };
// };

// export default connect(mapStateToProps)(Sort);
export default Sort;

//1. ogarnac map state to props
//2. ogarnac jak wrzucac info z jsona do modulara
//3. ogarnąć wygląd
//4. ustalić czy używam reactstrapa czy bootstrapreact
//5. ogarnac wysyłanie maili z modulara
//6. pierdolona galeria
