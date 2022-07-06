import {
  GET_USER_LOCATION,
  GET_SEARCHED_LOCATION,
  SET_ERROR_MESSAGE,
} from "./actionTypes";

const locationReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_USER_LOCATION:
      return {
        ...state,
        userLocation: payload,
      };
    case GET_SEARCHED_LOCATION:
      const isError = "success" in payload && !payload.success;
      return {
        ...state,
        searchedLocation: payload,
        locationsList: [payload, ...state.locationsList],
        isError,
        errorMessage: isError ? payload.error?.info : "",
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: payload.message,
        isError: true,
      };
    default:
      return state;
  }
};

export default locationReducer;
