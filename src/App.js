import React from 'react';
import './css/App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'
import BookingFormPage from './BookingFormPage';
// import BookingForm from './BookingForm';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NoPage from './noPage';
import { Book } from '@material-ui/icons';
import ReservationsPage from './ReservationsPage';

function App() {
  return (
    <div className="App">
      <Router>

        < Header />

        <Switch >

          <Route path="/reservations"> <ReservationsPage/></Route>
          <Route path="/search"><SearchPage /></Route>

          <Route path ="/bookingForm" > <BookingFormPage /></Route>
          <Route path ="/">< Home/></Route>  






        </Switch>

        < Footer />

      </Router>
     </div>
  );
}

export default App;
