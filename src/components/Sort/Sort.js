import React, { PureComponent } from "react";
import Skis from "../Skis/Skis";

class Sort extends PureComponent {
  sortBy = (key) => {
    const { data } = this.props;

    const sorted = data.sort((a, b) => {
      if (a[key] === b[key]) {
        return 0;
      }
      return a[key] < b[key] ? -1 : 1;
    });
    this.setState({
      data: sorted,
    });
  };

  render() {
    const { data } = this.props;
    return <Skis data={data} sortBy={this.sortBy} />;
  }
}

export default Sort;
