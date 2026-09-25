import "./SeriesSection.css";

const series = [
  {
    id: 1,
    title: "Dark",
    persianTitle: "دارک",
    year: "2017",
    rating: "8.7",
    genre: "Mystery · Sci-Fi",
    poster:
      "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Breaking Bad",
    persianTitle: "بریکینگ بد",
    year: "2008",
    rating: "9.5",
    genre: "Crime · Drama",
    poster:
      "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRN2.jpg",
  },
  {
    id: 3,
    title: "Stranger Things",
    persianTitle: "چیزهای عجیب",
    year: "2016",
    rating: "8.6",
    genre: "Drama · Fantasy",
    poster:
      "https://image.tmdb.org/t/p/w500/uOOtwVbSr4QDjAGIifLDwpb2Pdl.jpg",
  },
  {
    id: 4,
    title: "The Last of Us",
    persianTitle: "آخرین بازمانده از ما",
    year: "2023",
    rating: "8.7",
    genre: "Drama · Adventure",
    poster:
      "https://image.tmdb.org/t/p/w500/dmo6TYuuJgaYinXBPjrgGfmsB5C.jpg",
  },
];

function SeriesSection() {
  const featuredSeries = series.find((item) => item.featured);
  const otherSeries = series.filter((item) => !item.featured);

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

        <a
          href="/series"
          className="series-section__all-link"
        >
          ورود به دنیای سریال
          <span>←</span>
        </a>

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
            شهری که رازهایش در تاریکی پنهان شده‌اند؛ داستانی درباره
            خانواده، زمان و زنجیره‌ای از اتفاقات که نسل‌ها را به هم
            گره می‌زند.
          </p>


          <div className="series-featured__actions">

            <a
              href="/series/dark"
              className="series-featured__primary-button"
            >
              ورود به داستان
              <span>←</span>
            </a>

            <a
              href="/series/dark"
              className="series-featured__secondary-button"
            >
              جزئیات بیشتر
            </a>

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

          <a href="/series">
            مشاهده همه
            <span>←</span>
          </a>

        </div>


        <div className="series-row">

          {otherSeries.map((item) => (
            <a
              href={`/series/${item.id}`}
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

            </a>
          ))}

        </div>

      </div>

    </section>
  );
}

export default SeriesSection;