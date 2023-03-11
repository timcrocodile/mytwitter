import "./index.css";
import {
  FcHome,
  FcBinoculars,
  FcAlarmClock,
  FcFeedback,
  FcPuzzle,
} from "react-icons/fc";

const MenuContent = () => {
  return (
    <ul>
      <li>
        <img
          src="https://img.icons8.com/color/256/twitter--v1.png"
          alt="twitter logo"
        />
      </li>
      <li>
        <FcHome />
        <p>Home</p>
      </li>
      <li>
        <FcBinoculars />
        <p>Explore</p>
      </li>
      <li>
        <FcAlarmClock />
        <p>Notifications</p>
      </li>
      <li>
        <FcFeedback />
        <p>Messages</p>
      </li>
      <li>
        <FcPuzzle />
        <p>Bookmarks</p>
      </li>
    </ul>
  );
};

export default MenuContent;
