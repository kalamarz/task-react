import { useState, useContext } from "react";
import LocationContext from "../context/location/LocationContext";
import { searchLocation } from "../context/location/LocationActions";
import {
  GET_SEARCHED_LOCATION,
  SET_ERROR_MESSAGE,
} from "../context/location/actionTypes";

function SearchBox() {
  const [text, setText] = useState("");

  const { isError, errorMessage, dispatch } = useContext(LocationContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === "") {
      dispatch({
        type: SET_ERROR_MESSAGE,
        payload: { message: "Enter Ip address" },
      });
    } else {
      const location = await searchLocation(text);
      dispatch({ type: GET_SEARCHED_LOCATION, payload: location });

      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field has-addons">
        <div className="control">
          <input
            className={`input round-lg ${isError ? "is-danger" : ""}`}
            type="text"
            placeholder="Search"
            value={text}
            onChange={handleChange}
          />
        </div>
        <div className="control">
          <button type="submit" className="button is-link">
            Search
          </button>
        </div>
      </div>
      <div className="control">
        {errorMessage && <p className="help is-danger pb-2">{errorMessage}</p>}
      </div>
    </form>
  );
}

export default SearchBox;
