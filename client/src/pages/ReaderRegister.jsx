import React, { useState } from "react";
import "../Styling/Register.css";
import { useNavigate } from "react-router-dom";

const ReaderRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { password } = formData;

    // Validate password: at least 6 characters and 1 special character
    const isValidPassword =
      password.length >= 6 && /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!isValidPassword) {
      alert(
        "❌ Password must be at least 6 characters long and include at least one special character."
      );
      return;
    }

    // Proceed with registration
    const res = await fetch("https://virlib-1.onrender.com/api/auth/register/reader", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      alert("✅ Registered successfully!");
      navigate("/readerlogin");
    } else {
      alert(data.msg || "❌ Registration failed");
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up for Reader Role</h1>

        <div className="input-box">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn">
          Register
        </button>

        <div className="register-link">
          <p>
            Already on VirLib?{" "}
            <a onClick={() => navigate("/readerlogin")}>Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ReaderRegister;
