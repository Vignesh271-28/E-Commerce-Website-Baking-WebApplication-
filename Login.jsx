import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setShowPopup(false);

    try {
      const res = await fetch(" https://sthomemade-50030566836.development.catalystappsail.in/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      const token = await res.text();

      if (res.ok) {
        localStorage.setItem('token', token);
        setShowPopup(true); // show popup

        setTimeout(() => {
          setShowPopup(false); // hide after 3s
          navigate("/");
        }, 3000);
      } else {
        setErrorMsg("❌ Invalid username or password");
      }

    } catch (err) {
      setErrorMsg("⚠️ Something went wrong. Try again!"+err);
    }
  };

  return (
    <>
      <div className="auth-container">
        <h2 className="auth-title">Login</h2>

        {errorMsg && <div className="error-msg">{errorMsg}</div>}

        <form onSubmit={handleLogin}>
          <input
            className="auth-input"
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            required
          />
          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            required
          />
          <button className="auth-btn" type="submit">Login</button>
        </form>
      </div>

      {showPopup && (
        <div className="popup-success">
          <h4>Login successful!</h4>
          <p> Now you can order any items</p>
        </div>
      )}
    </>
  );
}

export default Login;
