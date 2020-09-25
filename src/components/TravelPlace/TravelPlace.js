import React from 'react';
import { useHistory } from 'react-router-dom';
import './TravelPlace.css';

const TravelPlace = (props) => {
    const { id, title, url, shortDescription } = props.place;
    let history = useHistory();

    const handleClick = () => {
        history.push(`/bookingDetail/${id}`);
    }

    return (
        <div className="single-item float-left"  onMouseEnter={() => props.handleChange  (id, title, shortDescription)} onClick={handleClick}>
            <div className="div-img" style={{ backgroundImage: `url(${url})` }}>
                <h5 className="single-title">{title}</h5>
            </div>
           
        </div>
    );
};

export default TravelPlace;