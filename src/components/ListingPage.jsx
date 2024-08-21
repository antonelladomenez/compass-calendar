import React, { useEffect, useState } from 'react';

const ListingPage = ({ listingId, onBack }) => {
  const [listing, setListing] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/saved-listings/${listingId}`)
      .then(response => {
        if (!response.ok) throw new Error('Oops! Something went wrong while loading the data. Please try again later.');
        return response.json();
      })
      .then(data => setListing(data))
      .catch(err => setError(err.message));
  }, [listingId]);

  if (error) return <div>Error: {error}</div>;
  if (!listing) return <div>Loading...</div>;
console.log(listing);

  return (
    <div>
      <button onClick={() => onBack('landing')}>Back to Favorites</button>
      <h1>{listing.address}, {listing.city}</h1>
      <p>Price: ${listing.price}</p>
      <p>Bedrooms: {listing.bedrooms}</p>
      <p>Bathrooms: {listing.bathrooms}</p>
      <button onClick={() => onBack('calendar', listingId)}>View Open Houses</button>
    </div>
  );
};

export default ListingPage;
