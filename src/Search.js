import React, {useState} from 'react';
import './css/Search.css'
import axios from 'axios';
// import { format } from 'date-fns';



import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from "react-router-dom";

axios.defaults.baseURL = 'http://localhost:4000/'
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
  }
};

// DATE PICKER COMPONENT
function Search() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numGuests, setNumGuests] = useState('');


    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    
    const handleChange = (event) => {
      setNumGuests(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          (await axios.post('/api/submit-dates', { startDate, endDate, numGuests }, axiosConfig));
          alert('Data submitted successfully!');
          console.log(startDate)
          console.log(endDate)
          console.log(numGuests)
        } catch (error) {
          console.error('Error:', error);
          alert('Failed to submit data.');

        }
        history.push("/search")
      };

    return (
        <div className='search'>
                <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
                <h2>
                    Number of guests <PeopleIcon />
                </h2>
                <input min={0}  type="number" onChange={handleChange} value={numGuests}/>
                <Button onClick={handleSubmit} >Search Airbnb</Button>


        </div>
    )

    // return (
    //   <form onSubmit={handleSubmit}>
    //   <label>
    //     Start Date:
    //     <input
    //       type="date"
    //       value={startDate}
    //       onChange={(e) => setStartDate(e.target.value)}
    //     />
    //   </label>
    //   <br />
    //   <label>
    //     End Date:
    //     <input
    //       type="date"
    //       value={endDate}
    //       onChange={(e) => setEndDate(e.target.value)}
    //     />
    //   </label>
    //   <br />
    //   <label>
    //     Number of Guests:
    //     <input
    //       type="number"
    //       value={numGuests}
    //       onChange={(e) => setNumGuests(e.target.value)}
    //     />
    //   </label>
    //   <br />
    //   <button type="submit">Submit</button>
    // </form>
    // )
}

export default Search
