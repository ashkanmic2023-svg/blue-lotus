import './FeaturedReview.css'

function FeaturedReview() {
  return (
    <section className="featured-review">
      <div className="featured-review__content">
        <span className="featured-review__label">Featured Review</span>

        <h2>Interstellar</h2>

        <p className="featured-review__meta">
          2014 · Sci-Fi · Drama
        </p>

        <p className="featured-review__text">
          روایتی از زمان، عشق و بقا؛ جایی که مرز میان علم و احساس
          به یکی از ماندگارترین تجربه‌های سینمایی تبدیل می‌شود.
        </p>

        <button className="featured-review__button">
          مشاهده نقد و بررسی
        </button>
      </div>

      <div className="featured-review__visual">
        <div className="featured-review__poster">
          <span>INTERSTELLAR</span>
        </div>
      </div>
    </section>
  )
}

export default FeaturedReview
