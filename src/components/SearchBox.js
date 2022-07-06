import { useState, useContext } from "react";
import LocationContext from "../context/location/LocationContext";
import { searchLocation } from "../context/location/LocationActions";
import { GET_SEARCHED_LOCATION } from "../context/location/actionTypes";

function SearchBox() {
  const [text, setText] = useState("");

  const { searchedLocation, dispatch } = useContext(LocationContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === "") {
      console.log("empty");
    } else {
      const location = await searchLocation(text);
      dispatch({ type: GET_SEARCHED_LOCATION, payload: location });

      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBox;
