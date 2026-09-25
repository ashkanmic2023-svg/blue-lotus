import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./Movies.css";
import {
  movies,
  getFeaturedMovie,
  searchMovies,
} from "../../data/movies";

function Movies() {
  const featured = getFeaturedMovie();

  const [searchParams, setSearchParams] = useSearchParams();
  const urlQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(urlQuery);

  useEffect(() => {
    setQuery(urlQuery);
  }, [urlQuery]);

  const filteredMovies = useMemo(
    () => searchMovies(query),
    [query]
  );

  return (
    <main className="movies-page">
      {/* Discovery */}
      <section className="movies-page-discovery">
        <div className="movies-page-discovery__top">
          <div className="movies-page-search">
            <span className="movies-page-search__icon">⌕</span>

            <input
              type="text"
              placeholder="جستجوی فیلم..."
              aria-label="جستجوی فیلم"
              value={query}
              onChange={(e) => {
                const value = e.target.value;
                setQuery(value);

                if (value.trim()) {
                  setSearchParams({ q: value }, { replace: true });
                } else {
                  setSearchParams({}, { replace: true });
                }
              }}
            />
          </div>
        </div>

        <div className="movies-page-discovery__tabs">
          <button
            type="button"
            className="movies-page-discovery__tab is-active"
          >
            همه
          </button>

          <button
            type="button"
            className="movies-page-discovery__tab"
          >
            محبوب
          </button>

          <button
            type="button"
            className="movies-page-discovery__tab"
          >
            جدیدترین
          </button>

          <button
            type="button"
            className="movies-page-discovery__tab"
          >
            کلاسیک
          </button>
        </div>

        <div className="movies-page-discovery__filters">
          <button
            type="button"
            className="movies-page-filter"
          >
            <span>ژانر</span>
            <strong>⌄</strong>
          </button>

          <button
            type="button"
            className="movies-page-filter"
          >
            <span>مرتب‌سازی</span>
            <strong>⌄</strong>
          </button>
        </div>
      </section>

      {/* Page Header */}
      <header className="movies-page-header">
        <span className="movies-page-header__eyebrow">
          EXPLORE THE WORLD OF
        </span>

        <h1 className="movies-page-header__title">
          فیلم و سینما
          <span>MOVIES & CINEMA</span>
        </h1>
      </header>

      {/* Featured */}
      {!query.trim() && (
        <section className="movies-page-featured">
          <div className="movies-page-featured__poster-wrap">
            <div className="movies-page-featured__poster-glow" />

            <img
              className="movies-page-featured__poster"
              src={featured.backdrop}
              alt={featured.title}
            />
          </div>

          <div className="movies-page-featured__content">
            <span className="movies-page-featured__label">
              FEATURED FILM
            </span>

            <h2 className="movies-page-featured__title">
              {featured.title}
            </h2>

            <p className="movies-page-featured__original-title">
              {featured.originalTitle} · {featured.year}
            </p>

            <div className="movies-page-featured__meta">
              <span>{featured.year}</span>
              <span>{featured.genre}</span>
              <span>{featured.runtime} دقیقه</span>
            </div>

            <p className="movies-page-featured__description">
              {featured.description}
            </p>

            <div className="movies-page-featured__rating">
              <strong>{featured.rating}</strong>
              <span>★</span>
              <small>امتیاز کاربران</small>
            </div>

            <button
              type="button"
              className="movies-page-featured__button"
            >
              <span>مشاهده جزئیات فیلم</span>
              <strong>←</strong>
            </button>
          </div>
        </section>
      )}

      {/* Movie Grid */}
      <section className="movies-page-grid">
        <div className="movies-page-grid__header">
          <h2 className="movies-page-grid__title">
            {query.trim() ? "نتایج جستجو" : "همه فیلم‌ها"}
          </h2>
          <span className="movies-page-grid__count">
            {filteredMovies.length} فیلم
          </span>
        </div>

        {filteredMovies.length > 0 ? (
          <div className="movies-page-grid__list">
            {filteredMovies.map((movie) => (
              <article key={movie.id} className="movies-page-card">
                <a href="#" className="movies-page-card__link">
                  <div className="movies-page-card__poster-wrap">
                    <img
                      className="movies-page-card__poster"
                      src={movie.poster}
                      alt={movie.title}
                      loading="lazy"
                    />
                    <div className="movies-page-card__overlay" />
                    <span className="movies-page-card__rating">
                      <strong>{movie.rating}</strong>
                      <span>★</span>
                    </span>
                  </div>

                  <div className="movies-page-card__content">
                    <h3 className="movies-page-card__title">
                      {movie.title}
                    </h3>
                    <p className="movies-page-card__original">
                      {movie.originalTitle}
                    </p>
                    <div className="movies-page-card__meta">
                      <span>{movie.year}</span>
                      <span className="movies-page-card__dot">·</span>
                      <span>{movie.genres[0]}</span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="movies-page-grid__empty">
            <span className="movies-page-grid__empty-icon">⌕</span>
            <h3>نتیجه‌ای پیدا نشد</h3>
            <p>
              برای «{query}» فیلمی پیدا نکردیم.
              <br />
              یه عبارت دیگه امتحان کن.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Movies;