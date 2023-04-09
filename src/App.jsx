// import "./App.css";
// import Content from "./components/content";
// import SideMenu from "./components/SideMenu/SideMenu";
// import SideTrends from "./components/sideTrends";

// function App() {
//   return (
//     <div className="App">
//       <SideMenu />
//       <Content />
//       <SideTrends />
//     </div>
//   );
// }

// export default App;

//modificato togliendo il componente HamburgerMenu che non viene usato ****vercel3****
import { useState, useEffect } from "react";
import Button from "./components/button";
import Content from "./components/content";
import HamburgerMenu from "./components/HamburgerMenu";
import Modal from "./components/modal";
import Popup from "./components/popup";
import SideMenu from "./components/sideMenu";
import SideTrends from "./components/sideTrends";
import "./App.css";

function App() {
  const [isModalVisibile, setModalVisibility] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // console.log(window.pageYOffset);
    }
  }, []);

  return (
    <div className="App">
      <SideMenu setModalVisibility={setModalVisibility} />
      <Content />
      <SideTrends />

      {isModalVisibile && <Modal setModalVisibility={setModalVisibility} />}

      <Popup>
        <h3>Ciaooooo</h3>
        <Button value="Close popup" onClick={() => alert("Chiuso!")} />
      </Popup>
    </div>
  );
}

export default App;
