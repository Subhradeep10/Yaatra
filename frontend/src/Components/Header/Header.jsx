import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="header">
      <div className="headerList">
        <div className="headerListItem">
          <FontAwesomeIcon icon={faBed} />
          <span>Hotels</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faPlane} />
          <span>Flights</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faCar} />
          <span>Car Rentals</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faBed} />
          <span>Attractions</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faTaxi} />
          <span>Airport Taxi</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
