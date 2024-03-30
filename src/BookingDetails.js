import React, { useState } from 'react';
import BookingForm from './BookingForm';

// import './css/BookingDetails.css'


const BookingDetails = ({ details }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <button  onClick={toggleDetails}>{showDetails ? 'Hide Details' : 'Show Details'}</button>
      {showDetails && (
        <div>
            <div className='fullscreen-div'>

                <BookingForm />

            </div>


          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default BookingDetails;
