import "./index.css";

const TrendItem = ({ data }) => {
  return (
    <div className="ogg">
      <h3>{data.subTitle}</h3>
      <h4>{data.title}</h4>
      <p>{data.text}</p>
      <br />
    </div>
  );
};

export default TrendItem;
