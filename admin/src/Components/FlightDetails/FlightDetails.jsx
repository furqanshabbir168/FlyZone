import './FlightDetails.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function FlightDetails({ url }) {
  const [flights, setFlights] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function fetchFlights() {
      try {
        const response = await axios.get(`${url}/api/flight/list`);
        if (response) {
          setFlights(response.data.data);
        } else {
          toast.error('Something went wrong');
        }
      } catch (err) {
        toast.error('Error fetching flights');
      }
    }

    fetchFlights();
  }, []);

  const flight = flights.find((f) => f._id === id);
  if (!flight) return <p className="not-found">loading flights...</p>;

  function handleDeleteClick() {
    toast.error("Flight can't be deleted!");
  }

  return (
    <div className='details-container'>
      <div className='left-section'>
        <img src={flight.image} alt={flight.title} />
      </div>

      <div className='right-section'>
        <h2>{flight.title}</h2>
        <p><strong>Airline:</strong> {flight.airline}</p>
        <p><strong>Trip Type:</strong> {flight.tripType}</p>
        <p><strong>Travel Class:</strong> {flight.travelClass}</p>
        <p><strong>Flight Type:</strong> {flight.flightType}</p>
        <p><strong>Duration:</strong> {flight.duration}</p>
        <p><strong>Price:</strong> ${flight.price}</p>
        <p><strong>Description:</strong> {flight.description}</p>
        
        <div className="features">
          <strong>Features:</strong>
          <ul>
            {flight.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="dates-and-delete">
          <div className="dates-heading">
            <strong>Available Dates:</strong>
            <button className="delete-btn" onClick={handleDeleteClick}>
              Delete Flight
            </button>
          </div>
          <ul>
            {flight.availableDates.map((date, i) => (
              <li key={i}>
                On {date.date}  at   {date.timeSlots.join(' and ')}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FlightDetails;
