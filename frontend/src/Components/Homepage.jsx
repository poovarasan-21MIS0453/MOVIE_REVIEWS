import React, { useState, useEffect } from 'react';
import './Homepage.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch} from '@fortawesome/free-solid-svg-icons';

const MovieList = ({ movies }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [noMoviesFound, setNoMoviesFound] = useState(false);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterMoviesBySearch(query);
  };

  const handleSearchButtonClick = () => {
    filterMoviesBySearch(searchQuery);
  };

  const filterMoviesBySearch = (query) => {
    if (!query) {
      setFilteredMovies(movies);
      setNoMoviesFound(false);
      return;
    }

    const filtered = movies.filter((movie) =>
      movie.Name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredMovies(filtered.slice(0, 10)); // Update filteredMovies state with top 10 search results
    setNoMoviesFound(filtered.length === 0);
  };

  return (
    <div className="movie-list">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by movie title..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchButtonClick}><FontAwesomeIcon icon={faSearch}/>Search</button>
      </div>
      {noMoviesFound ? (
        <p className="no-movies-found">No movies found</p>
      ) : (
        <div className="movie-cards">
          {filteredMovies.map((movie) => (
            <div key={movie._id} className="movie-card">
              <img src={movie.URL} alt={`${movie.Name} poster`} className="movie-poster" />
              <div className="movie-details">
                <h2>{movie.Name}</h2>
                <p>Release Year: {movie.Year}</p>
                <p>Ratings: {movie.Ratings} <span>★</span></p>
                <Link to={`/movie/${movie._id}`} className="view-details-button">
                  <button>View Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
