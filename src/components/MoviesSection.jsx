import { Link } from "react-router-dom";
import {
  movies,
  getFeaturedMovie,
  getOtherMovies,
} from "../data/movies";
import "./MoviesSection.css";

function MoviesSection() {
  const featuredMovie = getFeaturedMovie();
  const otherMovies = getOtherMovies();

  return (
    <section className="movies-section" id="movies">

      {/* =========================
          HEADER
      ========================== */}

      <div className="movies-section__header">

        <div className="movies-section__heading">

          <span className="movies-section__eyebrow">
            EXPLORE THE WORLD OF
          </span>

          <h2>
            فیلم و سینما
            <span>MOVIES & CINEMA</span>
          </h2>

        </div>

        <Link
          to="/movies"
          className="movies-section__all-link"
        >
          ورود به دنیای فیلم و سینما
          <span>←</span>
        </Link>

      </div>


      {/* =========================
          FEATURED MOVIE
      ========================== */}

      <div className="movies-featured">

        <div className="movies-featured__vertical-text">
          CINEMA
        </div>

        <div className="movies-featured__background" />

        <div className="movies-featured__poster-wrap">

          <div className="movies-featured__poster-glow" />

          <img
            src={featuredMovie.backdrop}
            alt={featuredMovie.title}
            className="movies-featured__poster"
          />

        </div>


        <div className="movies-featured__content">

          <span className="movies-featured__label">
            FEATURED FILM
          </span>

          <h3>
            {featuredMovie.title}
          </h3>

          <p className="movies-featured__persian-title">
            {featuredMovie.persianTitle}
          </p>


          <div className="movies-featured__meta">

            <span>
              {featuredMovie.year}
            </span>

            <span>•</span>

            <span>
              {featuredMovie.genre}
            </span>

            <span>•</span>

            <span className="movies-featured__rating">
              ★ {featuredMovie.rating}
            </span>

          </div>


          <p className="movies-featured__description">
            {featuredMovie.description}
          </p>


          <div className="movies-featured__actions">

            {/* فعلاً تا قبل از ساخت Detail Page */}
            <Link
              to="/movies"
              className="movies-featured__primary"
            >
              مشاهده فیلم
              <span>←</span>
            </Link>

            {/* فعلاً تا قبل از ساخت Detail Page */}
            <Link
              to="/movies"
              className="movies-featured__secondary"
            >
              جزئیات بیشتر
            </Link>

          </div>

        </div>

      </div>


      {/* =========================
          MORE MOVIES
      ========================== */}

      <div className="movies-row">

        <div className="movies-row__top">

          <div>

            <span className="movies-row__label">
              MORE TO EXPLORE
            </span>

            <h3>
              آثاری که ارزش دیدن دارند
            </h3>

          </div>


          <Link
            to="/movies"
            className="movies-row__link"
          >
            مشاهده همه
            <span>←</span>
          </Link>

        </div>


        <div className="movies-row__scroll">

          {otherMovies.map((movie) => (

            <Link
              to="/movies"
              className="movie-preview-card"
              key={movie.id}
            >

              <div className="movie-preview-card__poster">

                <img
                  src={movie.poster}
                  alt={movie.title}
                />

                <div className="movie-preview-card__overlay">
                  <span>مشاهده</span>
                </div>

                <div className="movie-preview-card__rating">
                  ★ {movie.rating}
                </div>

              </div>


              <div className="movie-preview-card__info">

                <span>
                  {movie.year}
                </span>

                <h4>
                  {movie.title}
                </h4>

                <p>
                  {movie.persianTitle}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>


      {/* =========================
          BOTTOM CTA
      ========================== */}

      <div className="movies-section__bottom">

        <Link
          to="/movies"
          className="movies-world-button"
        >
          <span>
            دنیای فیلم و سینما
          </span>

          <strong>
            ←
          </strong>

        </Link>

      </div>

    </section>
  );
}

export default MoviesSection;