import React, { useState } from "react";
import "../Styling/Login.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Images/virlib_logo.png";

const ReaderLogin = ({ setUser }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5050/api/auth/login/reader", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser && setUser(data.user);
      navigate("/shelves");
    } else {
      alert(data.msg || "Login failed");
    }
  };

  return (
    <div className="wrapper">
      <img src={logo} alt="" />
      <form onSubmit={handleLogin}>
        <h1>Reader Login</h1>

        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <i className="bx bxs-user"></i>
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className="bx bxs-lock-alt"></i>
        </div>

        <button type="submit" className="btn">
          Login
        </button>

        <div className="register-link">
          <p>
            Don't have an account?{" "}
            <a onClick={() => navigate("/readerregister")}>Register</a>
          </p>
          <p>
            Forgot password?{" "}
            <a onClick={() => navigate("/forgot-password")}>Login with OTP</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ReaderLogin;
