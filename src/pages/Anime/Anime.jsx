import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./Anime.css";
import {
  anime,
  getFeaturedAnime,
  searchAnime,
} from "../../data/anime";

function Anime() {
  const featured = getFeaturedAnime();

  const [searchParams, setSearchParams] = useSearchParams();
  const urlQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(urlQuery);

  useEffect(() => {
    setQuery(urlQuery);
  }, [urlQuery]);

  const filteredAnime = useMemo(
    () => searchAnime(query),
    [query]
  );

  return (
    <main className="anime-page">
      {/* Discovery */}
      <section className="anime-page-discovery">
        <div className="anime-page-discovery__top">
          <div className="anime-page-search">
            <span className="anime-page-search__icon">⌕</span>

            <input
              type="text"
              placeholder="جستجوی انیمه..."
              aria-label="جستجوی انیمه"
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

        <div className="anime-page-discovery__tabs">
          <button
            type="button"
            className="anime-page-discovery__tab is-active"
          >
            همه
          </button>

          <button
            type="button"
            className="anime-page-discovery__tab"
          >
            محبوب
          </button>

          <button
            type="button"
            className="anime-page-discovery__tab"
          >
            جدیدترین
          </button>

          <button
            type="button"
            className="anime-page-discovery__tab"
          >
            کلاسیک
          </button>
        </div>

        <div className="anime-page-discovery__filters">
          <button
            type="button"
            className="anime-page-filter"
          >
            <span>ژانر</span>
            <strong>⌄</strong>
          </button>

          <button
            type="button"
            className="anime-page-filter"
          >
            <span>مرتب‌سازی</span>
            <strong>⌄</strong>
          </button>
        </div>
      </section>

      {/* Page Header */}
      <header className="anime-page-header">
        <span className="anime-page-header__eyebrow">
          ENTER ANOTHER WORLD
        </span>

        <h1 className="anime-page-header__title">
          دنیای انیمه
          <span>ANIME WORLD</span>
        </h1>
      </header>

      {/* Featured */}
      {!query.trim() && (
        <section className="anime-page-featured">
          <div className="anime-page-featured__poster-wrap">
            <div className="anime-page-featured__poster-glow" />

            <img
              className="anime-page-featured__poster"
              src={featured.backdrop}
              alt={featured.title}
            />
          </div>

          <div className="anime-page-featured__content">
            <span className="anime-page-featured__label">
              FEATURED ANIME
            </span>

            <h2 className="anime-page-featured__title">
              {featured.title}
            </h2>

            <p className="anime-page-featured__original-title">
              {featured.persianTitle} · {featured.year}
            </p>

            <div className="anime-page-featured__meta">
              <span>{featured.year}</span>
              <span>{featured.genre}</span>
              <span>{featured.runtime} دقیقه</span>
            </div>

            <p className="anime-page-featured__description">
              {featured.description}
            </p>

            <div className="anime-page-featured__rating">
              <strong>{featured.rating}</strong>
              <span>★</span>
              <small>امتیاز کاربران</small>
            </div>

            <button
              type="button"
              className="anime-page-featured__button"
            >
              <span>مشاهده جزئیات انیمه</span>
              <strong>←</strong>
            </button>
          </div>
        </section>
      )}

      {/* Anime Grid */}
      <section className="anime-page-grid">
        <div className="anime-page-grid__header">
          <h2 className="anime-page-grid__title">
            {query.trim() ? "نتایج جستجو" : "همه انیمه‌ها"}
          </h2>
          <span className="anime-page-grid__count">
            {filteredAnime.length} انیمه
          </span>
        </div>

        {filteredAnime.length > 0 ? (
          <div className="anime-page-grid__list">
            {filteredAnime.map((item) => (
              <article key={item.id} className="anime-page-card">
                <a href="#" className="anime-page-card__link">
                  <div className="anime-page-card__poster-wrap">
                    <img
                      className="anime-page-card__poster"
                      src={item.poster}
                      alt={item.title}
                      loading="lazy"
                    />
                    <div className="anime-page-card__overlay" />
                    <span className="anime-page-card__rating">
                      <strong>{item.rating}</strong>
                      <span>★</span>
                    </span>
                  </div>

                  <div className="anime-page-card__content">
                    <h3 className="anime-page-card__title">
                      {item.title}
                    </h3>
                    <p className="anime-page-card__original">
                      {item.persianTitle}
                    </p>
                    <div className="anime-page-card__meta">
                      <span>{item.year}</span>
                      <span className="anime-page-card__dot">·</span>
                      <span>{item.genres[0]}</span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="anime-page-grid__empty">
            <span className="anime-page-grid__empty-icon">⌕</span>
            <h3>نتیجه‌ای پیدا نشد</h3>
            <p>
              برای «{query}» انیمه‌ای پیدا نکردیم.
              <br />
              یه عبارت دیگه امتحان کن.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Anime;