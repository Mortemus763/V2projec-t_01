import { useDispatch } from "react-redux";
import { deleteReview } from "../../store/reviews"; // Import your delete thunk
import { useModal } from "../../context/Modal";
import "./DeleteReview.css";

const DeleteReview = ({ spotId, reviewId, onReviewDeleted }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleDelete = async () => {
    try {
      await dispatch(deleteReview(spotId, reviewId)); // Dispatch the delete action
      onReviewDeleted(reviewId); // Call the callback to update parent state
      closeModal(); // Close the modal
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  return (
    <div className="delete-review-modal">
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to delete this review?</p>
      <div className="delete-review-buttons">
        <button onClick={handleDelete} className="delete-button">
          Yes (Delete Review)
        </button>
        <button onClick={closeModal} className="cancel-button">
          No (Keep Review)
        </button>
      </div>
    </div>
  );
};

export default DeleteReview;