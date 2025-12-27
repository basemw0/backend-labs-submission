import React, { useState } from "react";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import "./MovieWatchList.css";

export default function App() {
  const [movies, setMovies] = useState([]);

  function addMovie(movie) {
    setMovies([...movies, { ...movie, id: Date.now() }]);
  }

  function removeMovie(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  return (
    <div className="container">
      <h1 className="title">🎬 My Watchlist</h1>
      <MovieForm onAdd={addMovie} />
      <MovieList movies={movies} onRemove={removeMovie} />
    </div>
  );
}
