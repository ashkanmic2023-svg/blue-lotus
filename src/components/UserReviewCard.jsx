import "./UserReviewCard.css";
function UserReviewCard({ review }) {
  return (
    <article className="user-review-card">

      <div className="user-review-top">

        <div className="user-avatar">
          {review.username.charAt(0)}
        </div>

        <div className="user-info">
          <strong>{review.username}</strong>
          <span>{review.time}</span>
        </div>

      </div>


      <div className="user-review-rating">
        {"★".repeat(review.rating)}
        <span>
          {"★".repeat(5 - review.rating)}
        </span>
      </div>


      <h3>{review.movie}</h3>


      <p className="user-review-text">
        «{review.text}»
      </p>


      <div className="user-review-footer">

        <button type="button">
          ♡ {review.likes}
        </button>

        <button type="button">
          💬 {review.comments}
        </button>

        <button type="button">
          ↗
        </button>

      </div>

    </article>
  );
}

export default UserReviewCard;
