import React, { useContext } from "react";
import './Flight.css'
import { useParams } from "react-router-dom";
import flights from "../../assets/flights";

function Flight () {

    const { id } = useParams();
    const flight = flights.find((f) => f.id === parseInt(id)); // ⚠️ parseInt is important
    if (!flight) return <p>Flight not found</p>;

    

    return(
        <div className="flight-container">
            <div className="flight-details">
            <div className="left-section">
                <img src={flight.image} alt="" />
            </div>
            <div className="right-section">
                <h4>{flight.airline}</h4>
                <h3>{flight.title}</h3>
                <p>{flight.description}</p>
                <div className="detail">
                    <p>{flight.duration}</p>
                    <p>{flight.tripType}</p>
                    <p>{flight.travelClass}</p>
                    <p>{flight.flightType}</p>
                </div>
                <div className="features" id="AvlDates">
                    <p>Features</p>
                    <ul>
                        <li>{flight.features[0]}</li>
                        <li>{flight.features[1]}</li>
                        <li>{flight.features[2]}</li>
                    </ul>
                </div>
                <div>
                    <h4>Flat $ {Math.floor(flight.price)} – Limited Offer</h4>
                </div>
                <div>
                    <button className="btn"><a href="#AvlDates">Buy Ticket</a></button>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Flight