import { useState } from "react";

function MovieCard({ movie }) {
  const [isWatchlisted, setIsWatchlisted] = useState(false);

  const handleWatchlist = (event) => {
    event.stopPropagation();
    setIsWatchlisted((current) => !current);
  };

  return (
    <article className="movie-card">
      <div className="movie-poster-wrapper">
        <img
          className="movie-poster"
          src={movie.poster}
          alt={movie.title}
          loading="lazy"
        />

        <div className="movie-card-shade" />

        <div className="movie-card-top">
          <span className="movie-type">
            {movie.type}
          </span>

          <button
            className={`watchlist-button ${
              isWatchlisted ? "active" : ""
            }`}
            type="button"
            onClick={handleWatchlist}
            aria-label={
              isWatchlisted
                ? "حذف از لیست تماشا"
                : "افزودن به لیست تماشا"
            }
          >
            {isWatchlisted ? "✓" : "+"}
          </button>
        </div>

        <div className="movie-card-center">
          <button
            className="play-button"
            type="button"
            aria-label={`پخش ${movie.title}`}
          >
            <span>▶</span>
          </button>
        </div>

        <div className="movie-card-bottom">
          <div className="movie-rating">
            <span className="rating-star">★</span>
            <strong>{movie.rating}</strong>
          </div>

          <span className="movie-genre">
            {movie.genre}
          </span>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <div className="movie-meta">
          <span>{movie.year}</span>
          <span>•</span>
          <span>{movie.genre}</span>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;