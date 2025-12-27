import React, { useState } from "react";

export default function MovieForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim()) {
      onAdd({ title, review, rating });
      setTitle("");
      setReview("");
      setRating(0);
    }
  }

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <input
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Movie title"
        maxLength={40}
      />
      <textarea
        className="textarea"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Comment or review..."
        maxLength={120}
      />
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              cursor: "pointer",
              filter: star <= rating ? "drop-shadow(0 0 6px #FFD700)" : "none",
              fontSize: "2rem",
            }}
            onClick={() => setRating(star)}
            role="img"
            aria-label={`${star} star`}
          >
            ⭐
          </span>
        ))}
      </div>
      <button className="add-btn" type="submit">
        Add Movie
      </button>
    </form>
  );
}
