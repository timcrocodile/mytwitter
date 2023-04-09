import { useState } from "react";
import MenuContent from "../menuContent";
import "./index.css";

const SideMenu = ({ setModalVisibility }) => {
  const [isActive, setActive] = useState(false);

  const onHandleClick = () => {
    setModalVisibility(true);
  };

  return (
    <div className="SideMenu">
      <MenuContent />
      <button onClick={onHandleClick}>Tweet</button>

      {isActive ? <MenuContent /> : null}
    </div>
  );
};

export default SideMenu;
