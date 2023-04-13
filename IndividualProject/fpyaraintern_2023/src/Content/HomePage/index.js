import React from "react";
import { Link } from "react-router-dom";
import "./homestyle.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome!</h1>
      <div className="buttons">
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
        <span className="button-space"></span>
        <Link to="/register">
          <button className="register-button">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
