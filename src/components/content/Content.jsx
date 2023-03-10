import Header from "../header";
import MessageList from "../messageList";
import SideMenu from "../SideMenu/SideMenu";
import "./index.css";
import Modal from "../modal";
import { useState } from "react";

const Content = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="Content">
      <Header />
      <Modal />

      <MessageList />
    </div>
  );
};

export default Content;
