import { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { useModal } from '../../context/Modal';
import { FaStar, FaRegStar } from "react-icons/fa";

function ReviewForm({ spotId }) {
  const [reviewText, setReviewText] = useState("");
  const [stars, setStars] = useState(0);
  const [hoverStars, setHoverStars] = useState(0);
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
              onMouseEnter={() => setHoverStars(index + 1)}
              onMouseLeave={() => setHoverStars(0)}
              onClick={() => setStars(index + 1)}
              style={{ cursor: 'pointer' }}
            >
              {hoverStars > index || stars > index ? (
                <FaStar color="#FF5A5F" size={30} />
              ) : (
                <FaRegStar color="#ddd" size={30} />
              )}
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