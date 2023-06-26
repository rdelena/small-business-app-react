import { connect } from "react-redux";
import NewListing from "../components/NewListing";
import { addListing } from "../redux/action";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addListing: (listing) => dispatch(addListing(listing)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewListing);
