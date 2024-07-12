/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import {  useNavigate } from 'react-router-dom';
import './Header.css'; // Import your CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faList,faTv,faFilter,faPowerOff } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.jpg';

const NavigationBar = ({ isLoggedIn, handleSignIn, handleSignOut, filterMovies }) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    filterMovies('all');
    navigate('/');
    window.location.reload(); // Refresh the page
  };

  return (
    <>
      <nav className="navbar">
        <div className="left">
          <h1>
            <a href="/" onClick={handleHomeClick}>
              <img src={logo} alt="Logo" className="logo" /> Movie Review
            </a>
          </h1>
        </div>
        <div className="right">
          <ul className="nav-items">
            <li>
              <a href="/" onClick={handleHomeClick}>
                Home <FontAwesomeIcon icon={faHouse}/>
              </a>
            </li>
            <li className="dropdown">
              <button className="dropbtn">Category<FontAwesomeIcon icon={faList} /></button>
              <div className="dropdown-content">
                <a href="#latest" onClick={() => filterMovies('latest')}>Recent</a>
                <a href="#oldest" onClick={() => filterMovies('oldest')}>Old Movies</a>
                <a href="#high-rated" onClick={() => filterMovies('high-rated')}>High Rated</a>
                <a href="#low-rated" onClick={() => filterMovies('low-rated')}>Low Rated</a>
              </div>
            </li>
            <li>
              <a href="#tv-shows" onClick={() => filterMovies('tv shows')}>TV Shows<FontAwesomeIcon icon={faTv}/></a>
            </li>
            <li className="dropdown">
              <button className="dropbtn">Fliter<FontAwesomeIcon icon={faFilter}/></button>
              <div className="dropdown-content">
              <a href="#5-stars" onClick={() => filterMovies('5-stars')}>5 Stars</a>
              <a href="#4-stars" onClick={() => filterMovies('4-stars')}>4 Stars</a>
              </div>
            </li>
            <li>
              {isLoggedIn ? (
                <>
                  
                  <button onClick={handleSignOut}>Sign Out<FontAwesomeIcon icon={faPowerOff} /></button>
                </>
              ) : (
                <button onClick={handleSignIn}>Sign In</button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
