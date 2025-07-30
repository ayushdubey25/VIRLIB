import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styling/Login.css";
import logo from "../assets/Images/virlib_logo.png";

const ForgotPasswordLogin = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1 = send OTP, 2 = verify OTP
  const [loading, setLoading] = useState(false); // 🔄 loading state
  const navigate = useNavigate();

  const sendOtp = async () => {
    setLoading(true); // Start loading
    const res = await fetch("https://virlib-1.onrender.com/api/auth/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    setLoading(false); // Stop loading
    if (res.ok) {
      alert("✅ OTP sent to email!");
      setStep(2);
    } else {
      alert(data.msg || "❌ Failed to send OTP");
    }
  };

  const verifyOtp = async () => {
    const res = await fetch("https://virlib-1.onrender.com/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser && setUser(data.user);
      if (data.user.role === "author") {
        navigate(`/author/${data.user.id}`);
      } else {
        navigate("/shelves");
      }
    } else {
      alert(data.msg || "❌ Invalid OTP");
    }
  };

  return (
    <div className="wrapper">
      <img src={logo} alt="Virlib Logo" />
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>OTP Login</h1>

        <div className="input-box">
          <input
            type="email"
            placeholder="Enter registered email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading} // prevent editing while loading
          />
          <i className="bx bxs-envelope"></i>
        </div>

        {step === 2 && (
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter OTP"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <i className="bx bxs-key"></i>
          </div>
        )}

        {/* 🔄 Show loading or button */}
        {loading ? (
          <p style={{ marginTop: "10px", color: "#555" }}>Sending OTP...</p>
        ) : (
          <button
            type="button"
            className="btn"
            onClick={step === 1 ? sendOtp : verifyOtp}
          >
            {step === 1 ? "Send OTP" : "Verify OTP & Login"}
          </button>
        )}

        <div className="register-link">
          <p>
            Go back to{" "}
            <a onClick={() => navigate("/authorlogin")}>Password Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordLogin;
