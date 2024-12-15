import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SpotList.css'; // Create and import this CSS file

const SpotList = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const response = await fetch('/api/spots');
        const data = await response.json();
        
        // Fetch reviews dynamically for each spot
        const spotsWithRatings = await Promise.all(
          data.Spots.map(async (spot) => {
            const reviewsRes = await fetch(`/api/spots/${spot.id}/reviews`);
            const reviewsData = await reviewsRes.json();
            
            // Calculate average rating
            const reviews = reviewsData.Reviews || [];
            const reviewCount = reviews.length;
            const averageRating = reviewCount
              ? (reviews.reduce((sum, review) => sum + review.stars, 0) / reviewCount).toFixed(1)
              : "New";
            
            return {
              ...spot,
              avgStarRating: averageRating,
              numReviews: reviewCount
            };
          })
        );
        
        setSpots(spotsWithRatings);
      } catch (error) {
        console.error('Error fetching spots:', error);
      }
    };

    fetchSpots();
  }, []);

  return (
    <div className="spot-list">
      {spots.length > 0 ? (
        spots.map((spot) => (
          <Link to={`/spots/${spot.id}`} key={spot.id} className="spot-tile">
            <img
              src={spot.previewImage || '/default-image.png'}
              alt={spot.name}
              className="spot-image"
            />
            <div className="spot-info">
              {/* Spot name and rating */}
              <div className="spot-header">
                <h2 className="spot-name" title={spot.name}>{spot.name}</h2>
                <div className="spot-rating">
                  <span className="star-icon">★</span>
                  {spot.avgStarRating}{" "}
                  {spot.numReviews > 0 ? `· ${spot.numReviews} Review${spot.numReviews > 1 ? "s" : ""}` : ""}
                </div>
              </div>

              {/* Location and price */}
              <p className="spot-location">
                {spot.city}, {spot.state}
              </p>
              <p className="spot-price">${spot.price} / night</p>
            </div>
          </Link>
        ))
      ) : (
        <p>No spots available</p>
      )}
    </div>
  );
};

export default SpotList;
