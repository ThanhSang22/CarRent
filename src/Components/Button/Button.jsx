import React from "react";
import "./Button.css";

const Button = ({ icon, name, className }) => {
  return (
    <button className={`${className} button`}>
      {icon && <span>{icon}</span>}
      {name && <p className="button-name">{name}</p>}
    </button>
  );
};

export default Button;
