import { createContext, useReducer } from "react";
import locationReducer from "./LocationReducer";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const initialState = {
    locationsList: [],
    userLocation: {},
    searchedLocation: {},
    isError: false,
    errorMessage: "",
  };

  const [state, dispatch] = useReducer(locationReducer, initialState);

  return (
    <LocationContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
