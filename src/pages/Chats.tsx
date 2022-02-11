import { FC, useEffect, useState, ChangeEvent, FormEvent } from "react";
import axios from "../axios";
import IChat from "../interfaces/IChat";
import Chat from "../components/Chat/Chat";

const Chats: FC = () => {
  const [chats, setChats] = useState<Array<IChat>>();
  const [postedIndicator, setPostedIndicator] = useState<boolean>(true);
  // const [createdAt, setCreatedAt] = useState<Date>(new Date());
  // const [updatedAt, setUpdatedAt] = useState<Date>(new Date());

  const [username, setUsername] = useState<string>("");
  const [postText, setPostText] = useState<string>("");
  const [key, setKey] = useState<number>(500);

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePostText = (e: ChangeEvent<HTMLInputElement>) => {
    setPostText(e.target.value);
  };

  useEffect(() => {
    let mounted = true;

    const config = {
      headers: {
        Authorization: "Bearer ",
      },
    };

    axios
      .get("/chat", config)
      .then((response) => {
        if (mounted) {
          console.log(response);
          setChats(response.data.chats);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      mounted = false;
    };
  }, [postedIndicator]);

  const createChat = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const postBody = {
      key: key,
      postText: postText,
    };
    axios
      .post("http://localhost:3001/api/v1/chat", postBody)
      .then((res) => {
        setPostedIndicator((postedIndicator) => !postedIndicator);
        setKey((key) => key + 1);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="container">
      <h1>chat page</h1>
      {chats &&
        chats.map((chat, index) => {
          return (
            <Chat
              createdAtDate={new Date()}
              key={index}
              text={chat.postText}
              createdAt={chat.createdAt}
              updatedAt={chat.updatedAt}
              username={chat.username}
            />
          );
        })}
      <form onSubmit={createChat} autoComplete="off">
        <div className="form-group">
          <label htmlFor="username">username</label>
          <input
            onChange={handleUsername}
            type="text"
            className="form-control"
            id="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="post-text">post text</label>
          <input
            onChange={handlePostText}
            type="text"
            className="form-control"
            id="post-text"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Chats;
