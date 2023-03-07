import "./App.css";
import Content from "./components/content";
import SideMenu from "./components/SideMenu/SideMenu";
import SideTrends from "./components/sideTrends";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <Content />
      <SideTrends />
    </div>
  );
}

export default App;
