import React from "react";
import "../Styling/Login.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Images/virlib_logo.png";

const AdminLogin = () => {
  return (
    <div className="wrapper">
      <img src={logo} alt="" />
      <form action="">
        <h1>Admin Login</h1>

        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <i className="bx bxs-user"></i>
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <i className="bx bxs-lock-alt"></i>
        </div>

        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
