import { combineReducers } from "redux";

const user = (state = null) => state;

const listing = (state = [], action) => {
  switch (action.type) {
    case "ADD_LISTING":
      return [...state, action.value];
    case "REMOVE_LISTING":
      const listing = [...state];
      listing.splice(action.value, 1);
      return listing;
    default:
      return state;
  }
};

export default combineReducers({ user, listing });
