import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import DeleteSpotModal from "../DeleteSpot/DeleteSpot";
import "./ManageSpots.css";

function ManageSpots() {
  const [spots, setSpots] = useState([]);
  const sessionUser = useSelector((state) => state.session.user);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSpots = async () => {
      const response = await fetch(`/api/spots/current`);
      const data = await response.json();

      // Fetch reviews for each spot and calculate avgStarRating and numReviews
      const spotsWithRatings = await Promise.all(
        data.Spots.map(async (spot) => {
          const reviewsRes = await fetch(`/api/spots/${spot.id}/reviews`);
          const reviewsData = await reviewsRes.json();

          const reviews = reviewsData.Reviews || [];
          const reviewCount = reviews.length;
          const averageRating =
            reviewCount > 0
              ? (reviews.reduce((sum, review) => sum + review.stars, 0) / reviewCount).toFixed(1)
              : "New";

          return {
            ...spot,
            avgStarRating: averageRating,
            numReviews: reviewCount,
          };
        })
      );

      setSpots(spotsWithRatings);
    };

    if (sessionUser) fetchSpots();
  }, [sessionUser]);

  const handleUpdate = (spotId) => {
    navigate(`/spots/${spotId}/edit`);
  };

  const handleTileClick = (spotId) => {
    // Navigate to SpotDetail page when a tile is clicked
    navigate(`/spots/${spotId}`);
  };

  if (!sessionUser) return <p>Please log in to manage your spots.</p>;

   return (
    <div className="manage-spots-page">
      <h1>Manage Spots</h1>
      {spots.length === 0 ? (
        <div className="no-spots">
          <p>You have not created any spots yet.</p>
          <button
            onClick={() => navigate("/spots/new")}
            className="create-spot-button"
          >
            Create a New Spot
          </button>
        </div>
      ) : (
        <div className="spot-list">
          {spots.map((spot) => (
            <div
              key={spot.id}
              className="spot-tile"
              onClick={() => handleTileClick(spot.id)} // Navigate to SpotDetail
            >
               <img
              src={spot.previewImage || '/default-image.png'}
              alt={spot.name}
              className="spot-image"
            />
              <div className="spot-info">
                {/* Spot header: name and rating */}
                <div className="spot-header">
                  <h2 className="spot-name" title={spot.name}>
                    {spot.name}
                  </h2>
                  <div className="spot-rating">
                    <span className="star-icon">★</span>
                    {spot.avgStarRating}{" "}
                    {spot.numReviews > 0
                      ? `· ${spot.numReviews} Review${spot.numReviews > 1 ? "s" : ""}`
                      : ""}
                  </div>
                </div>

                {/* Location and price */}
                <p className="spot-location">
                  {spot.city}, {spot.state}
                </p>
                <p className="spot-price">${spot.price} / night</p>

                {/* Update and Delete buttons */}
                <div className="spot-buttons">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleUpdate(spot.id);
                    }}
                    className="update-button"
                  >
                    Update
                  </button>
                  <OpenModalButton
                    className="custom-delete-button"
                    buttonText="Delete"
                    modalComponent={
                      <DeleteSpotModal
                        spotId={spot.id}
                        onDelete={() =>
                          setSpots((prevSpots) =>
                            prevSpots.filter((s) => s.id !== spot.id)
                          )
                        }
                      />
                    }
                    onButtonClick={(e) => e.stopPropagation()} // Prevent tile click
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageSpots;
