import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // ✅ Link added
import { loginUser } from "../utils/auth";
import "../styles/auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const success = loginUser(email, password); // your auth util

    if (success) {
      alert("Login successful!");
      navigate("/"); // redirect to home
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="auth_container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>

      <p style={{ marginTop: "15px", fontSize: "14px", textAlign: "center" }}>
        Don't have an account?{" "}
        <Link to="/register" style={{ color: "#003580", fontWeight: "600" }}>
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default Login;