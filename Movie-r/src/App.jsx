import React from 'react';
import { useState } from 'react';
import logo from '.\\assets\\images\\download__2_-removebg-preview.png';
import './index.css';

const App = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <span className="navbar-title">MR</span>
      </div>
      <ul className="navbar-menu">
        <li><a href="#top25">Top 25 Movies</a></li>
        <li><a href="#categories">Movie Categories</a></li>
        <li><a href="#mostpopular">Most Popular Movies</a></li>
        <li><a href="#boxoffice">Top Box Office</a></li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
      <div className="navbar-signin">
        <a href="#signin">Sign In</a>
      </div>
    </nav>
  );
}

export default App;
