import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./Series.css";
import {
  series,
  getFeaturedSeries,
  searchSeries,
} from "../../data/series";

function Series() {
  const featured = getFeaturedSeries();

  const [searchParams, setSearchParams] = useSearchParams();
  const urlQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(urlQuery);

  useEffect(() => {
    setQuery(urlQuery);
  }, [urlQuery]);

  const filteredSeries = useMemo(
    () => searchSeries(query),
    [query]
  );

  return (
    <main className="series-page">
      {/* Discovery */}
      <section className="series-page-discovery">
        <div className="series-page-discovery__top">
          <div className="series-page-search">
            <span className="series-page-search__icon">⌕</span>

            <input
              type="text"
              placeholder="جستجوی سریال..."
              aria-label="جستجوی سریال"
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

        <div className="series-page-discovery__tabs">
          <button
            type="button"
            className="series-page-discovery__tab is-active"
          >
            همه
          </button>

          <button
            type="button"
            className="series-page-discovery__tab"
          >
            محبوب
          </button>

          <button
            type="button"
            className="series-page-discovery__tab"
          >
            جدیدترین
          </button>

          <button
            type="button"
            className="series-page-discovery__tab"
          >
            کلاسیک
          </button>
        </div>

        <div className="series-page-discovery__filters">
          <button
            type="button"
            className="series-page-filter"
          >
            <span>ژانر</span>
            <strong>⌄</strong>
          </button>

          <button
            type="button"
            className="series-page-filter"
          >
            <span>مرتب‌سازی</span>
            <strong>⌄</strong>
          </button>
        </div>
      </section>

      {/* Page Header */}
      <header className="series-page-header">
        <span className="series-page-header__eyebrow">
          ENTER THE WORLD OF
        </span>

        <h1 className="series-page-header__title">
          سریال و تلویزیون
          <span>SERIES & TV</span>
        </h1>
      </header>

      {/* Featured */}
      {!query.trim() && (
        <section className="series-page-featured">
          <div className="series-page-featured__poster-wrap">
            <div className="series-page-featured__poster-glow" />

            <img
              className="series-page-featured__poster"
              src={featured.backdrop}
              alt={featured.title}
            />
          </div>

          <div className="series-page-featured__content">
            <span className="series-page-featured__label">
              FEATURED SERIES
            </span>

            <h2 className="series-page-featured__title">
              {featured.title}
            </h2>

            <p className="series-page-featured__original-title">
              {featured.originalTitle} · {featured.year}
            </p>

            <div className="series-page-featured__meta">
              <span>{featured.year}</span>
              <span>{featured.genre}</span>
              <span>{featured.runtime} دقیقه</span>
            </div>

            <p className="series-page-featured__description">
              {featured.description}
            </p>

            <div className="series-page-featured__rating">
              <strong>{featured.rating}</strong>
              <span>★</span>
              <small>امتیاز کاربران</small>
            </div>

            <button
              type="button"
              className="series-page-featured__button"
            >
              <span>مشاهده جزئیات سریال</span>
              <strong>←</strong>
            </button>
          </div>
        </section>
      )}

      {/* Series Grid */}
      <section className="series-page-grid">
        <div className="series-page-grid__header">
          <h2 className="series-page-grid__title">
            {query.trim() ? "نتایج جستجو" : "همه سریال‌ها"}
          </h2>
          <span className="series-page-grid__count">
            {filteredSeries.length} سریال
          </span>
        </div>

        {filteredSeries.length > 0 ? (
          <div className="series-page-grid__list">
            {filteredSeries.map((item) => (
              <article key={item.id} className="series-page-card">
                <a href="#" className="series-page-card__link">
                  <div className="series-page-card__poster-wrap">
                    <img
                      className="series-page-card__poster"
                      src={item.poster}
                      alt={item.title}
                      loading="lazy"
                    />
                    <div className="series-page-card__overlay" />
                    <span className="series-page-card__rating">
                      <strong>{item.rating}</strong>
                      <span>★</span>
                    </span>
                  </div>

                  <div className="series-page-card__content">
                    <h3 className="series-page-card__title">
                      {item.title}
                    </h3>
                    <p className="series-page-card__original">
                      {item.originalTitle}
                    </p>
                    <div className="series-page-card__meta">
                      <span>{item.year}</span>
                      <span className="series-page-card__dot">·</span>
                      <span>{item.genres[0]}</span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="series-page-grid__empty">
            <span className="series-page-grid__empty-icon">⌕</span>
            <h3>نتیجه‌ای پیدا نشد</h3>
            <p>
              برای «{query}» سریالی پیدا نکردیم.
              <br />
              یه عبارت دیگه امتحان کن.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}

export default Series;
