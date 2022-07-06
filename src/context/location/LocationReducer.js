import { GET_USER_LOCATION, GET_SEARCHED_LOCATION } from "./actionTypes";

const locationReducer = (state, action) => {
  switch (action.type) {
    case GET_USER_LOCATION:
      return {
        ...state,
        userLocation: action.payload,
      };
    case GET_SEARCHED_LOCATION:
      return {
        ...state,
        searchedLocation: action.payload,
        locationsList: [action.payload, ...state.locationsList],
      };

    default:
      return state;
  }
};

export default locationReducer;
