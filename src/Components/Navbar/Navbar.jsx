import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ className }) {
  const [value, setValue] = useState(100.0); // Giá trị mặc định là 100.00

  const handleSliderChange = (e) => {
    setValue(parseFloat(e.target.value).toFixed(2)); // Chuyển giá trị sang số thực và làm tròn đến 2 chữ số thập phân
  };
  return (
    <div className={`${className} "navbar-component"`}>
      <div className="navbar-type">
        <h7 className="navbar-type-text">type</h7>
        <pre className="type-input">
          <input type="checkbox" /> Sport (10)
        </pre>
        <pre className="type-input">
          <input type="checkbox" /> SUV (12)
        </pre>
        <pre className="type-input">
          <input type="checkbox" /> MPV (12)
        </pre>
        <pre className="type-input">
          <input type="checkbox" /> Sedan (20)
        </pre>
        <pre className="type-input">
          <input type="checkbox" /> Coupe (14)
        </pre>
        <pre className="type-input">
          <input type="checkbox" /> Hatchback (14)
        </pre>
      </div>
      <div className="navbar-type">
        <h7 className="navbar-type-text">capacity</h7>
        <pre className="type-input">
          <input type="checkbox" /> 2 Person (10)
        </pre>
        <pre className="type-input">
          <input type="checkbox" /> 4 Person (14)
        </pre>
        <pre className="type-input">
          <input type="checkbox" /> 6 Person (12)
        </pre>
        <pre className="type-input">
          <input type="checkbox" /> 8 or More (16)
        </pre>
      </div>
      <div className="navbar-type">
        <h7 className="navbar-type-text">price</h7>
        <div className="navbar-price__range">
          <input
            type="range"
            min="0"
            max="100"
            step="0.01" // Bước nhảy là 0.01 để cho phép số thực
            value={value}
            className="thang-price"
            onChange={handleSliderChange}
          />
          <p className="navbar-price__range-num">Max. ${value}</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
