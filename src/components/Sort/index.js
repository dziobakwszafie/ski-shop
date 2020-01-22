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
    deletePost: id => {
      dispatch({ type: "DELETE_POST", id: id });
    }
  };
};
export default connect(mapStateToProps, mapDispathToProps)(Sort);
