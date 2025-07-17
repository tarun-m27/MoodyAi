import React, { useState } from "react";
import "./signin.css";
import { loginUser, registerUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res;

      if (isSignup) {
        res = await registerUser(form);
      } else {
        res = await loginUser(form);
      }

      // Store token + basic user info
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify({
        id: res.data.id,
        name: res.data.name,
        email: res.data.email
      }));

      alert(isSignup ? "Signed up successfully!" : "Signed in successfully!");
      navigate("/home");
    } catch (err) {
alert("Authentication failed: " + (err?.response?.data?.message || err.message || "Unknown error"));
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2>{isSignup ? "Create Account" : "Welcome Back"}</h2>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">{isSignup ? "Sign Up" : "Sign In"}</button>
        </form>
        <p className="toggle-text">
          {isSignup
            ? "Already have an account?"
            : "Don't have an account?"}{" "}
          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signin;
