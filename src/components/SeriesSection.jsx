import { Link } from "react-router-dom";
import {
  getFeaturedSeries,
  getOtherSeries,
} from "../data/series";
import "./SeriesSection.css";

function SeriesSection() {
  const featuredSeries = getFeaturedSeries();
  const otherSeries = getOtherSeries();

  return (
    <section className="series-section" id="series">

      {/* HEADER */}
      <div className="series-section__header">

        <div className="series-section__heading">
          <span className="series-section__eyebrow">
            ENTER THE WORLD OF
          </span>

          <h2>
            سریال و تلویزیون
            <span>SERIES & TV</span>
          </h2>
        </div>

        <Link
          to="/series"
          className="series-section__all-link"
        >
          ورود به دنیای سریال
          <span>←</span>
        </Link>

      </div>


      {/* FEATURED */}
      <div className="series-featured">

        {/* GOLDEN LIGHT */}
        <div className="series-featured__light" />

        {/* MOVING LINES */}
        <div className="series-featured__lines">
          <span />
          <span />
          <span />
        </div>

        {/* VERTICAL WORD */}
        <div className="series-featured__vertical-text">
          SERIES
        </div>


        {/* POSTER */}
        <div className="series-featured__poster-wrap">

          <div className="series-featured__poster-glow" />

          <img
            src={featuredSeries.poster}
            alt={featuredSeries.title}
            className="series-featured__poster"
          />

        </div>


        {/* CONTENT */}
        <div className="series-featured__content">

          <span className="series-featured__label">
            FEATURED SERIES
          </span>

          <h3>{featuredSeries.title}</h3>

          <p className="series-featured__persian-title">
            {featuredSeries.persianTitle}
          </p>

          <div className="series-featured__meta">

            <span className="series-featured__rating">
              {featuredSeries.rating}
            </span>

            <span>★</span>

            <span>·</span>

            <span>{featuredSeries.genre}</span>

            <span>·</span>

            <span>{featuredSeries.year}</span>

          </div>

          <p className="series-featured__description">
            {featuredSeries.description}
          </p>


          <div className="series-featured__actions">

            <Link
              to={`/series/${featuredSeries.slug}`}
              className="series-featured__primary-button"
            >
              ورود به داستان
              <span>←</span>
            </Link>

            <Link
              to={`/series/${featuredSeries.slug}`}
              className="series-featured__secondary-button"
            >
              جزئیات بیشتر
            </Link>

          </div>

        </div>

      </div>


      {/* MORE SERIES */}
      <div className="series-more">

        <div className="series-more__heading">

          <div>
            <span>DISCOVER MORE</span>

            <h3>
              داستان‌های بیشتری برای کشف
            </h3>
          </div>

          <Link to="/series">
            مشاهده همه
            <span>←</span>
          </Link>

        </div>


        <div className="series-row">

          {otherSeries.map((item) => (
            <Link
              to={`/series/${item.slug}`}
              className="series-card"
              key={item.id}
            >

              <div className="series-card__poster-wrap">

                <img
                  src={item.poster}
                  alt={item.title}
                  className="series-card__poster"
                />

                <div className="series-card__overlay" />

                <span className="series-card__rating">
                  ★ {item.rating}
                </span>

              </div>

              <div className="series-card__info">

                <h4>{item.title}</h4>

                <span>
                  {item.persianTitle}
                </span>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}

export default SeriesSection;