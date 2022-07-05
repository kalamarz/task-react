import { useEffect, useContext } from "react";
import { fetchUserLocation } from "../context/location/LocationActions";
import { GET_USER_LOCATION } from "../context/location/actionTypes";
import LocationContext from "../context/location/LocationContext";
import Map from "./Map";
import Informations from "./Informations";

function HomePage() {
  const { userLocation, dispatch } = useContext(LocationContext);

  useEffect(() => {
    const getUserLocation = async () => {
      const userLocationData = await fetchUserLocation();
      dispatch({ type: GET_USER_LOCATION, payload: userLocationData });
    };

    getUserLocation();
  }, [dispatch]);

  const { latitude, longitude } = userLocation;

  return (
    <div className="App">
      {!Object.keys(userLocation).length ? (
        <p>Error</p>
      ) : (
        <div>
          <Map position={[latitude, longitude]} />
          <Informations informations={userLocation} />
        </div>
      )}
    </div>
  );
}

export default HomePage;
