import React, { useState } from 'react';
import axios from 'axios';

// import "./css/BookingForm.css"

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    }
  };


const BookingForm = ({ onSubmit }) => {
  const [bookingDetails, setBookingDetails] = useState({
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: '',
    bookieName: '',
    bookieAge: '',

  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      (await axios.post('/api/submit-data', { bookingDetails }, axiosConfig));
      alert('Data submitted successfully!');
      console.log("Details :" + bookingDetails)


    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit data.');

    }

  };


  return (

    <form onSubmit={handleSubmit} >
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
      <br />
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
      <br />

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
      <br />

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
      <br />

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
      
      <br />

      <button type="submit">Submit</button>
    </form>

  );
};

export default BookingForm;
