// import messageList from "../../mock/messageList";
import MessageItem from "../messageItem";
import "./index.css";
import { useState, useEffect } from "react";

const MessageList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then(({ posts }) => setData(posts)),
      [];
  });

  return (
    <div className="MessageList">
      {data.map((pippo) => (
        <MessageItem messageData={pippo} key={pippo.id} />
      ))}
    </div>
  );
};

export default MessageList;
