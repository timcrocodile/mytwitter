import { useState, useEffect } from "react";
import TrendItem from "../trendItem";
import "./index.css";

const TrendList = ({ TrendsInputValue }) => {
  const [trendList, setTrendList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then(({ todos }) => setTrendList(todos));
  }, []);

  const filteredTrendList = () =>
    trendList.filter((trends) => trends.todo.includes(TrendsInputValue));
  return (
    <div className="TrendList">
      <p className="trendsstart">
        ➡️ Abbiamo selezionato i trends adatti sulla base dei tuoi gusti!
      </p>
      {filteredTrendList().map((item) => (
        <TrendItem data={item} key={item.id} />
      ))}
    </div>
  );
};

export default TrendList;
