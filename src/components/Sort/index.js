import Sort from "./Sort";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

export default connect(mapStateToProps)(Sort);
