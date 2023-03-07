import React, { useState } from "react";
import "./index.css";
import SideMenu from "../SideMenu";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button
        className={`menu-button ${isOpen ? "open" : ""}`}
        onClick={handleMenuClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isOpen && (
        <div className="menu-items">
          <SideMenu />
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
