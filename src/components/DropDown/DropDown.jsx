import React, { useState } from "react";
import "./DropDown.css";

function DropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        ENG
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="dropdown-item">Option 1</li>
          <li className="dropdown-item">Option 2</li>
          <li className="dropdown-item">Option 3</li>
        </ul>
      )}
    </div>
  );
}

export default DropDown;
