// import messageList from "../../mock/messageList";
// import MessageItem from "../messageItem";
// import "./index.css";
// import { useState, useEffect } from "react";

// const MessageList = () => {
//   const [data, setData] = useState([]);

// useEffect(() => {
//   fetch("https://dummyjson.com/posts")
//     .then((response) => response.json())
//     .then(({ posts }) => setData(posts)),
//     [];
// });

//   return (
//     <div className="MessageList">
//       {data.map((pippo) => (
//         <MessageItem messageData={pippo} key={pippo.id} />
//       ))}
//     </div>
//   );
// };

// export default MessageList;
import { useState, useEffect } from "react";
import MessageItem from "../messageItem";
import "./index.css";

const MessageList = ({ headerInputValue }) => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then(({ posts }) => setMessageList(posts));
  }, []);

  const filteredMessageList = () =>
    messageList.filter((msg) => msg.body.includes(headerInputValue));

  return (
    <div className="MessageList">
      {filteredMessageList().map((message) => (
        <MessageItem messageData={message} key={message.id} />
      ))}
    </div>
  );
};

export default MessageList;
