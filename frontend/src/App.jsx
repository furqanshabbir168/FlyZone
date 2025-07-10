import React, { useEffect, useState } from "react";
import Home from "./Pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Flights from "./Pages/Flights";
import FlightDetails from "./Pages/FlightDetails";
import FlightSeats from "./Pages/FlightSeats";
import MyBooking from "./Pages/MyBooking";
import { Toaster } from 'react-hot-toast'
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Loading from "./Components/Loading/Loading";
import ScrollToTop from "./Components/ScrollToTop";

function App () {

  const location = useLocation();
  const [ loading , setLoading ] = useState(false);

  useEffect(() => {
  setLoading(true);
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000); // Shorter & smoother
  return () => clearTimeout(timer);
}, [location]);



  return(
    <div>
      {loading && <Loading/>}
      <Toaster position="top-right" reverseOrder={false} />
      <NavBar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/flights" element={<Flights/>}/>
        <Route path="/flight/:id" element={<FlightDetails/>}/>
        <Route path="/flight/:id/seats" element={<FlightSeats/>}/>
        <Route path="/my-booking" element={<MyBooking/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}
export default App