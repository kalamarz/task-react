import { useEffect, useContext } from "react";
import { fetchUserLocation } from "../context/location/LocationActions";
import { GET_USER_LOCATION } from "../context/location/actionTypes";
import LocationContext from "../context/location/LocationContext";
import Map from "./Map";
import Informations from "./Informations";
import SearchBox from "./SearchBox";
import LocationsList from "./LocationsList";

function HomePage() {
  const { userLocation, searchedLocation, locationsList, dispatch } =
    useContext(LocationContext);

  useEffect(() => {
    const getUserLocation = async () => {
      const userLocationData = await fetchUserLocation();
      dispatch({ type: GET_USER_LOCATION, payload: userLocationData });
    };

    getUserLocation();
  }, [dispatch]);

  const { latitude: userLatitude, longitude: userLongitude } = userLocation;
  const { latitude: searchedLatitude, longitude: searchedLongitude } =
    searchedLocation;

  return (
    <div className="container">
      {!Object.keys(userLocation).length ? (
        <p>Loading...</p>
      ) : (
        <div className="columns">
          <div className="column is-one-quarter">
            <LocationsList locations={locationsList} />
          </div>
          <div className="column">
            <div className="columns">
              <div className="column">
                <Map latitude={userLatitude} longitude={userLongitude} />
              </div>
              <div className="column">
                <Informations
                  informations={userLocation}
                  heading="User location"
                />
              </div>
            </div>

            <SearchBox />
            <div className="columns">
              <div className="column">
                <Map
                  latitude={searchedLatitude}
                  longitude={searchedLongitude}
                />
              </div>
              <div className="column">
                <Informations
                  informations={searchedLocation}
                  heading="Last search"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
