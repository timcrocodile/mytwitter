// import "./index.css";

// const SideMenu = () => {
//   return (
//     <div className="SideMenu">
//       <ul>
//         <li>
//           <img
//             src="https://img.icons8.com/color/256/twitter--v1.png"
//             alt="twitter logo"
//           />
//         </li>
//         <li>
//           <img
//             src="https://img.icons8.com/pulsar-line/256/home-page.png"
//             alt="home"
//           />
//           <p>Home</p>
//         </li>
//         <li>
//           <img
//             src="https://img.icons8.com/material-rounded/256/hashtag-large.png"
//             alt="explore"
//           />
//           <p>Explore</p>
//         </li>
//         <li>
//           <img
//             src="https://img.icons8.com/material/256/jingle-bell.png"
//             alt="notifications"
//           />
//           <p>Notifications</p>
//         </li>
//         <li>
//           <img
//             src="https://img.icons8.com/ios-glyphs/256/filled-chat.png"
//             alt="messages"
//           />
//           <p>Messages</p>
//         </li>
//         <li>
//           <img
//             src="https://img.icons8.com/material/256/bookmark-outline.png"
//             alt="bookmarks"
//           />
//           <p>Bookmarks</p>
//         </li>
//       </ul>
//       <button>Tweet</button>
//     </div>
//   );
// };

// export default SideMenu;

import { useState } from "react";
import MenuContent from "../menuContent";
import "./index.css";

const SideMenu = ({ setModalVisibility }) => {
  const [isActive, setActive] = useState(false);
  // const [VALORE, METODO_MODIFICA_VALORE] = useState(VALORE_INIZIALE);

  // const showMessage = () => {
  //   setActive((prev) => !prev);
  // };

  const onHandleClick = () => {
    setModalVisibility(true);
  };

  return (
    <div className="SideMenu">
      <MenuContent />
      <button onClick={onHandleClick}>Tweet</button>
      {/* <button onClick={showMessage}>click</button> */}
      {isActive ? <MenuContent /> : null}
      {/* <button onClick={() => showMessage()}>click</button> OK */}
      {/* <button onClick={showMessage()}>click</button> ERRORE */}
    </div>
  );
};

export default SideMenu;
