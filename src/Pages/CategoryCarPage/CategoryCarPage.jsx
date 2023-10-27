import React from "react";
import "./CategoryCarPage.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Pickup from "../../Components/PickUp/Pickup";
import Button from "../../Components/Button/Button";
import { BsArrowDownUp } from "react-icons/bs";
import { dataCarRecom } from "../../Components/Car/dataCar";
import Car from "../../Components/Car/Car";

function CategoryCarPage() {
  return (
    <div>
      <Header />
      <div className="category-content">
        <Navbar className={"category-content__navbar"} />
        <div className="category-content__car">
          <div className="content-up">
            <Pickup name={"Pick-Up"} />
            <Button className={"pickup-btn"} icon={<BsArrowDownUp />} />
            <Pickup name={"Drop-Off"} />
          </div>
          <div className="category-content__listCar">
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
          <Button className="category-content__btn" name={"Show more car"} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CategoryCarPage;
