import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function Map({ latitude, longitude }) {
  const isPosition = latitude && longitude;
  const mapPosition = {
    position: isPosition ? [latitude, longitude] : [51.505, -0.09],
    zoom: isPosition ? 13 : 0,
  };

  return (
    <MapContainer
      center={mapPosition.position}
      zoom={mapPosition.zoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {isPosition && <Marker position={mapPosition.position}></Marker>}
    </MapContainer>
  );
}

export default Map;
