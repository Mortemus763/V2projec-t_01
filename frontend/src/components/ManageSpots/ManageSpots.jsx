import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  
  const handleDelete = async (spotId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this spot?"
    );
    if (confirmDelete) {
      await fetch(`/api/spots/${spotId}`, { method: "DELETE" });
      setSpots((prevSpots) => prevSpots.filter((spot) => spot.id !== spotId));
    }
  };

  if (!sessionUser) return <p>Please log in to manage your spots.</p>;

  return (
    <div className="manage-spots-page">
      <h1>Manage Spots</h1>
      {spots.length === 0 ? (
        <div className="no-spots">
          <p>You have not created any spots yet.</p>
          <button onClick={() => navigate.push("/spots/new")} className="create-spot-button">
            Create a New Spot
          </button>
        </div>
      ) : (
        <div className="spots-grid">
          {spots.map((spot) => (
            <div
              key={spot.id}
              className="spot-tile"
              onClick={() => navigate.push(`/spots/${spot.id}`)}
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
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(spot.id);
                  }}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageSpots;