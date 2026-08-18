import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "12345678") {
      localStorage.setItem("isLogin", "true");
      navigate("/profile");
    } else {
      setError("Username หรือ Password ไม่ถูกต้อง");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">

        <h1>BEN 10</h1>

        <p className="subtitle">
          CHARACTER DATABASE
        </p>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            LOGIN
          </button>

        </form>

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        <div className="hint">
          <p>Username: admin</p>
          <p>Password: 12345678</p>
        </div>

      </div>
    </div>
  );
}

export default Login;