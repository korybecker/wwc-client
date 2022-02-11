import { useEffect } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let mounted = true;
    axios
      .get("/logout")
      .then((_res) => {
        navigate("/chat");
      })
      .catch((err) => console.log(err));
    return () => {
      mounted = false;
    };
  }, []);

  return <div></div>;
};

export default Logout;
