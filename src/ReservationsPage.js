// ReservationsPage.js
import "../src/css/reservationCard.css"

import ReservationCard from "./ReservationCard";

import React, { useState, useEffect } from 'react';

const ReservationsPage = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Fetch data from backend API
    fetch('http://localhost:4000/reservations')
      .then(res => res.json())
      .then(data => setReservations(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Previous Reservations</h1>

      <div className="reservation-cards">
        {reservations.map((reservation, index) => (
          <ReservationCard key={index} reservation={reservation} />
        ))}
      </div>

       {/* <div className="card">
      <div className="card-header">
        <h2>Reservation</h2>
      </div>
      <div className="card-body">
      {reservations.map((reservation, index) => (
          <li key={index}>
            <p><strong>Check-in Date:</strong> {reservation.checkInDate}</p>
          <p><strong>Check-out Date:</strong> {reservation.checkOutDate}</p>
         <p><strong>Number of Guests:</strong> {reservation.numberOfGuests}</p>
          <p><strong>Bookie Name:</strong> {reservation.bookieName}</p><br /> 
          <p><strong>Accommodation :</strong> {reservation.accommodationPlace}</p>

          </li>
        ))}
        
        </div>
    </div>  */}
      {/* <ul>
        {reservations.map((reservation, index) => (
          <li key={index}>
            Check-in Date: {reservation.checkInDate}<br />
            Check-out Date: {reservation.checkOutDate}<br />
            Number of Guests: {reservation.numberOfGuests}<br />

          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ReservationsPage;
