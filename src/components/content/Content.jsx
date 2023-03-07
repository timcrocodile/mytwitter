import Header from "../header";
import MessageList from "../messageList";
import SideMenu from "../SideMenu/SideMenu";
import "./index.css";

const Content = () => {
  return (
    <div className="Content">
      <Header />
      <MessageList />
    </div>
  );
};

export default Content;
