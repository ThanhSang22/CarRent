import React from "react";
import "./DetailCarpage.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import { dataCarRecom, dataRcentCar } from "../../Components/Car/dataCar";
import Car from "../../Components/Car/Car";
import Footer from "../../Components/Footer/Footer";
import view from "../../assets/images/view.png";
import view1 from "../../assets/images/view1.png";
import view2 from "../../assets/images/view2.png";
import view3 from "../../assets/images/view3.png";
import { AiOutlineStar, AiFillStar, AiFillHeart } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import Button from "../../Components/Button/Button";

function DetailCarpage() {
  return (
    <div>
      <Header />
      <div className="category-content">
        <Navbar className={"category-content__navbar"} />
        <div className="category-content__car">
          <div className="detail-car">
            <div className="detail-img">
              <img src={view} alt="#" className="detail-img__big" />
              <div className="detail-img__view">
                <img src={view1} alt="#" className="view-img" />
                <img src={view2} alt="#" className="view-img ml" />
                <img src={view3} alt="#" className="view-img ml" />
              </div>
            </div>
            <div className="detail-view">
              <h7 className="detail-name">
                <h3>Nissan GT-R</h3>
                <p>
                  <AiFillHeart />
                </p>
              </h7>
              <div className="detail-evaluate">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <h7>440+ Reviewer</h7>
              </div>
              <div className="detail-text">
                NISMO has become the embodiment of Nissan's outstanding
                performance, inspired by the most unforgiving proving ground,
                the "race track".
              </div>
              <div className="detail-carty">
                <div className="detail-carty1">
                  <p>Tyep Car</p>
                  <h7> Sport</h7>
                  <p> Capacity</p>
                  <h7> 2 Person</h7>
                </div>
                <div className="detail-carty1">
                  <p>Steering</p>
                  <h7>Manual</h7>
                  <p>Gasoline</p>
                  <h7>70L</h7>
                </div>
              </div>
              <div className="detail-bot">
                <div>
                  <h5>
                    $99.00/ <p>days</p>
                  </h5>
                  <p>$100.00</p>
                </div>
                <Button className={"detail-btn"} name={"RentNow"} />
              </div>
            </div>
          </div>
          <div className="review">
            <div className="detail-review">
              <div className="review-title">
                <div className="title-left">
                  <h1>Reviews</h1>
                </div>
                <Button className="title-right" name={"13"} />
              </div>

              <div className="review-one">
                <img src={view3} alt="" className="img-review" />
                <div className="review-content">
                  <div className="name-left">
                    <div className="big-name">
                      <h1>Alex Stanton</h1>
                      <p>CEO at Amazon</p>
                    </div>
                    <div className="review-right">
                      <div className="review-day">20 July 2020</div>
                      <div className="review-star">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                      </div>
                    </div>
                  </div>
                  <div className="text-review">
                    {" "}
                    We are very happy with the service from the MORENT App.
                    Morent has a low price and also a large variety of cars with
                    good and comfortable facilities. In addition, the service
                    provided by the officers is also very friendly and very
                    polite.
                  </div>
                </div>
              </div>
              <div className="review-one">
                <img src={view2} alt="" className="img-review" />
                <div className="review-content">
                  <div className="name-left">
                    <div className="big-name">
                      <h1>Alex Stanton</h1>
                      <p>CEO at Amazon</p>
                    </div>
                    <div className="review-right">
                      <div className="review-day">20 July 2020</div>
                      <div className="review-star">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                      </div>
                    </div>
                  </div>
                  <div className="text-review">
                    {" "}
                    We are very happy with the service from the MORENT App.
                    Morent has a low price and also a large variety of cars with
                    good and comfortable facilities. In addition, the service
                    provided by the officers is also very friendly and very
                    polite.
                  </div>
                </div>
              </div>
              <div className="review-show">
                <p>Show All</p>
                <MdKeyboardArrowDown />
              </div>
            </div>
          </div>

          <div className="recent">
            <h7>Recent Car</h7>
            <a className="list-view">View All</a>
          </div>
          <div className="category-content__listCar">
            {dataRcentCar &&
              dataRcentCar.map((car, c) => {
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
          <div className="recent">
            <h7>Recomendation Car</h7>
            <a className="list-view">View All</a>
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailCarpage;
