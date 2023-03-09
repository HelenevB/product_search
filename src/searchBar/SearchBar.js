import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar(props) {
  const [innerValue, setInnerValue] = useState("");

  const handleChange = (event) => {
    setInnerValue(event.target.value);
    console.log(`search bar input on typing :${innerValue}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loadAttractions(props.location, innerValue);
    console.log(
      `submission of search form, location = ${props.location} search value =${innerValue}`
    );
  };

  return (
    <div id="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          id="search-bar"
          placeholder="Search Attractions..."
          value={innerValue}
          onChange={handleChange}
        />
        <button type="submit" id="search-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" color="#0066b2" />
        </button>
      </form>
    </div>
  );
}
