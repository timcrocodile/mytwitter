import "./index.css";
import HamburgerMenu from "../HamburgerMenu";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [uppercase, setUppercase] = useState(false);
  const inputField = useRef(null);
  const onchange = () => {
    const value = inputField.current.value;
    inputField.current.value = uppercase
      ? value.toLowerCase()
      : value.toUpperCase();
    setUppercase((prev) => !prev);
  };

  const resetField = useRef(null);

  useEffect(() => {
    resetField.current.type = "submit";
  });

  return (
    <div className="Header">
      <div className="Header__up">
        <HamburgerMenu />
        <img
          src="https://img.icons8.com/color/256/twitter--v1.png"
          alt="logo"
        />
        <img
          src="https://img.icons8.com/material-rounded/256/sparkling.png"
          alt="sparkling"
        />
      </div>
      <div className="Header__down">
        <img
          className="Header__down--profile"
          src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
          alt="profile"
        />
        <form className="nuovoform">
          <input type="text" placeholder="What's happening?" ref={inputField} />
          <button type="button" onSubmit={onchange} className="case">
            Toggle Case
          </button>

          <input value="submit" ref={resetField} className="cerca" />
        </form>
        <img src="https://img.icons8.com/fluency/256/image.png" alt="image" />
        <img src="https://img.icons8.com/arcade/256/gif.png" alt="gif" />
        <img
          src="https://img.icons8.com/fluency/256/combo-chart.png"
          alt="graph"
        />
      </div>
    </div>
  );
};

export default Header;
