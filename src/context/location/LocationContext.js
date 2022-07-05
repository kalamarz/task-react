import { createContext, useReducer } from "react";
import locationReducer from "./LocationReducer";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const initialState = {
    locations: [],
    userLocation: {},
    searchedLocation: {},
    loading: false,
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
