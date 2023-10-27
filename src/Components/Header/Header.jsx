import React, { useState } from "react";
import Button from "../Button/Button";
import "./Header.css";
import { IoNotifications } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
import { CiSearch, CiFilter } from "react-icons/ci";
import accout from "../../assets/images/accout.jpg";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="header-component">
      <div className="header-start">
        <Link to="/" className="header-logo">
          morent
        </Link>

        <div className="header-search">
          <span className="header-icon">
            <CiSearch />
          </span>
          <input className="header-input" placeholder="Search something here" />
          <span className="header-icon__filter" onClick={() => setOpen(!open)}>
            <CiFilter />
          </span>
        </div>
      </div>
      <div className="header-end" setOpen={open}>
        {setOpen && (
          <div className="header-end__menu">
            <Button className="header-end__icon" icon={<AiFillHeart />} />
            <Button className="header-end__icon" icon={<IoNotifications />} />
            <Button className="header-end__icon" icon={<IoIosSettings />} />
          </div>
        )}
        <Link to="/login">
          <img src={accout} className="header-account" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
