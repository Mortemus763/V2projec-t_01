import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SpotList.css'; // Create and import this CSS file

const SpotList = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    fetch('/api/spots')
      .then((response) => response.json())
      .then((data) => setSpots(data.Spots))
      .catch((error) => console.error('Error fetching spots:', error));
  }, []);

  return (
    <div className="spot-list">
      {spots.length > 0 ? (
        spots.map((spot) => (
          <Link to={`/spots/${spot.id}`} key={spot.id} className="spot-tile">
            <img src={spot.previewImage || '/default-image.png'} alt={spot.name} className="spot-image" />
            <div className="spot-info">
              <h2 className="spot-name" title={spot.name}>{spot.name}</h2>
              <p className="spot-location">{spot.city}, {spot.state}</p>
              <p className="spot-price">${spot.price} / night</p>
              <p className="spot-rating">{spot.avgStarRating} stars</p>
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
