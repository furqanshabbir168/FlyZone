import React, { useContext } from "react";
import './Popular.css'
import { CompanyContext } from "../../CompanyContext";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Popular () {

    const {flights} = useContext(CompanyContext);
    const navigate = useNavigate()

    return(
        <div className="popular">
            <div className="top-heading">
                <h1>Popular Routes</h1>
                <div onClick={()=>{navigate('/flights')}}><p>View all</p><ArrowRight/></div>
            </div>
            <div className="flights">
                {flights.filter(flight=>flight.isPopular===true).map((flight)=>{
                    return <div key={flight.id} onClick={()=>{navigate(`/flight/${flight.id}`)}}>
                        <img src={flight.image} alt="" />
                        <h3>{flight.title}</h3>
                        <div className="details">
                            <p>{flight.tripType}</p>
                            <p>{flight.travelClass}</p>
                            <p>{flight.flightType}</p>
                            <p>{flight.duration}</p>
                        </div>
                        <button>Buy Tickets</button>
                    </div>
                })}
            </div>
            <div><button onClick={()=>{navigate('/flights')}}>Show More</button></div>
        </div>
    );
}
export default Popular