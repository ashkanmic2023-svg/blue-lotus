import "./Movies.css";

function Movies() {
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
      <section className="movies-page-featured">
        <div className="movies-page-featured__poster-wrap">
          <div className="movies-page-featured__poster-glow" />

          <img
            className="movies-page-featured__poster"
            src="https://image.tmdb.org/t/p/w780/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
            alt="Interstellar"
          />
        </div>

        <div className="movies-page-featured__content">
          <span className="movies-page-featured__label">
            FEATURED FILM
          </span>

          <h2 className="movies-page-featured__title">
            Interstellar
          </h2>

          <p className="movies-page-featured__original-title">
            میان‌ستاره‌ای · 2014
          </p>

          <div className="movies-page-featured__meta">
            <span>2014</span>
            <span>Sci-Fi · Drama</span>
            <span>169 دقیقه</span>
          </div>

          <p className="movies-page-featured__description">
            در آینده‌ای که زمین با بحران جدی روبه‌رو شده،
            گروهی از فضانوردان سفری فراتر از مرزهای شناخته‌شده
            فضا را آغاز می‌کنند تا شاید خانه‌ای تازه برای
            بشریت پیدا کنند.
          </p>

          <div className="movies-page-featured__rating">
            <strong>8.7</strong>
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

      {/* Movie Grid */}
      <section className="movies-page-grid">
        <div className="movies-page-grid__header">
          <h2 className="movies-page-grid__title">همه فیلم‌ها</h2>
          <span className="movies-page-grid__count">۵ فیلم</span>
        </div>

        <div className="movies-page-grid__list">
          {/* Interstellar */}
          <article className="movies-page-card">
            <a href="#" className="movies-page-card__link">
              <div className="movies-page-card__poster-wrap">
                <img
                  className="movies-page-card__poster"
                  src="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
                  alt="Interstellar"
                  loading="lazy"
                />
                <div className="movies-page-card__overlay" />
                <span className="movies-page-card__rating">
                  <strong>8.7</strong>
                  <span>★</span>
                </span>
              </div>

              <div className="movies-page-card__content">
                <h3 className="movies-page-card__title">Interstellar</h3>
                <p className="movies-page-card__original">میان‌ستاره‌ای</p>
                <div className="movies-page-card__meta">
                  <span>2014</span>
                  <span className="movies-page-card__dot">·</span>
                  <span>Sci-Fi</span>
                </div>
              </div>
            </a>
          </article>

          {/* Inception */}
          <article className="movies-page-card">
            <a href="#" className="movies-page-card__link">
              <div className="movies-page-card__poster-wrap">
                <img
                  className="movies-page-card__poster"
                  src="https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
                  alt="Inception"
                  loading="lazy"
                />
                <div className="movies-page-card__overlay" />
                <span className="movies-page-card__rating">
                  <strong>8.8</strong>
                  <span>★</span>
                </span>
              </div>

              <div className="movies-page-card__content">
                <h3 className="movies-page-card__title">Inception</h3>
                <p className="movies-page-card__original">تلقین</p>
                <div className="movies-page-card__meta">
                  <span>2010</span>
                  <span className="movies-page-card__dot">·</span>
                  <span>Sci-Fi</span>
                </div>
              </div>
            </a>
          </article>

          {/* The Dark Knight */}
          <article className="movies-page-card">
            <a href="#" className="movies-page-card__link">
              <div className="movies-page-card__poster-wrap">
                <img
                  className="movies-page-card__poster"
                  src="https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
                  alt="The Dark Knight"
                  loading="lazy"
                />
                <div className="movies-page-card__overlay" />
                <span className="movies-page-card__rating">
                  <strong>9.0</strong>
                  <span>★</span>
                </span>
              </div>

              <div className="movies-page-card__content">
                <h3 className="movies-page-card__title">The Dark Knight</h3>
                <p className="movies-page-card__original">شوالیه تاریکی</p>
                <div className="movies-page-card__meta">
                  <span>2008</span>
                  <span className="movies-page-card__dot">·</span>
                  <span>Action</span>
                </div>
              </div>
            </a>
          </article>

          {/* Blade Runner 2049 */}
          <article className="movies-page-card">
            <a href="#" className="movies-page-card__link">
              <div className="movies-page-card__poster-wrap">
                <img
                  className="movies-page-card__poster"
                  src="https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg"
                  alt="Blade Runner 2049"
                  loading="lazy"
                />
                <div className="movies-page-card__overlay" />
                <span className="movies-page-card__rating">
                  <strong>8.0</strong>
                  <span>★</span>
                </span>
              </div>

              <div className="movies-page-card__content">
                <h3 className="movies-page-card__title">Blade Runner 2049</h3>
                <p className="movies-page-card__original">بلید رانر ۲۰۴۹</p>
                <div className="movies-page-card__meta">
                  <span>2017</span>
                  <span className="movies-page-card__dot">·</span>
                  <span>Sci-Fi</span>
                </div>
              </div>
            </a>
          </article>

          {/* Dune */}
          <article className="movies-page-card">
            <a href="#" className="movies-page-card__link">
              <div className="movies-page-card__poster-wrap">
                <img
                  className="movies-page-card__poster"
                  src="https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
                  alt="Dune"
                  loading="lazy"
                />
                <div className="movies-page-card__overlay" />
                <span className="movies-page-card__rating">
                  <strong>8.1</strong>
                  <span>★</span>
                </span>
              </div>

              <div className="movies-page-card__content">
                <h3 className="movies-page-card__title">Dune</h3>
                <p className="movies-page-card__original">تل‌ماسه</p>
                <div className="movies-page-card__meta">
                  <span>2021</span>
                  <span className="movies-page-card__dot">·</span>
                  <span>Sci-Fi</span>
                </div>
              </div>
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Movies;