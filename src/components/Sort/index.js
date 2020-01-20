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

export default connect(mapStateToProps)(Sort);
