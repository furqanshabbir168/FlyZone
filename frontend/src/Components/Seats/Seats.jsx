import React, { useState } from "react";
import "./Seats.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Clock } from "lucide-react";

function Seats() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedDate, timeSlots } = location.state || {};
  const [selectedTime , setSelectedTime ] = useState('');
  const [ selectedSeats , setSelectedSeats ] = useState([]);

  if (!selectedDate || !timeSlots) {
    return (
      <div className="seats-wrapper">
        <h2>Invalid access. Please select a date first.</h2>
        <button onClick={() => navigate("/")}>Go Back to Home</button>
      </div>
    );
  }

  const toggleSeat = (seat) => {
  if (selectedSeats.includes(seat)) {
    setSelectedSeats(selectedSeats.filter(s => s !== seat));
  } else {
    setSelectedSeats([...selectedSeats, seat]);
  }
};


  const seatRows = [
    ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8",],
    ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8",],
    ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8",],
    ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8",],
    ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8",],
    ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8",],
    ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8",],
    ["H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8",],
    ["I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8",],
    ["J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8",],
  ];

  return (
    <div className="seats-page">
  <div className="seat-layout">

    <div className="timings-box">
      <h3>Available Timings</h3>
      <ul>
        {timeSlots.map((slot, index) => (
          <li key={index} className={selectedTime===slot?'active-time':''} onClick={()=>{setSelectedTime(slot)}}>
            <Clock size={16} />
            {slot}
          </li>
        ))}
      </ul>
    </div>

    <div className="right-section-seat">

      <div className="all-seats">
        {seatRows.map((row, rowIndex) => {
          const leftSeats = row.slice(0, 4);
          const rightSeats = row.slice(4, 8);
          return (
            <div className="seat-row" key={rowIndex}>
              <div className="seat-side">
                {leftSeats.map((seat) => (
                  <div className={selectedSeats.includes(seat)?'active-seat':"seat-box"} key={seat} onClick={()=>{toggleSeat(seat)}}>{seat}</div>
                ))}
              </div>
              <div className="seat-side">
                {rightSeats.map((seat) => (
                  <div className={selectedSeats.includes(seat)?'active-seat':"seat-box"} key={seat} onClick={()=>{toggleSeat(seat)}}>{seat}</div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <button className="checkout-btn">Proceed to Checkout →</button>
    </div>

  </div>
</div>

  );
}

export default Seats;
