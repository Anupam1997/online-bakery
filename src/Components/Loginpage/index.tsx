import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const authFunc = async () => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/login", {
        username: username,
        password: password,
      });
      if (data.message) {
        localStorage.setItem("username", username);
        navigate("/");
      }
    } catch (error) {}
  };
  return (
    <div id="login">
      <div className="login-form">
        <TextField
          className="my-4"
          label="username"
          variant="standard"
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          className="my-4"
          label="password"
          type="password"
          variant="standard"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="sign-in my-4" onClick={authFunc}>
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
