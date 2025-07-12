import './Booking.css';
import icon from '../../assets/icon.png';
import { useEffect, useState, useContext } from 'react';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { CompanyContext } from '../../CompanyContext';

function Booking() {
  const [bookings, setBookings] = useState([]);
  const { user, isLoaded } = useUser();
  const { url, flights } = useContext(CompanyContext);

  useEffect(() => {
    async function fetchBookings() {
      if (!isLoaded || !user?.id) return;
      try {
        const res = await axios.get(`${url}/api/booking/mybooking/${user.id}`);
        setBookings(res.data.data || []);
      } catch (err) {
        toast.error("Failed to fetch bookings");
      }
    }
    fetchBookings();
  }, [isLoaded, user, url]);

  // stripe
  const handlePayment = async (bookingId) => {
  try {
    const res = await axios.post(`${url}/api/booking/payment/${bookingId}`);
    if (res.data?.session_url) {
      window.location.href = res.data.session_url; // ⬅️ Redirect to Stripe checkout
    } else {
      toast.error("Stripe session not created");
    }
  } catch (err) {
    console.log(err);
    toast.error("Stripe payment failed");
  }
};


  return (
    <div className='bookings'>
      <div className='topheading'>
        <h2>My Bookings</h2>

        {bookings.length === 0 ? (
          <p className='error'>No bookings found.</p>
        ) : (
          bookings.map((booking, index) => {
            const flight = flights.find(f => f._id === booking.flightId);

            return (
              <div className='booking-card' key={index}>
                <div className='card-right'>
                  <img src={icon} alt="" />
                </div>
                <div className='card-center'>
                  <div className='card-centre-top'>
                    <h4>{flight?.title || "Unknown Flight"}</h4>
                    <h5>{flight?.airline || "Unknown Airline"}</h5>
                    <p>{flight?.duration || "-"}</p>
                    <p className='note'>Note : Your booking will be auto cancalled, If not paid within 15 minutes.</p>
                  </div>
                  <div className='card-centre-bottom'>
                    <p>Travel Date : {booking.flightDate} at {booking.flightTime}</p>
                  </div>
                </div>
                <div className='card-right'>
                  <div className='card-right-top'>
                    <h2>${booking.amount}</h2>
                   <button
  onClick={(e) => {
    e.target.disabled = true;
    handlePayment(booking._id);
  }}
className='pay'>
  Pay Now
</button>

                  </div>
                  <div className='card-right-centre'>
                    <p>flight Id : {booking.flightId}</p>
                    <p>user Id : {booking.userId}</p>
                  </div>
                  <div className='card-right-bottom'>
                    <p>Total tickets : {booking.seats.length}</p>
                    <p>Seat No : {booking.seats.join(', ')}</p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Booking;
