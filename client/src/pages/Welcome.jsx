import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styling/welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/Enter");
  };

  return (
    <div className="welcome">
      <h1> Welcome to Our Virtual Library!</h1>
      <h3> Get ready for diving into the depths of our Book World!! </h3>
      <h3>Your ticket to VirLib</h3>
      <button type="submit" className="btn" onClick={handleEnter}>
        Let's Go
      </button>
    </div>
  );
};

export default Welcome;
