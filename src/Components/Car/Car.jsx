import React, { useState } from "react";
import Button from "../Button/Button";
import "./Car.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiGasStationFill } from "react-icons/ri";
import { PiLifebuoyLight } from "react-icons/pi";
import { BsFillPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Car({ name, type, img, gasoline, quantity }) {
  const [favorite, setFavorite] = useState(true);

  return (
    <div className="car-component">
      {/* <Link to="/detail" className="link"> */}
      <div className="car__header">
        <div className="car__header-top">
          <h3 className="car-name">{name}</h3>
          {favorite ? (
            <AiOutlineHeart onClick={() => setFavorite(!favorite)} />
          ) : (
            <AiFillHeart
              className="favorite"
              onClick={() => setFavorite(!favorite)}
            />
          )}
        </div>
        <h8 className="car-type">{type}</h8>
      </div>
      <Link to="/detail" className="link">
        <div className="car-component__top">
          <img src={img} className="car__img" />
          <div className="car__describe">
            <div className="car__describe-item">
              <RiGasStationFill />
              <h8>{gasoline}L</h8>
            </div>
            <div className="car__describe-item">
              <PiLifebuoyLight />
              <h8>Manual</h8>
            </div>
            <div className="car__describe-item">
              <BsFillPeopleFill />
              <h8>{quantity} people</h8>
            </div>
          </div>
        </div>
      </Link>

      <div className="car__footer">
        <h5 className="car-name">
          $99.00/ <p>day</p>
        </h5>
        <Link to="/payment" className="link">
          <Button name={"RentNow"} />
        </Link>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default Car;
