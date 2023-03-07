import TrendList from "../trendList";
import "./index.css";
import { FaBeer } from "react-icons/fa";

const SideTrends = () => {
  return (
    <div className="SideTrends">
      <input type="text" placeholder="what's trending?" />

      <TrendList />
    </div>
  );
};

export default SideTrends;
