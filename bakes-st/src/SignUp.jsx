import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

function Signup() {
  const [user, setUser] = useState({
    username: '',
    password: '',
    role: 'USER'
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      const data = await res.text();

      if (res.ok) {
        navigate("/login");
      } else {
        console.log(data);      }

    } catch (err) {
      console.log(err);
    }
  };

  return (
  <>
    <div className="auth-container">
      <h2 className="auth-title">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="auth-input"
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          required
        />
        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />
        <button className="auth-btn" type="submit">Sign Up</button>
      </form>
      <Link className="auth-link" to="/login">Already have an account? Login</Link>
    </div>


</>
  );
}

export default Signup;
