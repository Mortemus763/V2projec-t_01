import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from '../ReviewForm/ReviewForm'; 
import './SpotDetail.css'; // Add custom CSS for styling

function SpotDetail() {
  const { spotId } = useParams();  // Get spot ID from URL
  const [spot, setSpot] = useState(null);

  useEffect(() => {
    // Fetch spot details
    const fetchSpotDetails = async () => {
      const response = await fetch(`/api/spots/${spotId}`);
      const data = await response.json();
      setSpot(data);  // Set the state with the fetched spot details
    };

    fetchSpotDetails();
  }, [spotId]);

  if (!spot) {
    return <div>Loading...</div>;
  }

  const handleReserve = () => {
    alert("Feature coming soon");
  };

  return (
    <div className="spot-detail-page">
      <h1>{spot.name}</h1>
      <h2>{spot.city}, {spot.state}, {spot.country}</h2>
      <div className="spot-images">
        <img src={spot.SpotImages[0]?.url} alt="Main" className="main-image" />
        <div className="thumbnail-images">
          {spot.SpotImages.slice(1, 5).map((image, index) => (
            <img key={index} src={image.url} alt={`Spot thumbnail ${index + 1}`} className="thumbnail" />
          ))}
        </div>
      </div>

      <div className="spot-info">
        <p>Hosted by {spot.Owner.firstName} {spot.Owner.lastName}</p>
        <p>{spot.description}</p>
        <div className="price-box">
          <span>{`$${spot.price} per night`}</span>
          <button onClick={handleReserve}>Reserve</button>
        </div>
      </div>

      {/* Review Section */}
      <div className="reviews-section">
        <h3>
          Reviews: 
          {spot.numReviews === 0 ? "Be the first to post a review!" : `Average Rating: ${spot.avgStarRating} · ${spot.numReviews} Review${spot.numReviews > 1 ? "s" : ""}`}
        </h3>
        {spot.Reviews && spot.Reviews.length > 0 ? (
          <div className="reviews-list">
            {spot.Reviews.map((review) => (
              <div key={review.id} className="review-item">
                <p><strong>{review.User.firstName} {review.User.lastName}</strong> - {new Date(review.createdAt).toLocaleString('en-us', { month: 'long', year: 'numeric' })}</p>
                <p>{review.review}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No reviews yet.</p>
        )}
        
        {/* Review Form - Show this if the user is logged in */}
        <ReviewForm spotId={spotId} />
      </div>
    </div>
  );
}

export default SpotDetail;