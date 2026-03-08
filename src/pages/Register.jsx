import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../utils/auth";
import "../styles/auth.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const success = registerUser(name, email, password);

    if (success) {
      alert("Registration successful! Please login.");
      navigate("/login"); // redirect to Login
    } else {
      alert("User with this email already exists!");
    }
  };

  return (
    <div className="auth_container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>

      <p style={{ marginTop: "15px", fontSize: "14px", textAlign: "center" }}>
        Already have an account?{" "}
        <Link to="/login" style={{ color: "#003580", fontWeight: "600" }}>
          Sign In
        </Link>
      </p>
    </div>
  );
}

export default Register;