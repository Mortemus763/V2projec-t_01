import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReviewFormModal from '../ReviewFormModal/ReviewFormModal';
import OpenModalButton from '../OpenModalButton/OpenModalButton';
import './SpotDetail.css'; // Add custom CSS for styling

function SpotDetail() {
  const { spotId } = useParams(); // Get spot ID from URL
  const [spot, setSpot] = useState(null);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    const fetchSpotDetails = async () => {
      try {
        const response = await fetch(`/api/spots/${spotId}`);
        if (!response.ok) throw new Error('Failed to fetch spot details');
        const data = await response.json();
        setSpot(data); // Set the state with the fetched spot details
      } catch (error) {
        console.error(error);
      }
    };

    fetchSpotDetails();
  }, [spotId]);

  if (!spot) {
    return <div>Loading...</div>;
  }

  const handleReserve = () => {
    alert("Feature coming soon");
  };
  const spotImages = spot?.SpotImages || [];
  const reviews = spot?.Reviews || [];
  return (
    <div className="spot-detail-page">
      {/* Header Section */}
      <div className="spot-header">
        <h1>{spot.name}</h1>
        <h2>{spot.city}, {spot.state}, {spot.country}</h2>
      </div>

      {/* Images Section */}
      <div className="spot-images">
        <img src={spotImages[0]?.url || "/placeholder.jpg"} alt="Main" className="main-image" />
        <div className="thumbnail-images">
          {spotImages.slice(1, 5).map((image, index) => (
            <img key={index} src={image.url} alt={`Spot thumbnail ${index + 1}`} className="thumbnail" />
          ))}
        </div>
      </div>
      <div className="content-container">
        {/* Left Side - Spot Info */}
        <div className="spot-info">
          <p>Hosted by {spot.Owner.firstName} {spot.Owner.lastName}</p>
          <p>{spot.description}</p>
        </div>

        {/* Right Side - Reserve Box */}
        <div className="reserve-box">
          <div className="info-container">
            <span className="price">{`$${spot.price}`}</span>
            <span className="per-night">/ night</span>
            <div className="rating">
              <span>★ {spot.avgStarRating || "New"}</span>
              {spot.numReviews > 0 && (
                <span> · {spot.numReviews} Review{spot.numReviews > 1 ? "s" : ""}</span>
              )}
            </div>
          </div>
          <button onClick={handleReserve} className="reserve-button">Reserve</button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h3>
          ★ {spot.avgStarRating || "New"} · {spot.numReviews} Review{spot.numReviews > 1 ? "s" : ""}
        </h3>

        {/* Post Your Review Button */}
        {sessionUser ? (
          <div className="post-review-container">
            <OpenModalButton
              buttonText="Post Your Review"
              className="post-review-button"
              modalComponent={<ReviewFormModal spotId={spotId} />}
            />
          </div>
        ) : (
          <p style={{ color: 'black' }}>Please log in to post a review.</p>
        )}

        {/* List of Reviews */}
        {spot.Reviews && spot.Reviews.length > 0 ? (
          <div className="reviews-list">
            {reviews.map((review) => (
              <div key={review.id} className="review-item">
                <p>
                  <strong>{review.User?.firstName}</strong> -{" "}
                  {new Date(review.createdAt).toLocaleString("en-us", {
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <p>{review.review}</p>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: "black" }}>No reviews yet.</p>
        )}
      </div>
    </div>
  );
}

export default SpotDetail;
