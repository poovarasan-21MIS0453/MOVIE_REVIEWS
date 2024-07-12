/* eslint-disable no-fallthrough */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import MovieList from './components/Homepage';
import MovieDetails from './components/MovieDetails';
import Signin from './components/Signin';
import NavigationBar from './components/Header';

import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSignIn = () => {
    setIsLoggedIn(true);
    navigate(location.pathname); // Redirect to current location after signing in
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('https://backend-amber-one-24.vercel.app/data');
      setMovies(response.data);
      setFilteredMovies(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterMovies = (criteria) => {
    let sortedMovies = [...movies]; // Create a copy of movies array to work with

    switch (criteria) {
      case 'latest':
        sortedMovies.sort((a, b) => b.Year - a.Year);
        break;
      case 'oldest':
        sortedMovies.sort((a, b) => a.Year - b.Year);
        break;
      case 'high-rated':
        sortedMovies.sort((a, b) => b.Ratings - a.Ratings);
        break;
      case 'low-rated':
        sortedMovies.sort((a, b) => a.Ratings - b.Ratings);
        break;
      case 'tv shows':
        sortedMovies = sortedMovies.filter(movie => movie.Name.includes('TV Series'));
        break;
      case '5-stars':
        sortedMovies = sortedMovies.filter(movie => movie.Ratings >= 5);
        break;
      case '4-stars':
        sortedMovies = sortedMovies.filter(movie => movie.Ratings >= 4 && movie.Ratings < 5);
        break;
      case 'all':
      default:
        sortedMovies = movies; // Reset to show all movies
        break;
    }

    setFilteredMovies(sortedMovies.slice(0, 10)); // Update filteredMovies state with top 10 sorted movies
  };

  useEffect(() => {
    if (location.hash) {
      const criteria = location.hash.substring(1); // Remove the '#' character
      filterMovies(criteria);
    } else {
      filterMovies('all'); // Reset to show all movies when no hash is present
    }
  }, [location]);

  return (
    <div className="App">
      <NavigationBar 
        isLoggedIn={isLoggedIn} 
        handleSignIn={() => navigate('/signin')} // Directly navigate to signin route
        handleSignOut={handleSignOut} 
        filterMovies={filterMovies} // Pass filterMovies to NavigationBar
      />
      <Routes>
        <Route path="/" element={<MovieList movies={filteredMovies} />} />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route path="signin" element={<Signin setLoggedIn={setIsLoggedIn} />} />
       
        {/* Add other routes as needed */}
      </Routes>
    </div>
  );
};

export default App;
