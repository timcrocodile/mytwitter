import "./index.css";
import { useState, useEffect } from "react";

const MessageItem = ({ messageData }) => {
  const { userId, title, body, tags } = messageData;

  return (
    <div className="MessageItem">
      <div className="MessageItem__content">
        <p className="userid">{userId}</p>

        <span>{title}</span>
        <span> {tags}</span>
        <p>{body}</p>
        <div className="MessageItem__content--icons">
          <img
            src="https://img.icons8.com/external-those-icons-lineal-those-icons/256/external-Chat-Bubble-messages-and-chat-those-icons-lineal-those-icons-10.png"
            alt="chat"
          />
          <img
            src="https://img.icons8.com/material-sharp/256/sorting-arrows-horizontal.png"
            alt="arrow"
          />
          <img
            src="https://img.icons8.com/ios-glyphs/256/hearts.png"
            alt="heart"
          />
          <img src="https://img.icons8.com/ios/256/upload.png" alt="upload" />
        </div>
      </div>
    </div>
  );
};
export default MessageItem;
