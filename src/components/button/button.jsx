import "./index.css";



const Button = ({onClick}) = () => {
  return <button className="tweetbtn" onClick={onClick}>clicca qui per comporre un tweet</button>;
};

export default Button;
