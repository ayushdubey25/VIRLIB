import React, { useState } from "react";
import "../Styling/Register.css";
import { useNavigate } from "react-router-dom";

const AuthorRegister = () => {
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

    // ✅ Password validation
    const { password } = formData;
    const isValidPassword =
      password.length >= 6 && /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!isValidPassword) {
      alert(
        "❌ Password must be at least 6 characters long and include at least one special character."
      );
      return;
    }

    try {
      const res = await fetch(
        "https://virlib-1.onrender.com/auth/register/author",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (res.ok) {
        alert("✅ Registered Successfully!");
        navigate("/authorlogin");
      } else {
        alert(data.message || "❌ Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("❌ Error registering");
    }
  };

  return (
    <div className="register-wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up for Author Role</h1>
        <div className="register-input-box">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="register-input-box">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="register-input-box">
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="register-input-box">
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="register-input-box">
          <input
            type="password"
            name="password"
            placeholder="Password (min 6 chars & special char)"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="register-btn">
          Register
        </button>

        <div className="register-register-link">
          <p>
            Already on VirLib?{" "}
            <a href="#" onClick={() => navigate("/authorlogin")}>
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default AuthorRegister;
