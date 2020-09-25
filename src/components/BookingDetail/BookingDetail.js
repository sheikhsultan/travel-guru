import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import locationData from '../../fakeData/locationData';
import NotFound from '../NotFound/NotFound';
import './BookingDetail.css';
import Header from '../Header/Header';


const BookingDetail = () => {
  const { id } = useParams();
  const [location, setLocation] = useState({});
  let history = useHistory();

  useEffect(() => { // Load location details data
    const findLocation = locationData.find(item => item.id === parseInt(id));
    setLocation(findLocation);
  }, [id])

  const submitHandle = (e) => {
    e.preventDefault();
    history.push(`/search/${id}`);
  }

  return (
      <main className="container">
      {
        location 
        ? 
        <div className="row mt-5">

          <div className="col-md-7">
            <h1 className="place-title">{location.title}</h1>
            <p className="place-desc">{location.description}</p>
          </div>
      
          <div className="col-md-5">
            <form className="booking-box mt-5" onSubmit={submitHandle}>
              <div className="">
                <p className="ml-3">Origin</p>
                <input className="ml-2 form-control" type="text" placeholder="Dhaka" required />
              </div>
              <div className="mt-2">
                <p className="ml-3">Destination</p>
                <input className="ml-2 form-control" type="text" placeholder="Cox’s Bazar" required />
              </div>
              <div className="d-flex mt-3 ml-2">
                <div>
                  <p className="ml-2">Form</p>
                  <input type="date" min="1000-01-01" max="3000-12-31" className="form-control cal-width" required />
                </div>
                <div>
                  <p className="ml-4">To</p>
                  <input type="date" min="1000-01-01" max="3000-12-31" className="ml-4 form-control cal-width" required />
                </div>
              </div>
              <button type="submit" className="btn btn-warning ml-2 mt-4">Start Booking</button>
            </form>
          </div>

        </div>
        : 
        <NotFound />
      }
    </main>
  );
};

export default BookingDetail;