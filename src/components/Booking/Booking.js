import React, { useState } from "react";
import TravelPlace from "../TravelPlace/TravelPlace";
import locationData from "../../fakeData/locationData";
import "./Booking.css";
import { useHistory } from "react-router-dom";

const Booking = () => {
  const location = locationData;
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("Cox’s bazar");
  const [description, setDescription] = useState(
    "fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and Khyang monastery it ..."
  );
  let redirectDetail = useHistory();

  const handleChange = (id, title, shortDescription) => {
    setId(id);
    setTitle(title);
    setDescription(shortDescription);
  };
  const btnHandleClick = () => {
    redirectDetail.push(`/bookingDetail/${id}`);
  };

  return (
      <main className="main">
        <div className="row mt-5">
          <div className="justify-content-between col-sm-6 col-md-5 col-lg-5">
            <div>
              <h1 className="title">{title}</h1>
              <p className="booking-font">{description}</p>
              <br />
              <button className="btn booking-btn mt-3" onClick={btnHandleClick}>
                Booking <span className="fas fa-arrow-right"></span>
              </button>
            </div>
          </div>

          <div className="d-flex justify-content-end col-sm-6 col-md-7 col-lg-7">
            {location.map((item) => (
              <TravelPlace
                key={item.id}
                place={item}
                handleChange={handleChange}
              />
            ))}
          </div>
        </div>
      </main>
  );
};

export default Booking;
