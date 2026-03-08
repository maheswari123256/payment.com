import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logo from "/assets/logo.png";
import { 
  FaHome, 
  FaHotel, 
  FaEnvelope, 
  FaSignInAlt, 
  FaUserPlus, 
  FaUserShield, 
  FaInfoCircle,
  FaUser   // user icon
} from "react-icons/fa";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [userMenu, setUserMenu] = useState(false); // user dropdown toggle

  return (
    <nav className="nav_container">
      {/* Logo */}
      <div className="nav_logo">
        <img src={logo} alt="logo" />
        <span>BookingClone</span>
      </div>

      {/* Links */}
      <div className={`nav_links ${menu ? "active" : ""}`}>
        <Link to="/"><FaHome className="nav_icon" /> Home</Link>
        <Link to="/about"><FaInfoCircle className="nav_icon" /> About</Link>
        <Link to="/contact"><FaEnvelope className="nav_icon" /> Contact</Link>

        {/* User Dropdown */}
        <div className="user_dropdown" onClick={() => setUserMenu(!userMenu)}>
          <FaUser className="nav_icon" /> Account ▼
          {userMenu && (
            <div className="dropdown_menu">
              <Link to="/login"><FaSignInAlt />Sign In</Link>
              <Link to="/register"><FaUserPlus /> Sign Up</Link>
              <Link to="/admin"><FaUserShield /> Admin</Link>
            </div>
          )}
        </div>
      </div>

      {/* Hamburger menu */}
      <div className="hamburger" onClick={() => setMenu(!menu)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;