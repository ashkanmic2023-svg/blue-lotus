import { Link } from "react-router-dom";
import {
  getFeaturedAnime,
  getOtherAnime,
} from "../data/anime";
import "./Anime.css";

function Anime() {
  const featuredAnime = getFeaturedAnime();
  const otherAnime = getOtherAnime();

  return (
    <section className="anime-section" id="anime">

      {/* animated atmosphere */}
      <div className="anime-section__stars" />
      <div className="anime-section__glow anime-section__glow--one" />
      <div className="anime-section__glow anime-section__glow--two" />

      {/* HEADER */}
      <div className="anime-section__header">

        <div className="anime-section__heading">
          <span className="anime-section__eyebrow">
            ENTER ANOTHER WORLD
          </span>

          <h2>
            دنیای انیمه
            <span>ANIME WORLD</span>
          </h2>
        </div>

        <Link
          to="/anime"
          className="anime-section__all-link"
        >
          ورود به دنیای انیمه
          <span>←</span>
        </Link>

      </div>

      {/* FEATURED ANIME */}
      <div className="anime-featured">

        <div className="anime-featured__orb anime-featured__orb--one" />
        <div className="anime-featured__orb anime-featured__orb--two" />

        <div className="anime-featured__energy anime-featured__energy--one" />
        <div className="anime-featured__energy anime-featured__energy--two" />

        <div className="anime-featured__poster-wrap">

          <div className="anime-featured__ring anime-featured__ring--one" />
          <div className="anime-featured__ring anime-featured__ring--two" />

          <div className="anime-featured__poster-glow" />

          <img
            src={featuredAnime.poster}
            alt={featuredAnime.title}
            className="anime-featured__poster"
          />

          <div className="anime-featured__poster-shine" />

          <span className="anime-featured__poster-jp">
            {featuredAnime.japaneseTitle}
          </span>

        </div>

        {/* CONTENT */}
        <div className="anime-featured__content">

          <span className="anime-featured__label">
            FEATURED ANIME
          </span>

          <div className="anime-featured__japanese">
            {featuredAnime.japaneseTitle}
          </div>

          <h3>
            {featuredAnime.title}
          </h3>

          <p className="anime-featured__persian-title">
            {featuredAnime.persianTitle}
          </p>

          <div className="anime-featured__meta">
            <span>{featuredAnime.year}</span>
            <span>•</span>
            <span>{featuredAnime.genre}</span>
            <span>•</span>

            <span className="anime-featured__rating">
              ★ {featuredAnime.rating}
            </span>
          </div>

          <p className="anime-featured__description">
            {featuredAnime.description}
          </p>

          <div className="anime-featured__actions">

            <Link
              to={`/anime/${featuredAnime.slug}`}
              className="anime-featured__primary"
            >
              ورود به داستان
              <span>←</span>
            </Link>

            <Link
              to={`/anime/${featuredAnime.slug}`}
              className="anime-featured__secondary"
            >
              جزئیات بیشتر
            </Link>

          </div>

        </div>

        <div className="anime-featured__vertical-text">
          ANIME
        </div>

      </div>

      {/* MORE ANIME */}
      <div className="anime-row">

        <div className="anime-row__top">

          <div>
            <span className="anime-row__label">
              DISCOVER MORE
            </span>

            <h3>
              داستان‌های بیشتری برای کشف
            </h3>
          </div>

          <Link
            to="/anime"
            className="anime-row__link"
          >
            مشاهده همه
            <span>←</span>
          </Link>

        </div>

        <div className="anime-row__scroll">

          {otherAnime.map((item) => (
            <Link
              to={`/anime/${item.slug}`}
              className="anime-card"
              key={item.id}
            >

              <div className="anime-card__poster">

                <img
                  src={item.poster}
                  alt={item.title}
                />

                <div className="anime-card__overlay">
                  <span>
                    ورود به داستان
                  </span>
                </div>

                <div className="anime-card__rating">
                  ★ {item.rating}
                </div>

                <div className="anime-card__jp">
                  {item.japaneseTitle}
                </div>

              </div>

              <div className="anime-card__info">

                <span>
                  {item.year}
                </span>

                <h4>
                  {item.title}
                </h4>

                <p>
                  {item.persianTitle}
                </p>

              </div>

            </Link>
          ))}

        </div>
      </div>

      {/* WORLD CTA */}
      <div className="anime-section__bottom">

        <Link
          to="/anime"
          className="anime-world-button"
        >

          <span>
            ورود به دنیای انیمه
          </span>

          <strong>
            ←
          </strong>

        </Link>

      </div>

    </section>
  );
}

export default Anime;