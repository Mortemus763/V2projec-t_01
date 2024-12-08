import { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

function ReviewForm({ spotId }) {
  const [reviewText, setReviewText] = useState("");
  const [stars, setStars] = useState(1);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewData = { review: reviewText, stars };

    dispatch(sessionActions.addReview(spotId, reviewData))
      .then(() => {
        // Handle success (show success message or update review list)
      })
      .catch((error) => {
        console.error('Error submitting review:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Write your review here"
      />
      <div>
        <label>Rating:</label>
        <select value={stars} onChange={(e) => setStars(e.target.value)}>
          {[1, 2, 3, 4, 5].map((star) => (
            <option key={star} value={star}>
              {star} Star{star > 1 && "s"}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;