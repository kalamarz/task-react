import { useEffect, useContext } from "react";
import { fetchUserLocation } from "../context/location/LocationActions";
import { GET_USER_LOCATION } from "../context/location/actionTypes";
import LocationContext from "../context/location/LocationContext";
import Map from "./Map";

function App() {
  const { userLocation, dispatch } = useContext(LocationContext);

  useEffect(() => {
    const getUserLocation = async () => {
      const userLocationData = await fetchUserLocation();
      dispatch({ type: GET_USER_LOCATION, payload: userLocationData });
    };

    getUserLocation();
  }, []);

  const { latitude, longitude } = userLocation;

  return (
    <div className="App">
      {!Object.keys(userLocation).length || !userLocation.success ? (
        <p>Error</p>
      ) : (
        <Map position={[latitude, longitude]} />
      )}
    </div>
  );
}

export default App;
