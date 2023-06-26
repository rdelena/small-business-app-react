import { connect } from "react-redux";
import AddListing from "../components/AddListing";
import { addListing } from "../redux/action";

const mapDispatchToProps = (dispatch) => {
  return {
    addListing: (listing) => dispatch(addListing(listing)),
  };
};
const mapStateToProps = (state) => {
  return {
    listing: state.listing,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddListing);
