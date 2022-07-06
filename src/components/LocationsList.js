function LocationsList({ locations }) {
  return (
    <ul>
      {locations.map((location, index) => (
        <li key={index}>{location.ip}</li>
      ))}
    </ul>
  );
}

export default LocationsList;
