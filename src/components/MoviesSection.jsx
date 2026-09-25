import { Link } from "react-router-dom";
import "./MoviesSection.css";

const movies = [
  {
    id: 1,
    title: "Interstellar",
    persianTitle: "میان‌ستاره‌ای",
    year: "2014",
    genre: "Sci-Fi · Drama",
    rating: "8.7",
    description:
      "سفری فراتر از زمان و فضا؛ روایتی درباره عشق، بقا و تلاش انسان برای پیدا کردن خانه‌ای تازه در میان ستارگان.",
    poster:
      "https://image.tmdb.org/t/p/w780/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Inception",
    persianTitle: "تلقین",
    year: "2010",
    genre: "Sci-Fi · Thriller",
    rating: "8.8",
    poster:
      "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    persianTitle: "شوالیه تاریکی",
    year: "2008",
    genre: "Action · Crime",
    rating: "9.0",
    poster:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 4,
    title: "Blade Runner 2049",
    persianTitle: "بلید رانر ۲۰۴۹",
    year: "2017",
    genre: "Sci-Fi · Drama",
    rating: "8.1",
    poster:
      "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
  },
  {
    id: 5,
    title: "Dune",
    persianTitle: "تلماسه",
    year: "2021",
    genre: "Sci-Fi · Adventure",
    rating: "8.0",
    poster:
      "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  },
];

function MoviesSection() {
  const featuredMovie = movies.find((movie) => movie.featured);
  const otherMovies = movies.filter((movie) => !movie.featured);

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
            src={featuredMovie.poster}
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