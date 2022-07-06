import HomePage from "./components/HomePage";
import { LocationProvider } from "./context/location/LocationContext";
import "./App.scss";

function App() {
  return (
    <LocationProvider>
      <HomePage />
    </LocationProvider>
  );
}

export default App;
