import { ChangeEvent, FormEvent, useState } from "react";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<string>("");

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("/login", { username, password })
      .then((_res) => {
        setToken(_res.data.token);
      })
      .catch((err) => console.log(err));
    axios.get("/chat");
  };

  return (
    <div className="border rounded pl-4">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group m-4">
          <label>Username</label>
          <br />
          <input
            type="text"
            onChange={handleUsernameChange}
            required={true}
          ></input>
        </div>
        <div className="row">
          <div className="col form-group m-4">
            <label>Password</label>
            <br />
            <input
              type="password"
              onChange={handlePasswordChange}
              required={true}
            ></input>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-info m-5">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
