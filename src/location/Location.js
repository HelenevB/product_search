import Flag from "react-flagkit";
import React, { useState } from "react";

export default function Location(props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleClick = (event) => {
    console.log("clicked");
    props.loadAttractions(event.target.id, props.searchValue);
    handleMouseOut();
  };

  const location = props.location;
  let display;

  if (location === "en-ie") {
    display = (
      <p className="country">
        <Flag country="IE" />
        &nbsp;EUR
      </p>
    );
  } else if (location === "de-de") {
    display = (
      <p className="country">
        <Flag country="DE" /> &nbsp; EUR
      </p>
    );
  } else {
    display = (
      <p className="country">
        <Flag country="GB" />
        &nbsp; GBP
      </p>
    );
  }

  return (
    <div onMouseLeave={handleMouseOut} id="geolocation">
      <div onMouseOver={handleMouseOver}>{display}</div>

      {isHovering ? (
        <div id="popup">
          <p className="country" onClick={handleClick} id="en-ie">
            <Flag country="IE" /> &nbsp;Ireland(IE) EUR
          </p>
          <p className="country" onClick={handleClick} id="en">
            <Flag country="GB" /> &nbsp; English(UK) GBP
          </p>
          <p className="country" onClick={handleClick} id="de-de">
            <Flag country="DE" /> &nbsp; Deutsch(DE) EUR
          </p>
        </div>
      ) : null}
    </div>
  );
}

