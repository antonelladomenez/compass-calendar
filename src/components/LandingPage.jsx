import React, { useEffect, useState } from 'react';
import PropertyCard from './PropertyCard'; 

const LandingPage = ({ onListingClick }) => {
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/saved-listings')
      .then(response => {
        if (!response.ok) throw new Error('Oops! Something went wrong while loading the data. Please try again later.');
        return response.json();
      })
      .then(data => setFavorites(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div>
      <h1>Favorites</h1>
      <div className="property-grid">
        {favorites.map(listing => (
          <PropertyCard 
            key={listing.id} 
            property={listing} 
            onClick={() => onListingClick('calendar', listing)} 
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
