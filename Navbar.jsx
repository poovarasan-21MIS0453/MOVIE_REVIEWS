import logo from './assets/images/2iiTSH1xv1w8SPybgV4UUKKKG63.svg'; // Import the logo image
import React from 'react';
import './Navbar.css';

function Navbar() {
  const handleSearch = () => {
    alert('Search button clicked!'); // Example action, replace with actual search functionality
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#movies">Movies</a></li>
          <li><a href="#tv-shows">TV Shows</a></li>
          <li><a href="#category">Category</a></li>
        </ul>
      </div>
      <div className="search-login">
        <div className="search-container">
          <input type="text" className="search-bar" placeholder="Search..." />
          <button className="search-button" onClick={handleSearch}>
            <i className="fas fa-search"></i> {/* Font Awesome search icon */}
          </button>
        </div>
        <a href="#filter" className="filter-link">
          <i className="fas fa-filter"></i> {/* Font Awesome filter icon */}
          Filter
        </a>
      </div>
      <a href="#login" className="login-button">Login</a>
    </nav>
  );
}

export default Navbar;
