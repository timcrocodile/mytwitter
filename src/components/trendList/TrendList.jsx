import TrendItem from "../trendItem";
import "./index.css";

const TrendList = () => {
  const arrayTrends = [
    {
      subTitle: "Musica - Di Tendenza",
      title: "Eminem",
      text: "16.000 Tweet ",
    },
    {
      subTitle: "Tecnologia - Di Tendenza",
      title: "Apple",
      text: "89.000 Tweet ",
    },
    {
      subTitle: "Di Tendenza in: Italia",
      title: "Mare",
      text: "45.000 Tweet ",
    },
  ];

  return (
    <div className="trends">
      <h1>Tendenze per te</h1>
      {arrayTrends.map((item, index) => (
        <TrendItem data={item} key={index} />
      ))}
    </div>
  );
};

export default TrendList;
