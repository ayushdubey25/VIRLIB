import React, { useState } from "react";
import "../Styling/Login.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Images/virlib_logo.png";

const AuthorLogin = ({ setUser }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("https://virlib-1.onrender.com/api/auth/login/author", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser && setUser(data.user);
      navigate(`/author/${data.user.id}`);
    } else {
      alert(data.msg || "Login failed");
    }
  };

  const handleSendOtp = async () => {
    const res = await fetch("https://virlib-1.onrender.com/api/auth/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (res.ok) {
      alert("OTP sent to email");
      setOtpSent(true);
    } else {
      alert(data.msg || "Failed to send OTP");
    }
  };

  const handleVerifyOtp = async () => {
    const res = await fetch("https://virlib-1.onrender.com/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp, newPassword }),
    });
    const data = await res.json();
    if (res.ok) {
      alert("Password updated. Please login.");
      setShowForgotModal(false);
    } else {
      alert(data.msg || "OTP verification failed");
    }
  };

  return (
    <div className="wrapper">
      <img src={logo} alt="" />
      <form onSubmit={handleLogin}>
        <h1>Author Login</h1>
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
            Forgot your password?{" "}
            <a onClick={() => navigate("/forgot-password")}>Login with OTP</a>
          </p>
        </div>

        <div className="register-link-a">
          <p>
            Don't have an account?{" "}
            <a onClick={() => navigate("/authorregister")}>Register</a>
          </p>
        </div>
      </form>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Reset Password</h3>
            {!otpSent ? (
              <>
                <input
                  type="email"
                  placeholder="Enter your registered email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSendOtp}>Send OTP</button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button onClick={handleVerifyOtp}>Verify & Reset</button>
              </>
            )}
            <button onClick={() => setShowForgotModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthorLogin;
