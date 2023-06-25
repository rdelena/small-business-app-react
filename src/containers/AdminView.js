import { connect } from "react-redux";
import AdminView from "../components/AdminView";
import { removeListing } from "../redux/action";

const mapStateToProps = (state) => {
  return {
    listing: state.listing,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeListing: (index) => dispatch(removeListing(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminView);
