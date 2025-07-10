import { useContext, useState } from "react";
import './AvlDates.css';
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CompanyContext } from "../../CompanyContext";

function AvlDates() {
  const navigate = useNavigate();
  const { flights } = useContext(CompanyContext);
  const { id } = useParams();

  // ✅ Call all hooks at the top before any early return
  const [selectedDate, setSelectedDate] = useState('');

  const flight = flights?.find((f) => f._id === id);

  if (!flight) {
    return <div>Loading flight data or flight not found...</div>;
  }

  return (
    <div className="container">
      <h1>Choose Date</h1>
      <div className="date-section">
        <div className="left">
          <ChevronLeft />
          {flight.availableDates?.slice(0, 2).map((dateObj) => (
            <p
              key={dateObj.date}
              onClick={() => setSelectedDate(dateObj.date)}
              className={selectedDate === dateObj.date ? 'active' : 'date'}
            >
              {dateObj.date}
            </p>
          ))}
          <ChevronRight />
        </div>

        <div className="right">
          <button
            onClick={() => {
              const selectedSlotData = flight.availableDates.find(
                (d) => d.date === selectedDate
              );
              navigate(`/flight/${flight._id}/seats`, {
                state: {
                  selectedDate,
                  timeSlots: selectedSlotData ? selectedSlotData.timeSlots : [],
                },
              });
            }}
            disabled={!selectedDate}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default AvlDates;
