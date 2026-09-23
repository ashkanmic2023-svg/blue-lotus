
function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <span className="hero-badge">
            Blue Lotus
        </span>

        <h1>
          دنیای سینما
          <br />
          <span>با نیلوفر آبی</span>
        </h1>

        <p>
          جدیدترین فیلم‌ها و سریال‌ها را کشف کنید
          و وارد دنیای سینمایی خودتان شوید.
        </p>

        <div className="hero-actions">
          <button className="btn btn-primary" type="button">
            ▶ مشاهده فیلم‌ها
          </button>

          <button className="btn btn-secondary" type="button">
            بیشتر بدانید
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;