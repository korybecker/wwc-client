import React, { useState, FC } from "react";
import ChatProps from "../interfaces/ChatProps";

const Chat: FC<ChatProps> = (props) => {
  const formatDate = (date: Date): String => {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };

  return (
    <div className="ml-4 container card">
      <h1 className="row">@{props.username}</h1>
      <div className="row">
        <p>{props.text}</p>
      </div>
      {formatDate(props.createdAtDate)}
    </div>
  );
};

export default Chat;
