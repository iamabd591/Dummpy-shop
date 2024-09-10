import React, { useState } from "react";
import "./DropDown.css";

const LanguageDropdown = () => {
  // State to manage dropdown visibility and selected language
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Select Language");

  // Array of languages (You can add more or fetch from an API)
  const languages = ["English", "Spanish", "French", "German", "Chinese"];

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle language selection
  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="dropdown">
      {/* Dropdown button showing the selected language */}
      <button className="dropdown-btn" onClick={toggleDropdown}>
        {selectedLanguage}
      </button>

      {/* Conditional rendering of dropdown menu */}
      {isOpen && (
        <ul className="dropdown-menu">
          {languages.map((language, index) => (
            <li key={index} onClick={() => handleLanguageClick(language)}>
              {language}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
