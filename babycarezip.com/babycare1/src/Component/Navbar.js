import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.scss';

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Baby", path: "/baby" },
    { name: "Mother", path: "/mother" },
    { name: "Diet", path: "/diet" },
    { name: "Feedback", path: "/feedback" }
  ];

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        
        <img src="/images/Logo2.jpg.jpg" alt="Logo" />

        <span>BABY Care</span>
      </Link>

      <div className={`nav-links ${showSidebar ? 'open' : ''}`}>
        {links.map(link => (
          <Link 
            to={link.path} 
            key={link.name} 
            onClick={() => setShowSidebar(false)}
            className={location.pathname === link.path ? 'active' : ''} 
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div 
        onClick={handleSidebarToggle} 
        className={`sidebar-btn ${showSidebar ? 'active' : ''}`}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}
