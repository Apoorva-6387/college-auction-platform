import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">IIITBH Auction Portal</div>
      <ul className="nav-links">
        <li><Link to="/dashboard">Home</Link></li>
        <li><Link to="/auctions">Auctions</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
