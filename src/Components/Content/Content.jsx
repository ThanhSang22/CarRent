import React from "react";
import "./Content.css";
import Slidebar from "../Sildebar/Slidebar";
import { dataSildebar } from "../Sildebar/dataSildebar";
import { BsArrowDownUp } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Button from "../Button/Button";
import { dataCarPopular, dataCarRecom } from "../Car/dataCar";
import Car from "../Car/Car";
import Pickup from "../PickUp/Pickup";
import { Link } from "react-router-dom";

function Content() {
  return (
    <div className="content">
      <div className="slidebar">
        {dataSildebar &&
          dataSildebar.map((dts, d) => {
            return (
              <Slidebar
                className={"col-md-6 "}
                key={d}
                title={dts.title}
                text={dts.text}
                img={dts.img}
              />
            );
          })}
      </div>
      <div className="content-up">
        <Pickup name={"Pick-Up"} />
        <Link to="/category">
          <Button className={"pickup-btn"} icon={<BsArrowDownUp />} />
        </Link>
        <Pickup name={"Drop-Off"} />
      </div>
      <div className="content-list">
        <div className="list">
          <h7>Popular Car</h7>
          <a className="list-view">View All</a>
        </div>
        <div className="content--list-popular">
          {dataCarPopular &&
            dataCarPopular.map((car, c) => {
              return (
                <Car
                  key={c}
                  name={car.name}
                  type={car.type}
                  img={car.img}
                  gasoline={car.gasoline}
                  quantity={car.quantity}
                />
              );
            })}
        </div>
        <h7 className="list-recom">Recomendation Car</h7>
        <div className="content-listCar">
          {dataCarRecom &&
            dataCarRecom.map((car, c) => {
              return (
                <Car
                  key={c}
                  name={car.name}
                  type={car.type}
                  img={car.img}
                  gasoline={car.gasoline}
                  quantity={car.quantity}
                />
              );
            })}
        </div>
        <h7 className="car-quantity">120 car</h7>
        <Button className="content-list__btn" name={"Show more car"} />
      </div>
    </div>
  );
}

export default Content;
