import { connect } from "react-redux";
import Listings from "../components/Listings";
import { removeListing } from "../redux/action";

const mapStateToProps = (state) => {
  return {
    listing: state.listing,
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeListing: (index) => dispatch(removeListing(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
