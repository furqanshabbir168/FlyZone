import React, { useContext } from "react";
import './FlightsDisplay.css';
import { CompanyContext } from "../../CompanyContext";
import { useNavigate } from 'react-router-dom';

function FlightsDisplay() {
  const { flights } = useContext(CompanyContext);
  const navigate = useNavigate();

  return (
    <div className="flights-container">
      {/* Header section */}
      <div className="flights-heading">
        <h1>Available Flights</h1>
        <p>Explore all flights and find the one that suits you best.</p>
      </div>

      {/* Flight cards */}
      <div className="flights">
        {flights.map((flight) => (
          <div className="flight-card" key={flight._id} onClick={()=>{navigate(`/flight/${flight._id}`)}}>
            <img src={flight.image} alt={flight.title} />
            <h3>{flight.title}</h3>
            <div className="details">
              <p>{flight.tripType}</p>
              <p>{flight.travelClass}</p>
              <p>{flight.flightType}</p>
              <p>{flight.duration}</p>
            </div>
            <button>Buy Tickets</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlightsDisplay;
