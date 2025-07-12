import React, { useContext, useState } from "react";
import './FlightsDisplay.css';
import { CompanyContext } from "../../CompanyContext";
import { useNavigate } from 'react-router-dom';
import useDebounce from "../../Components/useDebounce.js";

function FlightsDisplay() {
  const { flights } = useContext(CompanyContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 300); // debounce after 300ms

  const filteredFlights = flights.filter(flight =>
    flight.title.toLowerCase().startsWith(debouncedSearch.toLowerCase())
  );

  return (
    <div className="flights-container">
      <div className="flights-heading">
        <h1>Available Flights</h1>
        <p>Explore all flights and find the one that suits you best.</p>
        <input
          type="search"
          placeholder="Search flights by routes"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flights">
        {filteredFlights.length > 0 ? (
          filteredFlights.map((flight) => (
            <div
              className="flight-card"
              key={flight._id}
              onClick={() => navigate(`/flight/${flight._id}`)}
            >
              <img src={flight.image} alt={flight.title} loading="lazy" />
              <h3>{flight.title}</h3>
              <div className="details">
                <p>{flight.tripType}</p>
                <p>{flight.travelClass}</p>
                <p>{flight.flightType}</p>
                <p>{flight.duration}</p>
              </div>
              <button>Buy Tickets</button>
            </div>
          ))
        ) : (
          <p className="no-flights">No flights found.</p>
        )}
      </div>
    </div>
  );
}

export default FlightsDisplay;
