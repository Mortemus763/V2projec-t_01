import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import { useNavigate } from "react-router-dom";

function ReviewForm({ spotId }) {
  const [reviewText, setReviewText] = useState("");
  const [stars, setStars] = useState(1);
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user); // Check if user is logged in
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewData = { review: reviewText, stars };

    dispatch(sessionActions.addReview(spotId, reviewData))
      .then(() => {
        // Handle success (e.g., clear the form or update the review list)
        setReviewText("");
        setStars(1);
      })
      .catch((error) => {
        console.error("Error submitting review:", error);
      });
  };

  if (!sessionUser) {
    // Display a message or prompt to log in if the user is not logged in
    return (
      <p className="login-prompt">
        Please <span onClick={() => navigate("/login")}>log in</span> to post a review.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Write your review here"
        required
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