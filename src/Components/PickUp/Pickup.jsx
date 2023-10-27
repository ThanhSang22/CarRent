import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./PickUp.css";

function Pickup({ name }) {
  return (
    <div className="pick-up">
      <h6 className="pick-up__text">
        <input type="radio" className="pickup-input" />
        {name}
      </h6>
      <div className="pick-up__option">
        <div className="pickup">
          <h6 className="pickup-title">Locations</h6>
          <div className="pickup-option">
            <h6 className="pickup-select">Select your city</h6>
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
        <div className="pickup">
          <h6 className="pickup-title">Date</h6>
          <div className="pickup-option">
            <h6 className="pickup-select">Select your date</h6>
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
        <div className="pickup-time">
          <h6 className="pickup-title">Time</h6>
          <div className="pickup-option">
            <h6 className="pickup-select">Select your time</h6>
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pickup;
