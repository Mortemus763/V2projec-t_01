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
      setSpots(data.Spots);
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
        <div className="spots-grid">
          {spots.map((spot) => (
            <div
              key={spot.id}
              className="spot-tile"
              onClick={() => handleTileClick(spot.id)} // Navigate to SpotDetail
            >
              <img
                src={spot.previewImage || "/placeholder.jpg"}
                alt={spot.name}
                className="spot-image"
              />
              <div className="spot-info">
                <p className="location">
                  {spot.city}, {spot.state}
                </p>
                <p className="price">
                  ${spot.price} <span className="per-night">/ night</span>
                </p>
                <div className="rating">
                  <span>★ {spot.avgStarRating || "New"}</span>
                </div>
              </div>
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
                {/* OpenModalButton for Deletion */}
                <OpenModalButton className="custom-delete-button"
                   // Ensures proper styling
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
                  onButtonClick={(e) => {
                    if (e) e.stopPropagation(); // Ensure `e` is defined before calling
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageSpots;
