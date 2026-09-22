import Header from "./components/Header";
import Hero from "./components/Hero";
import MovieCard from "./components/MovieCard";
import SectionTitle from "./components/SectionTitle";

import { trendingMovies } from "./data/movies";

import "./App.css";

function App() {
  return (
    <div className="app">
      
      <Header />

      <main>

        {/* Hero */}
        <section className="hero">

          <div className="hero-content">

            <div className="hero-badge">
              <span></span>
              دنیای سینما، از نگاه نیلوفر آبی
            </div>

            <h1>
              هر داستان،
              <br />
              <span>جهانی برای کشف</span>
            </h1>

            <p>
              نقد و بررسی فیلم‌ها، سریال‌ها و انیمه‌هایی که
              ارزش تماشا کردن و درباره‌شان حرف زدن دارند.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                کشف آثار
                <span>←</span>
              </button>

              <button className="secondary-btn">
                مشاهده نقدها
              </button>
            </div>

            <div className="hero-stats">
              <div>
                <strong>1000+</strong>
                <span>اثر برای کشف</span>
              </div>

              <div>
                <strong>500+</strong>
                <span>نقد و بررسی</span>
              </div>

              <div>
                <strong>10+</strong>
                <span>ژانر سینمایی</span>
              </div>
            </div>

          </div>

          {/* Hero Visual */}
          <div className="hero-visual">

            <div className="visual-glow"></div>

            <div className="hero-poster">

              <div className="poster-top">
                <span>FEATURED</span>
                <span>2024</span>
              </div>

              <div className="poster-art">
                <div className="planet"></div>
                <div className="mountain mountain-one"></div>
                <div className="mountain mountain-two"></div>
                <div className="poster-lotus">🪷</div>
              </div>

              <div className="poster-bottom">
                <span>SCI-FI</span>
                <h2>DUNE</h2>
                <p>PART TWO</p>
              </div>

            </div>

            <div className="rating-card">
              <span className="rating-star">★</span>

              <div>
                <strong>8.8</strong>
                <small>امتیاز کاربران</small>
              </div>
            </div>

            <div className="floating-tag">
              انتخاب سردبیر
            </div>

          </div>

          <div className="hero-decoration"></div>

        </section>


        {/* Trending */}
        <section className="trending">

          <div className="section-header">

            <div>
              <span className="section-label">
                TRENDING NOW
              </span>

              <h2>آثار محبوب</h2>

              <p>
                آثاری که این روزها بیشتر درباره‌شان صحبت می‌شود
              </p>
            </div>

            <a href="#" className="view-all">
              مشاهده همه
              <span>←</span>
            </a>

          </div>


          <div className="movie-grid">

            {trendingMovies.map((movie) => (

              <article className="movie-card" key={movie.title}>

                <div className="movie-poster">

                  <div className="poster-shine"></div>

                  <span className="movie-type">
                    {movie.type}
                  </span>

                  <span className="movie-rating">
                    ★ {movie.rating}
                  </span>

                  <div className="fake-poster-title">
                    {movie.title}
                  </div>

                  <button className="play-button">
                    ▶
                  </button>

                </div>

                <div className="movie-info">

                  <h3>{movie.title}</h3>

                  <p>{movie.original}</p>

                  <div className="movie-meta">
                    <span>{movie.year}</span>
                    <span>{movie.genre}</span>
                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;