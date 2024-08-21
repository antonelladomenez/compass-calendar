import React, { useEffect, useState } from 'react';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch('/api/saved-listings');
        if (!response.ok) {
          throw new Error('Oops! Something went wrong while loading the data. Please try again later.');
        }
        const data = await response.json();
        setFavorites(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Your Favorite Listings</h1>
      <ul>
        {favorites.map((listing) => (
          <li key={listing.id}>
            <a href={`/listing/${listing.id}`}>{listing.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;