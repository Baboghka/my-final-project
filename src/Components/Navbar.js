import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [activeLink, setActiveLink] = useState('');

  const navLinkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginRight: '10px',
  };

  const activeNavLinkStyle = {
    color: 'red',
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link h5 ${activeLink === '/' ? 'active' : ''}`}
                to="/"
                style={activeLink === '/' ? activeNavLinkStyle : navLinkStyle}
                onClick={() => handleLinkClick('/')}
              >
                Non-Toxic Dental Floss
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link h5 ${activeLink === '/about' ? 'active' : ''}`}
                to="/about"
                style={activeLink === '/about' ? activeNavLinkStyle : navLinkStyle}
                onClick={() => handleLinkClick('/about')}
              >
                No Harmful Chemicals or Substances
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link h5 ${activeLink === '/add' ? 'active' : ''}`}
                to="/add"
                style={activeLink === '/add' ? activeNavLinkStyle : navLinkStyle}
                onClick={() => handleLinkClick('/add')}
              >
                About Items
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link h5 ${activeLink === '/list' ? 'active' : ''}`}
                to="/list"
                style={activeLink === '/list' ? activeNavLinkStyle : navLinkStyle}
                onClick={() => handleLinkClick('/list')}
              >
                List of Items
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link h5 ${activeLink === '/' ? 'active' : ''}`}
                to="/"
                style={activeLink === '/' ? activeNavLinkStyle : navLinkStyle}
                onClick={() => handleLinkClick('/')}
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;