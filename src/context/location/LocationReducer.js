import { GET_USER_LOCATION } from "./actionTypes";

const locationReducer = (state, action) => {
  switch (action.type) {
    case GET_USER_LOCATION:
      return {
        ...state,
        userLocation: action.payload,
      };

    default:
      return state;
  }
};

export default locationReducer;