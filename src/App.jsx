// src/App.jsx
import React, { useState, useEffect } from 'react';
import Calendar from './components/Calendar';
import Spinner from './components/Spinner';
import LandingPage from './components/LandingPage';
import ListingPage from './components/ListingPage';

const MOCK_API_RESPONSE = {
  id: '1235',
  address: '123 Main St',
  city: 'New York City',
  state: 'NY',
  zipCode: '10001',
  price: 1000000,
  bedrooms: 2,
  bathrooms: 1.5,
  isSaved: true,
  isFavorited: true,
  openHouses: [
    {
      date: '2024-6-01',
      time: '10:00 AM',
    },
    {
      date: '2024-6-02',
      time: '11:00 AM',
    },
    {
      date: '2024-7-03',
      time: '12:00 PM',
    },
  ],
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('landing');
  const [selectedListing, setSelectedListing] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading time
  }, []);

  const handlePageChange = (page, listing) => {
    setCurrentPage(page);
    setSelectedListing(listing);
    console.log('Selected Listing:', listing); // Verify the structure of the listing
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      {currentPage === 'landing' && <LandingPage onListingClick={handlePageChange} />}
      {currentPage === 'listing' && selectedListing && (
        <ListingPage listing={selectedListing} onBack={() => setCurrentPage('landing')} />
      )}
      {currentPage === 'calendar' && selectedListing && (
        <div className="calendar-container">
          <Calendar availableTourDays={Array.isArray(selectedListing.openHouses) ? selectedListing.openHouses : []} />
        </div>
      )}
    </div>
  );
};

export default App;
