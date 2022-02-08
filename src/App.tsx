import { useState, useEffect, FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Chats from "./pages/Chats";
import IChat from "./interfaces/IChat";
import Navbar from "./components/Navbar";

const App: FC = (): JSX.Element => {
  const [chats, setChats] = useState<IChat[]>([]);

  useEffect(() => {
    let mounted = true;
    axios
      .get<IChat[]>("http://localhost:3001/api/v1/chat")
      .then((response) => {
        if (mounted) {
          setChats(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chats />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
