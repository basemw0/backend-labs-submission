import React from "react";

export default function MovieList({ movies, onRemove }) {
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <li key={movie.id} className="movie-item">
          <div className="movie-header">
            <span className="movie-title">{movie.title}</span>
            <button className="remove-btn" onClick={() => onRemove(movie.id)}>
              ✖
            </button>
          </div>
          <div className="movie-rating">
            {Array(movie.rating).fill("⭐").join("")}
          </div>
          <div className="movie-review">{movie.review}</div>
        </li>
      ))}
    </ul>
  );
}
