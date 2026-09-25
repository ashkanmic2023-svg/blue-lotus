import Header from "./components/Header";
import Anime from "./components/Anime";
import UserReviewCard from "./components/UserReviewCard";
import { userReviews } from "./data/userReviews";
import Footer from "./components/Footer";
import MoviesSection from "./components/MoviesSection";
import SeriesSection from "./components/SeriesSection";
import Movies from "./pages/Movies/Movies";

import { Routes, Route } from "react-router-dom";

import "./App.css";


/* =========================================
   HOME PAGE
========================================= */

function Home() {
  return (
    <>
      {/* =========================
          HERO
      ========================== */}

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


        {/* =========================
            HERO VISUAL
        ========================== */}

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

              <div className="poster-lotus">
                🪷
              </div>

            </div>

            <div className="poster-bottom">

              <span>SCI-FI</span>

              <h2>DUNE</h2>

              <p>PART TWO</p>

            </div>

          </div>


          <div className="rating-card">

            <span className="rating-star">
              ★
            </span>

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


      {/* =========================
          MOVIES
      ========================== */}

      <MoviesSection />


      {/* =========================
          ANIME
      ========================== */}

      <Anime />


      {/* =========================
          SERIES
      ========================== */}

      <SeriesSection />


      {/* =========================
          COMMUNITY
      ========================== */}

      <section
        className="user-reviews-section"
        id="community"
      >

        <div className="section-header">

          <div>

            <span className="section-label">
              COMMUNITY
            </span>

            <h2>
              صدای تماشاگران
            </h2>

            <p>
              هر داستان یک برداشت دارد؛ برداشت شما چیست؟
            </p>

          </div>

          <button className="write-review-button">
            + نوشتن نظر
          </button>

        </div>


        <div className="user-reviews-grid">

          {userReviews.map((review) => (
            <UserReviewCard
              key={review.id}
              review={review}
            />
          ))}

        </div>

      </section>

    </>
  );
}


/* =========================================
   APP
========================================= */

function App() {
  return (
    <div className="app">

      <Header />

      <main>

        <Routes>

          {/* =========================
              HOME
          ========================== */}

          <Route
            path="/"
            element={<Home />}
          />


          {/* =========================
              MOVIES
          ========================== */}

          <Route
            path="/movies"
            element={<Movies />}
          />

        </Routes>

      </main>

      <Footer />

    </div>
  );
}

export default App;