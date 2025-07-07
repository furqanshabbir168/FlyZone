import React from "react";
import './Home.css';
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Home () {
  return (
    <div className="home-container">
      <div className="overlay">
        <div className="home-content">
          <h1>Welcome to the FlyZone Admin Dashboard</h1>
          <p>
            Your central hub to manage flights, bookings, and operations — all in one place.
          </p>
          <p>
            Login to get started and take full control of your airline management.
          </p>

          <Link to="/admin/dashboard" className="go-dashboard-link">
            <span>Go To Dashboard</span>
            <ArrowRight className="arrow-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
