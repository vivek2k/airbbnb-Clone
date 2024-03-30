// BookingForm.js
import React, { useState } from 'react';
import axios from 'axios';

import "../src/css/BookingForm1.css"

const BookingFormPage = () => {
  const [bookingDetails, setBookingDetails] = useState({
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: '',
    bookieName: '',
    bookieAge: '',
    numberOfDaysStaying: '',
    accommodationPlace: ''
  });


  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    console.log(bookingDetails)
    e.preventDefault();
    try {
      (await axios.post('/api/submit-data', { bookingDetails }, axiosConfig));
      alert('Data submitted successfully!');
      console.log(bookingDetails)


    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit data.');

    }

  };

  const accommodationOptions = ['Chennai-1BHK', 'Chennai-2BHK', 'Chennai-3BHK', 'Chennai-4BHK'];

  return (
    <div className="form-container">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Check-in Date:
          <input
            type="date"
            name="checkInDate"
            value={bookingDetails.checkInDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Check-out Date:
          <input
            type="date"
            name="checkOutDate"
            value={bookingDetails.checkOutDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Number of Guests:
          <input
            type="number"
            name="numberOfGuests"
            value={bookingDetails.numberOfGuests}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Bookie Name:
          <input
            type="text"
            name="bookieName"
            value={bookingDetails.bookieName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Bookie Age:
          <input
            type="number"
            name="bookieAge"
            value={bookingDetails.bookieAge}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Number of Days Staying:
          <input
            type="number"
            name="numberOfDaysStaying"
            value={bookingDetails.numberOfDaysStaying}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Accommodation Type:
          <select name="accommodationPlace" value={bookingDetails.accommodationPlace} onChange={handleChange} required>
            <option value="">Select Accommodation Type</option>
            {accommodationOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingFormPage;
