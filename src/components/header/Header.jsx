import "./index.css";
import { FaHamburger } from "react-icons/fa";
import { FcManager, FcHeatMap } from "react-icons/fc";

import { useState, useEffect, useRef } from "react";
import HamburgerMenu from "../hamburgerMenu";

const Header = ({ setHeaderInputValue }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [resetClicked, setResetClicked] = useState(false);

  const hamburgerTrigger = () => {
    setShowMenu(!showMenu);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setHeaderInputValue(inputValue);
  };

  const onResetClick = () => {
    setResetClicked(true);
    setInputValue("");
    setHeaderInputValue("");
  };

  useEffect(() => {
    if (resetClicked) {
      setResetClicked(false);
    }
  }, [resetClicked]);
  return (
    <div className="Header">
      <div className="Header__up">
        <FaHamburger className="Header__hamburger" onClick={hamburgerTrigger} />
        <HamburgerMenu showMenu={showMenu} />
        <p>Home</p>
        <FcHeatMap size={25} />
      </div>
      <div className="Header__down">
        <FcManager size={70} />
        <form onSubmit={onHandleSubmit}>
          <input
            type="text"
            placeholder="Search something ..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
          <button type="reset" onClick={onResetClick}>
            Reset
          </button>

          <input type="submit" value="Search" />
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
