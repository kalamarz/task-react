function LocationsList({ locations }) {
  return (
    <div className="message is-link">
      <div className="message-header">
        <p>All searches:</p>
      </div>
      <div className="message-body">
        <ul>
          {locations.map((location, index) => (
            <li key={index}>{location.ip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LocationsList;
