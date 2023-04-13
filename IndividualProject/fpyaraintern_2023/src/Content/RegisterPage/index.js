import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import "./registerstyle.css";
import axios from "axios";
import { ok } from "assert";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !email || !password || !repassword) {
      alert("All fields are required!");
      return;
    }

    if (password !== repassword) {
      alert("Passwords do not match!");
      return;
    } else {
      const response = await axios.post("http://localhost:3001/client/signup", {
        username,
        email,
        password,
      });
      if (response === ok) {
        redirect("/login");
      } else {
        throw new Error("Not valid register information");
      }
    }
    // register user logic goes here
    //when registered put info in DB
  };

  return (
    <div className="container-reg">
      <div className="card">
        <h1>Register Form</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <label>
            Re-enter Password:
            <input
              type="password"
              value={repassword}
              onChange={(event) => setRepassword(event.target.value)}
            />
          </label>
          <button className="reg" type="submit">
            Register
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Log in here</Link>.
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
