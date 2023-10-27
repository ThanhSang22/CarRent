import React from "react";
import "./PaymentPage.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import visa from "../../assets/images/Visa.png";
import Bitcoin from "../../assets/images/Bitcoin.png";
import PayPal from "../../assets/images/PayPal.png";
import vsat from "../../assets/images/vsat.png";
import car from "../../assets/images/car.png";
import Button from "../../Components/Button/Button";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function PaymentPage() {
  return (
    <div>
      <div>
        <Header />
        <div className="payment content">
          <div className="pay-left">
            <div className="payment-content">
              <div className="pay-top">
                <div className="pay-left1">
                  <h2 className="pay-title">Billing Info</h2>
                  <p>Please enter your biling info</p>
                </div>
                <div className="pay-left1">
                  <p>Step 1 of 4</p>
                </div>
              </div>

              <div className="pay-bottom">
                <div className="pay-bottom1">
                  <div className="pay-name">Name</div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="input-custom"
                  />

                  <div className="pay-name">Address</div>
                  <input
                    type="text"
                    placeholder="Address"
                    className="input-custom"
                  />
                </div>
                <div className="pay-bottom2">
                  <div className="pay-name">Phone Number</div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="input-custom"
                  />

                  <div className="pay-name">Town/City</div>
                  <input
                    type="text"
                    placeholder="Town or city"
                    className="input-custom"
                  />
                </div>
              </div>
            </div>
            <div className="payment-content">
              <div className="pay-top">
                <div className="pay-left1">
                  <div className="pay-title">Rental Info</div>
                  <p>Please select your rental date</p>
                </div>
                <div className="pay-left1">
                  <p>Step 2 of 4</p>
                </div>
              </div>
              <div className="cupicup">
                <div className="pay-pickup">
                  {/* <input type="radio" /> */}
                  <p>Pick - Up</p>
                </div>
                <div className="pay-bottom">
                  <div className="pay-bottom3">
                    <div className="pay-name">Locations</div>
                    <div className="pay-input">
                      <input
                        className="nut input-custom"
                        type="text"
                        placeholder="Select your city"
                      />
                      <MdKeyboardArrowDown />
                    </div>

                    <div className="pay-name">Time</div>
                    <div className="pay-input ">
                      <input
                        type="text"
                        placeholder="Select your time"
                        className="input-custom"
                      />
                      <MdKeyboardArrowDown />
                    </div>
                  </div>
                  <div className="pay-bottom4">
                    <div className="pay-name">Date</div>
                    <div className="pay-input">
                      <input
                        type="text"
                        placeholder="Select your date"
                        className="input-custom"
                      />
                      <MdKeyboardArrowDown />
                    </div>
                  </div>
                </div>
              </div>

              <div className="cudropoff">
                <div className="pay-pickup">Drop - Off</div>
                <div className="pay-bottom">
                  <div className="pay-bottom3">
                    <div className="pay-name">Locations</div>
                    <div className="pay-input">
                      <input
                        className="nut input-custom"
                        type="text"
                        placeholder="Select your city"
                      />
                      <MdKeyboardArrowDown />
                    </div>

                    <div className="pay-name">Time</div>
                    <div className="pay-input">
                      <input
                        type="text"
                        placeholder="Select your time"
                        className="input-custom"
                      />
                      <MdKeyboardArrowDown />
                    </div>
                  </div>
                  <div className="pay-bottom4">
                    <div className="pay-name">Date</div>
                    <div className="pay-input">
                      <input
                        type="text"
                        placeholder="Select your date"
                        className="input-custom"
                      />
                      <MdKeyboardArrowDown />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="payment-content">
              <div className="pay-top">
                <div className="pay-left1">
                  <div className="pay-title">Payment Method</div>
                  <p>Please enter your payment method</p>
                </div>
                <div className="pay-left1">
                  <p>Step 3 of 4</p>
                </div>
              </div>
              <div className="pay-bottom">
                <div className="cre-card">
                  <div className="crea-card">
                    <b>Creadit Card</b>
                    <img src={visa} alt="" />
                  </div>
                  <div className="cre-in">
                    <div className="pay-bottom2">
                      <div className="pay-name">Card Number</div>
                      <input
                        type="text"
                        placeholder="Card number"
                        className="input-custom"
                      />
                      <div className="pay-name">Card Holder</div>
                      <input
                        type="text"
                        placeholder="Card holder"
                        className="input-custom"
                      />
                    </div>
                    <div className="pay-bottom2">
                      <div className="pay-name">Expration Date</div>
                      <input
                        type="text"
                        placeholder="DD/MM/YY"
                        className="input-custom"
                      />

                      <div className="pay-name">CVC</div>
                      <input
                        type="text"
                        placeholder="CVC"
                        className="input-custom"
                      />
                    </div>
                  </div>
                  <div className="paypal">
                    <div className="paypal-left">
                      <input type="radio" />
                      <b> PayPal</b>
                    </div>
                    <img src={PayPal} alt="" />
                  </div>
                  <div className="bitcoin">
                    <div className="bitcoin-left">
                      <input type="radio" />
                      <b>Bitcoin</b>
                    </div>
                    <img src={Bitcoin} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="payment-content">
              <div className="pay-top">
                <div className="pay-left1">
                  <div className="pay-title">Confirmation </div>
                  <p>
                    We are getting to the end. Just fews clicks and your rental
                    is ready!{" "}
                  </p>
                </div>
                <div className="pay-left1">
                  <p>Step 4 of 4</p>
                </div>
              </div>
              <div className="confi1">
                <input type="checkbox" />
                <b>
                  {" "}
                  I agree with sending an Marketing and newsletter emails. No
                  spam, promissed!
                </b>
              </div>
              <div className="confi2">
                <input type="checkbox" />
                <b> I agree with sending an Marketing and newsletter emails.</b>
              </div>
              <Button className="cre-butoon" name={"Rent Now"} />
              <img src={vsat} alt="" className="img-vsat" />
              <div className="cre-end">
                <b>All your data are safe</b>
                <p>
                  We are using the most advaned security to provide your the
                  best expensive ever.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="pay-right">
            <div className="pay-righttop">
              <h4 className="pay-title">Rental Summary</h4>
              <p>
                Please select your rental date please select your rental date
                please select your rental date please select your rental date.{" "}
              </p>
            </div>
            <div className="right-second">
              <div className="img-crecar">
                <img src={car} alt="" />
              </div>
              <div className="top-left">
                <h4> Nissan GT - R</h4>
                <div className="star-view">
                  <div className="start">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>
                  <p> 440+Reviewer</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="boc2right">
              <div className="right-text">
                <p>Subtotal</p>
                <p>Tax</p>
              </div>
              <div className="right-price">
                <p>$80.00</p>
                <p>$0</p>
              </div>
            </div>

            <div className="input-rightt">
              <div className="input-input">
                <input
                  type="text"
                  placeholder="Apply promo code"
                  className="input-custom"
                />
                <b>Apply now</b>
              </div>
            </div>

            <div className="right-bot">
              <div className="bot-left">
                <div className="bot-title">Total Rental Price </div>
                <p>Oven price and oven discode cost</p>
              </div>
              <div className="bot-right">
                <p>$80.00</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default PaymentPage;
