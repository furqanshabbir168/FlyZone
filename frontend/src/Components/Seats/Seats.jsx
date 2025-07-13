import React, { useState, useMemo, useCallback, useContext, useEffect } from "react";
import "./Seats.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Clock } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { CompanyContext } from "../../CompanyContext";
import axios from "axios";
import toast from "react-hot-toast";

function Seats() {
  const { flights, url } = useContext(CompanyContext);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedDate } = location.state || {};
  const { user, isLoaded } = useUser();

  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [reservedSeats, setReservedSeats] = useState([]);

  const flight = useMemo(() => flights.find(f => f._id === id), [flights, id]);

  const timeSlots = useMemo(() => {
    if (!flight || !selectedDate) return [];
    const dateData = flight.availableDates.find(d => d.date === selectedDate);
    return dateData?.timeSlots || [];
  }, [flight, selectedDate]);

  const pricePerSeat = flight?.price || 0;
  const totalPrice = pricePerSeat * selectedSeats.length;

  const toggleSeat = useCallback((seat) => {
    if (reservedSeats.includes(seat)) return;
    setSelectedSeats(prev =>
      prev.includes(seat) ? prev.filter(s => s !== seat) : [...prev, seat]
    );
  }, [reservedSeats]);

  // Fetch reserved seats when flight time or date changes
  useEffect(() => {
    const fetchReservedSeats = async () => {
      if (!selectedTime || !selectedDate || !flight?._id) return;

      try {
        const res = await axios.get(`${url}/api/booking/reserved`, {
          params: {
            flightId: flight._id,
            date: selectedDate,
            time: selectedTime,
          },
        });
        setReservedSeats(res.data.reservedSeats || []);
      } catch (error) {
        console.error("Failed to fetch reserved seats:", error);
      }
    };

    fetchReservedSeats();
  }, [selectedTime, selectedDate, flight]);

  const handleCheckout = async () => {
    if (!isLoaded) return toast.error("User is still loading...");
    if (!user?.id) return toast.error("Please login to proceed.");
    if (!selectedTime) return toast.error("Please select a time.");
    if (selectedSeats.length === 0) return toast.error("Select at least one seat.");
    if (!flight?._id || !selectedDate) return toast.error("Flight/date missing!");

    const bookingInfo = {
      userId: user.id,
      flightId: flight._id,
      flightDate: selectedDate,
      flightTime: selectedTime,
      seats: selectedSeats,
      amount: totalPrice,
    };

    try {
      const res = await axios.post(`${url}/api/booking/place`, bookingInfo);
      toast.success(res.data.message);
      navigate("/my-booking", { state: { booking: res.data.data } });
    } catch (error) {
      toast.error(error.response?.data?.message || "Booking failed.");
    }
  };

  const seatRows = useMemo(() => [
    ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8"],
    ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"],
    ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"],
    ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"],
    ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8"],
    ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8"],
    ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8"],
    ["H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8"],
    ["I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8"],
    ["J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8"],
  ], []);

  if (!selectedDate || !flight) {
    return (
      <div className="seats-wrapper">
        <h2>Invalid access. Please select a date first.</h2>
        <button onClick={() => navigate("/")}>Go Back to Home</button>
      </div>
    );
  }

  return (
    <div className="seats-page">
      <div className="seat-layout">

        {/* Timing Selection */}
        <div className="timings-box">
          <h3>Available Timings</h3>
          {timeSlots.length === 0 ? (
            <p>No time slots available for selected date</p>
          ) : (
            <ul>
              {timeSlots.map((slot, i) => (
                <li
                  key={i}
                  className={selectedTime === slot ? "active-time" : ""}
                  onClick={() => setSelectedTime(slot)}
                >
                  <Clock size={16} />
                  {slot}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Seat Selection */}
        <div className="right-section-seat">
          <div className="all-seats">
            {seatRows.map((row, i) => (
              <div className="seat-row" key={i}>
                {[0, 4].map((start) => (
                  <div className="seat-side" key={start}>
                    {row.slice(start, start + 4).map((seat) => {
                      const isReserved = reservedSeats.includes(seat);
                      const isSelected = selectedSeats.includes(seat);

                      return (
                        <div
                          key={seat}
                          className={
                            isReserved
                              ? "reserved-seat"
                              : isSelected
                              ? "active-seat"
                              : "seat-box"
                          }
                          onClick={() => {
                            if (isReserved) return toast.error("Seat already reserved");
                            toggleSeat(seat);
                          }}
                        >
                          {seat}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Total and Checkout */}
          <div className="total-price">Total Price: ${totalPrice}</div>
          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Seats;
