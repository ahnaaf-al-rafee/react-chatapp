import axios from "axios";
import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // username/ password => chat-engine -> give messages
    // works out -> logged in!
    // error -> try with new credentials

    const authObject = {
      "Project-ID": "4608c92f-214f-4e16-8abc-29f5f475999d",
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      setError("oops! Incorrect credentials...");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Join the Chat Room </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="input"
            placeholder="Passcode"
            required
          />
          <div align="center">
            <button className="button" type="submit">
              <span>Start Chatting</span>
            </button>
          </div>
        </form>
        <h2 className="error">{error}</h2>
      </div>
    </div>
  );
};

export default LoginForm;
