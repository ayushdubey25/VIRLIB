import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styling/Enter.css";

const Enter = () => {
  const navigate = useNavigate();
  const handleRoleClick = (role) => {
    if (role === "reader") {
      navigate("/readerlogin");
    } else if (role === "admin") {
      navigate("/adminlogin");
    } else if (role === "author") {
      navigate("/authorlogin");
    }
  };

  return (
    <div className="enter-wrapper">
      <div className="enter-form-1">
        <div className="enter-box">
          <h1>Admin</h1>
        </div>
        <p>Guarding the shelves? Step in and manage the magic.</p>
        <button className="btn" onClick={() => handleRoleClick("admin")}>
          Login Now
        </button>
      </div>

      <div className="enter-form-1">
        <div className="enter-box">
          <h1>Reader</h1>
        </div>
        <p>Craving stories? Step inside and let the pages turn themselves.</p>
        <button className="btn" onClick={() => handleRoleClick("reader")}>
          Login Now
        </button>
      </div>

      <div className="enter-form-1">
        <div className="enter-box">
          <h1>Author</h1>
        </div>
        <p>Got a story burning inside? Let VirLib be your stage.</p>
        <button className="btn" onClick={() => handleRoleClick("author")}>
          Login Now
        </button>
      </div>
    </div>
  );
};

export default Enter;
