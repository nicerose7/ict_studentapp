import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ 
      padding: "10px", 
      background: "#1976d2", // Blue color
      display: "flex", 
      alignItems: "center" 
    }}>
      <span style={{ 
        color: "#fff", 
        fontWeight: "bold", 
        fontSize: "20px", 
        marginRight: "30px" 
      }}>
        Student App
      </span>
      <Link to="/add" style={{ marginRight: "30px", color: "#fff", textDecoration: "none" }}>Add Student</Link>
      <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>View Students</Link>
    </nav>
  );
};

export default NavBar;