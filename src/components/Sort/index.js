import Sort from "./Sort";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    data: state
  };
};

// const mapDispathToProps = () => {
//   getSkis: getSkisAction()
// };

const mapDispathToProps = dispatch => {
  return {
    deleteModel: id => {
      dispatch({ type: "DELETE_MODEL", id: id });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispathToProps
)(Sort);
