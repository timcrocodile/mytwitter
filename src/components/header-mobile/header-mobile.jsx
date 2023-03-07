import "./index.css";
import HamburgerMenu from "../HamburgerMenu";

const Headermobile = () => {
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
    </div>
  );
};

export default Headermobile;
