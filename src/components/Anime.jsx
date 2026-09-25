import "./Anime.css";

const animeList = [
  {
    id: "attack-on-titan",
    title: "Attack on Titan",
    japaneseTitle: "進撃の巨人",
    persianTitle: "حمله به تایتان",
    year: "2013",
    genre: "Action · Dark Fantasy",
    rating: "9.1",
    poster:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "demon-slayer",
    title: "Demon Slayer",
    japaneseTitle: "鬼滅の刃",
    persianTitle: "شیطان‌کش",
    year: "2019",
    genre: "Action · Fantasy",
    rating: "8.6",
    poster:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "jujutsu-kaisen",
    title: "Jujutsu Kaisen",
    japaneseTitle: "呪術廻戦",
    persianTitle: "جوجوتسو کایسن",
    year: "2020",
    genre: "Action · Supernatural",
    rating: "8.5",
    poster:
      "https://images.unsplash.com/photo-1614583224978-f8f9a4e4c4b3?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "your-name",
    title: "Your Name",
    japaneseTitle: "君の名は。",
    persianTitle: "نام تو",
    year: "2016",
    genre: "Romance · Fantasy",
    rating: "8.4",
    poster:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=85",
  },
];

function Anime() {
  const featuredAnime = animeList[0];

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

        <a
          href="/anime"
          className="anime-section__all-link"
        >
          ورود به دنیای انیمه
          <span>←</span>
        </a>

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
            در دنیایی که انسان‌ها پشت دیوارهای عظیم زندگی می‌کنند،
            حقیقت آرام‌آرام از دل ترس بیرون می‌آید. داستانی از آزادی،
            بقا، دوستی و انتخاب‌هایی که هیچ بازگشتی از آن‌ها وجود ندارد.
          </p>

          <div className="anime-featured__actions">

            <a
              href={`/anime/${featuredAnime.id}`}
              className="anime-featured__primary"
            >
              ورود به داستان
              <span>←</span>
            </a>

            <a
              href={`/anime/${featuredAnime.id}`}
              className="anime-featured__secondary"
            >
              جزئیات بیشتر
            </a>

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

          <a
            href="/anime"
            className="anime-row__link"
          >
            مشاهده همه
            <span>←</span>
          </a>

        </div>

        <div className="anime-row__scroll">

          {animeList.slice(1).map((anime) => (
            <a
              href={`/anime/${anime.id}`}
              className="anime-card"
              key={anime.id}
            >

              <div className="anime-card__poster">

                <img
                  src={anime.poster}
                  alt={anime.title}
                />

                <div className="anime-card__overlay">
                  <span>
                    ورود به داستان
                  </span>
                </div>

                <div className="anime-card__rating">
                  ★ {anime.rating}
                </div>

                <div className="anime-card__jp">
                  {anime.japaneseTitle}
                </div>

              </div>

              <div className="anime-card__info">

                <span>
                  {anime.year}
                </span>

                <h4>
                  {anime.title}
                </h4>

                <p>
                  {anime.persianTitle}
                </p>

              </div>

            </a>
          ))}

        </div>
      </div>

      {/* WORLD CTA */}
      <div className="anime-section__bottom">

        <a
          href="/anime"
          className="anime-world-button"
        >

          <span>
            ورود به دنیای انیمه
          </span>

          <strong>
            ←
          </strong>

        </a>

      </div>

    </section>
  );
}

export default Anime;