import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import "./loginstyle.css";
import axios from "axios";
import bcrypt from "bcryptjs";
import { ok } from "assert";

const LoginPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      alert("Username and password are required!");
      return;
    }

    const response = await axios.post("http://localhost:3001/client/signin", {
      username,
      password,
    });
    if (response === ok) {
      redirect("/client");
    } else {
      throw new Error("Username or password is incorrect");
    }
    // login user logic goes here
    // check if a user exists already in DB-> WH else throw error
    // redirect to home page on successful login
    // history.push('/'); (use this if you are using react-router-dom)
    // window.location.href = '/'; (use this to redirect manually)
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button className="log" type="submit">
          Log In
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Sign up here</Link>.
      </p>
    </div>
  );
};

export default LoginPage;
