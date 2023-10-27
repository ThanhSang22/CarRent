import React from "react";
import Button from "../Button/Button";
import "./Slidebar.css";

function Slidebar({ title, text, img, className }) {
  return (
    <div className={`${className} slidebar-componet`}>
      <div className="slidebar-content">
        <h1 className="slidebar-title">{title}</h1>
        <h5 className="slidebar-text">{text}</h5>
        <Button className="slidebar-btn" name={"Rental Car"} />
      </div>
      <img src={img} className="slidebar-img" />
    </div>
  );
}

export default Slidebar;
