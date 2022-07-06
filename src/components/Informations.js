function Informations({ informations, heading }) {
  const { city, continent_name, country_name, ip, location } = informations;

  return (
    <div className="message is-link">
      <div className="message-header">
        <p>{heading}</p>
      </div>
      <div className="message-body">
        <ul>
          <li>
            <span className="has-text-weight-semibold">Ip:</span>{" "}
            <span>{ip}</span>
          </li>
          <li>
            <span className="has-text-weight-semibold">City:</span>{" "}
            <span>{city}</span>
          </li>
          <li>
            <span className="has-text-weight-semibold">Continent name:</span>{" "}
            <span>{continent_name}</span>
          </li>
          <li>
            <span className="has-text-weight-semibold">Country name:</span>{" "}
            <span>{country_name}</span>
          </li>
          {location?.country_flag && (
            <li className="is-flex">
              <span className="has-text-weight-semibold"> Country flag:</span>{" "}
              <img
                src={location?.country_flag}
                alt="country flag"
                className="image is-24x24 ml-2"
              />
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Informations;
