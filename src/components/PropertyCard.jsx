import React from 'react';

const PropertyCard = ({ property, onClick }) => {
  return (
    <div className="property-card" onClick={onClick}>
      <div className="property-info">
        <h3 className="property-address">{property.address}</h3>
        <p className="property-location">
          {property.city}, {property.state}
        </p>
        <p className="property-price">${property.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
