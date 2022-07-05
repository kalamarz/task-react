function Informations({ informations }) {
  const {
    city,
    continent_name,
    country_name,
    ip,
    location: { country_flag },
  } = informations;
  return (
    <ul>
      <li>
        Ip: <span>{ip}</span>
      </li>
      <li>
        City :<span>{city}</span>
      </li>
      <li>
        Continent name :<span>{continent_name}</span>
      </li>
      <li>
        Country name :<span>{country_name}</span>
      </li>
      <li>
        Country flag :<img src={country_flag} alt="country flag" />
      </li>
    </ul>
  );
}

export default Informations;
