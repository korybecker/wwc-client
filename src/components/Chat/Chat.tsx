import React, { useState, FC } from "react";
import ChatProps from "../../interfaces/ChatProps";

const Chat: FC<ChatProps> = (props) => {
  const formatDate = (date: Date): String => {
    return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
  };

  return (
    <div className="mb-2 container card">
      <div className="row mt-2">
        <h4 className="col">@{props.username}</h4>
        <h5 className="col">{formatDate(props.createdAtDate)}</h5>
      </div>

      <div className="row mb-2">
        <div className="col">{props.text}</div>
      </div>
    </div>
  );
};

export default Chat;
