import React from 'react';

const ReservationCard = ({ reservation }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2>Reservation</h2>
      </div>
      <div className="card-body">
      <p><strong>Check-in Date:</strong> {reservation.checkInDate}</p>
          <p><strong>Check-out Date:</strong> {reservation.checkOutDate}</p>
         <p><strong>Number of Guests:</strong> {reservation.numberOfGuests}</p>
          <p><strong>Bookie Name:</strong> {reservation.bookieName}</p><br /> 
          <p><strong>Accommodation :</strong> {reservation.accommodationPlace}</p>
      </div>
    </div>
  );
};

export default ReservationCard;