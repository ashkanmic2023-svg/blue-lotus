function ReviewCard({ review }) {
  return (
    <article className="review-card">

      <div className="review-image">

        <img
          src={review.image}
          alt={review.title}
          loading="lazy"
        />

        <div className="review-overlay">
          <span className="review-category">
            {review.category}
          </span>

          <span className="review-arrow">
            ←
          </span>
        </div>

      </div>

      <div className="review-info">
        <h3>{review.title}</h3>
        <span>مشاهده نقد و بررسی</span>
      </div>

    </article>
  );
}

export default ReviewCard;