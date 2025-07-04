import React, { useContext, useState } from "react";
import './AvlDates.css';
import { useNavigate, useParams } from "react-router-dom";
import flights from "../../assets/flights";
import { ChevronLeft, ChevronRight } from 'lucide-react';

function AvlDates () {
    const navigate = useNavigate();

    const { id } = useParams();
    const flight = flights.find((f) => f.id === parseInt(id)); // ⚠️ parseInt is important
    const [selectedDate , setSelectedDate ] = useState('');
    return(
        <div className="container">
            <h1>Choose Date</h1>
            <div className="date-section">
                <div className="left">
                    <ChevronLeft/>
                <p onClick={()=>{setSelectedDate(flight.availableDates[0].date)}} className={selectedDate===flight.availableDates[0].date?'active':'date'}>{flight.availableDates[0].date}</p>
                <p onClick={()=>{setSelectedDate(flight.availableDates[1].date)}} className={selectedDate===flight.availableDates[1].date?'active':'date'}>{flight.availableDates[1].date}</p>
                <ChevronRight/>
            </div>
            <div className="right">
                <button
  onClick={() => {
    const selectedSlotData = flight.availableDates.find(d => d.date === selectedDate);
    navigate(`/flight/${flight.id}/seats`, {
      state: {
        selectedDate,
        timeSlots: selectedSlotData ? selectedSlotData.timeSlots : []
      }
    });
  }}
>
  Book Now
</button>

            </div>
            </div>
        </div>
    );
}
export default AvlDates