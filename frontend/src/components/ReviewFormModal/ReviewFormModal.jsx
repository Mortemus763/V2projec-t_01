import { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { useModal } from '../../context/Modal';

function ReviewForm({ spotId }) {
  const [reviewText, setReviewText] = useState("");
  const [stars, setStars] = useState(1);
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewData = { review: reviewText, stars };

    dispatch(sessionActions.addReview(spotId, reviewData))
      .then(() => {
        // Clear the form and close the modal on successful submission
        setReviewText('');
        setStars(1);
        closeModal();
      })
      .catch((error) => {
        console.error('Error submitting review:', error);
      });
  };

  return (
    <div className="review-form-modal">
      <h1>How was your stay?</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Leave your review here..."
          required
        />
        <div className="star-rating">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={stars > index ? 'star filled' : 'star'}
              onClick={() => setStars(index + 1)}
            >
              ★
            </span>
          ))}
        </div>
        <button type="submit" className="submit-review-button">
          Submit Your Review
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;